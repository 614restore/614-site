// POST from the Off the Page iPhone app when the player chooses "Post to Today's High Score".
// Body: { t: track, d: YYYY-MM-DD, s: 0–100, k: random code, n?: short name }. Everything is checked, nothing is trusted.
import { NextResponse } from 'next/server'
import { cleanNick, dateIsPlausible, highScore, isToken, isTrackName, postScore, pruneOld } from '@/lib/offthepage/scores'

export const dynamic = 'force-dynamic'

const fail = (status: number, error: string) => NextResponse.json({ ok: false, error }, { status })

export async function POST(request: Request) {
  const text = await request.text()
  if (text.length > 1_000) return fail(413, 'Too large')
  let body: Record<string, unknown>
  try {
    body = JSON.parse(text) as Record<string, unknown>
  } catch {
    return fail(400, 'Bad request')
  }
  const { t, d, s, k, n } = body
  if (!isTrackName(t) || !dateIsPlausible(d) || !isToken(k)) return fail(400, 'Bad request')
  if (typeof s !== 'number' || !Number.isInteger(s) || s < 0 || s > 100) return fail(400, 'Bad score')
  try {
    const status = await postScore({ date: d, track: t, score: s, token: k, nick: cleanNick(n) })
    await pruneOld(d)
    return NextResponse.json({ ok: true, status, high: await highScore(d, t) })
  } catch {
    return fail(503, 'Try again later')
  }
}
