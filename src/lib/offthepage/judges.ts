// The AI judges a player can bring their own key for, matching the app's Cloud AI providers (Shared/AIProvider.swift):
// same endpoints, same default models. Calls go straight from the player's browser to the provider they picked,
// so 614 Restore never sees the key or the words and pays nothing.
import { parseJudgement, systemPrompt, userPrompt, type ChallengePrompt, type Judgement, type Tone, type Track } from './daily'

export type ProviderId = 'groq' | 'google' | 'openai' | 'anthropic'

export type Provider = {
  id: ProviderId
  name: string
  free: boolean
  keyPrefix: string
  keyURL: string
  howTo: string
}

export const PROVIDERS: Provider[] = [
  { id: 'groq', name: 'Groq', free: true, keyPrefix: 'gsk_', keyURL: 'https://console.groq.com/keys',
    howTo: 'Sign in to Groq (free, no card needed), tap Create API Key, then copy it.' },
  { id: 'google', name: 'Google Gemini', free: true, keyPrefix: 'AIza', keyURL: 'https://aistudio.google.com/apikey',
    howTo: 'Sign in to Google AI Studio, tap Create API key, then copy it.' },
  { id: 'openai', name: 'OpenAI', free: false, keyPrefix: 'sk-', keyURL: 'https://platform.openai.com/api-keys',
    howTo: 'Sign in to OpenAI, tap Create new secret key, then copy it. OpenAI charges your account for what you use.' },
  { id: 'anthropic', name: 'Anthropic Claude', free: false, keyPrefix: 'sk-ant-', keyURL: 'https://console.anthropic.com/settings/keys',
    howTo: 'Sign in to Anthropic, tap Create Key, then copy it. Anthropic charges your account for what you use.' },
]

export function isProvider(value: unknown): value is ProviderId {
  return PROVIDERS.some((p) => p.id === value)
}

export class JudgeError extends Error {
  constructor(public kind: 'key' | 'limit' | 'billing' | 'other', message: string) {
    super(message)
  }
}

/** The provider's own short explanation from an error reply, if it gave one. */
function providerMessage(text: string): string {
  try {
    const data = JSON.parse(text) as { error?: { message?: unknown } | unknown[]; message?: unknown }
    const error = Array.isArray(data) ? (data[0] as { error?: { message?: unknown } })?.error : data.error
    const message = (error as { message?: unknown } | undefined)?.message ?? data.message
    return typeof message === 'string' ? message.trim().slice(0, 160) : ''
  } catch {
    return ''
  }
}

async function post(url: string, name: string, headers: Record<string, string>, body: unknown): Promise<unknown> {
  const reply = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(60_000),
  })
  if (reply.ok) return reply.json()
  const text = await reply.text()
  const said = providerMessage(text)
  const lower = text.toLowerCase()
  // Google answers a bad key with 400 API_KEY_INVALID rather than 401.
  if (reply.status === 401 || reply.status === 403 || (reply.status === 400 && /api[ _-]?key/i.test(text))) {
    throw new JudgeError('key', `${name} turned down that key. Check it, or remove it and add it again.`)
  }
  // Out of credit: 402, or OpenAI's 429 insufficient_quota, or Anthropic's 400 "credit balance is too low".
  // (Free Gemini keys say "quota" for an ordinary rate limit, so plain "quota" isn't counted.)
  if (reply.status === 402 || /credit balance|billing|insufficient_quota|insufficient balance|payment required|add credit/.test(lower)) {
    throw new JudgeError('billing', `Your key works, but your ${name} account is out of credit or needs billing set up. Add credit with ${name}, or use a free ${PROVIDERS.filter((p) => p.free && p.name !== name).map((p) => p.name).join(' or ')} key instead.`)
  }
  if (reply.status === 429) throw new JudgeError('limit', `${name} says you’ve hit its limit for now. Try again in a minute.`)
  throw new JudgeError('other', `${name} returned an error (${reply.status})${said ? `: ${said}` : '.'}`)
}

type ChatReply = { choices?: { message?: { content?: string } }[] }
type MessagesReply = { content?: { type?: string; text?: string }[] }

/** Asks the player's own AI to judge the answer. Throws JudgeError when it can't. */
export async function judgeWithKey(
  provider: ProviderId, key: string, track: Track, tone: Tone, prompt: ChallengePrompt, transcript: string,
): Promise<Judgement> {
  const name = PROVIDERS.find((p) => p.id === provider)?.name ?? 'Your AI provider'
  const system = systemPrompt(track, tone)
  const user = userPrompt(prompt, transcript)
  let text = ''
  if (provider === 'anthropic') {
    const data = (await post('https://api.anthropic.com/v1/messages', name, {
      'x-api-key': key, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true',
    }, { model: 'claude-haiku-5-5', max_tokens: 1024, system, messages: [{ role: 'user', content: user }] })) as MessagesReply
    text = data.content?.filter((c) => c.type === 'text').map((c) => c.text ?? '').join('') ?? ''
  } else {
    const url = {
      groq: 'https://api.groq.com/openai/v1/chat/completions',
      google: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
      openai: 'https://api.openai.com/v1/chat/completions',
    }[provider]
    const model = { groq: 'openai/gpt-oss-20b', google: 'gemini-flash-latest', openai: 'gpt-4o-mini' }[provider]
    const body: Record<string, unknown> = {
      model,
      messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
      max_tokens: 2048,
    }
    // gpt-oss thinks before answering; keep that short and leave room for the answer (as the app does).
    if (provider === 'groq') Object.assign(body, { reasoning_effort: 'low', max_tokens: 4096 })
    const data = (await post(url, name, { Authorization: `Bearer ${key}` }, body)) as ChatReply
    text = data.choices?.[0]?.message?.content ?? ''
  }
  const judgement = parseJudgement(text)
  if (!judgement) throw new JudgeError('other', 'Your AI’s answer couldn’t be read.')
  return judgement
}
