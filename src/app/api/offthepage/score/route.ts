// Scores a Daily Challenge answer with an AI judge through the Vercel AI Gateway.
// Receives only the transcript text (never audio), keeps nothing, and sets no cookies.
// Auth: AI_GATEWAY_API_KEY if set, otherwise the deployment's own Vercel OIDC token.
import { createHash } from 'node:crypto'
import { getCache } from '@vercel/functions'
import { getVercelOidcToken } from '@vercel/functions/oidc'
import {
  MAX_TRANSCRIPT, TOO_SHORT_WORDS, isTone, isTrack, parseJudgement, promptById, systemPrompt, userPrompt, words,
} from '@/lib/offthepage/daily'

export const dynamic = 'force-dynamic'

const GATEWAY_URL = 'https://ai-gateway.vercel.sh/v1/chat/completions'
const MODEL = process.env.OTP_JUDGE_MODEL || 'anthropic/claude-haiku-5.5'
const PER_IP_PER_DAY = 5
const ALL_PER_DAY = 5_000 // a ceiling on total AI scores a day, so a flood can't run up the bill
const MAX_BODY = 4_000
const MAX_OUTPUT_TOKENS = 400

const json = (body: unknown, status = 200) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })

async function gatewayToken(): Promise<string | null> {
  if (process.env.AI_GATEWAY_API_KEY) return process.env.AI_GATEWAY_API_KEY
  try {
    return await getVercelOidcToken()
  } catch {
    return null
  }
}

/** Counts this try against the per-IP and overall daily limits. The IP is hashed, never stored as is. */
async function allow(ip: string): Promise<boolean> {
  const day = new Date().toISOString().slice(0, 10)
  const cache = getCache({ namespace: 'otp-daily' })
  const ipKey = 'ip:' + createHash('sha256').update(`${day}:${ip}`).digest('hex').slice(0, 32)
  const allKey = `all:${day}`
  const [mine, everyone] = await Promise.all([cache.get(ipKey), cache.get(allKey)])
  const used = typeof mine === 'number' ? mine : 0
  const total = typeof everyone === 'number' ? everyone : 0
  if (used >= PER_IP_PER_DAY || total >= ALL_PER_DAY) return false
  await Promise.all([
    cache.set(ipKey, used + 1, { ttl: 86_400 }),
    cache.set(allKey, total + 1, { ttl: 86_400 }),
  ])
  return true
}

export async function POST(request: Request) {
  const raw = await request.text()
  if (raw.length > MAX_BODY) return json({ error: 'too-long' }, 413)

  let body: { track?: unknown; promptId?: unknown; tone?: unknown; transcript?: unknown }
  try {
    body = JSON.parse(raw)
  } catch {
    return json({ error: 'bad-request' }, 400)
  }
  const { track, tone, promptId } = body
  if (!isTrack(track) || !isTone(tone) || typeof promptId !== 'string' || typeof body.transcript !== 'string') {
    return json({ error: 'bad-request' }, 400)
  }
  // The prompt comes from our own list, never from the request, so only the transcript is player text.
  const prompt = promptById(track, promptId)
  if (!prompt) return json({ error: 'bad-request' }, 400)
  const transcript = Array.from(body.transcript.trim()).slice(0, MAX_TRANSCRIPT).join('')
  if (words(transcript).length < TOO_SHORT_WORDS) return json({ error: 'too-short' }, 400)

  const token = await gatewayToken()
  if (!token) return json({ error: 'not-configured' }, 503)

  const ip = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  if (!(await allow(ip))) return json({ error: 'limit' }, 429)

  try {
    const reply = await fetch(GATEWAY_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_OUTPUT_TOKENS,
        temperature: 0.3,
        messages: [
          { role: 'system', content: systemPrompt(track, tone) },
          { role: 'user', content: userPrompt(prompt, transcript) },
        ],
      }),
      signal: AbortSignal.timeout(20_000),
    })
    if (!reply.ok) {
      console.error('otp score: gateway', reply.status)
      return json({ error: 'judge-failed' }, 502)
    }
    const data = (await reply.json()) as { choices?: { message?: { content?: string } }[] }
    const judgement = parseJudgement(data.choices?.[0]?.message?.content ?? '')
    if (!judgement) return json({ error: 'judge-failed' }, 502)
    return json(judgement)
  } catch (error) {
    console.error('otp score:', error instanceof Error ? error.name : 'error')
    return json({ error: 'judge-failed' }, 502)
  }
}
