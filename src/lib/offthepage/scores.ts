// Today's High Score: the one thing the iPhone app can send to this site, only when the player chooses to post.
// Each post is a tiny private file whose name carries the score, so the best score for a day is found by listing
// names alone. No account, no email, no audio, no words; just a track, a date, a score, an optional short name and a
// random code (stored only as a hash) that lets one phone post once a day per track.
import { createHash } from 'node:crypto'
import { del, get, list, put } from '@vercel/blob'
import { TRACKS, type Track } from './daily'

export const NICK_MAX = 12
const DAY_MS = 86_400_000

// Short list of words that never appear on a public page, checked after turning look-alike characters back into letters.
const BLOCKED = [
  'fuck', 'shit', 'bitch', 'cunt', 'nigg', 'fagg', 'whore', 'slut', 'rape', 'nazi', 'hitler', 'kkk',
  'cock', 'dick', 'pussy', 'penis', 'vagina', 'porn', 'sex', 'anal', 'twat', 'retard',
]

/** A short name for the High Score page: letters, digits, spaces and . ' - only, up to NICK_MAX, or '' if none or not allowed. */
export function cleanNick(raw: unknown): string {
  if (typeof raw !== 'string') return ''
  const nick = raw.normalize('NFKC').replace(/[^A-Za-z0-9\u00C0-\u024F .'\-]/g, '').replace(/\s+/g, ' ').trim().slice(0, NICK_MAX).trim()
  if (!nick) return ''
  const flat = nick.toLowerCase().replace(/0/g, 'o').replace(/[1!|]/g, 'i').replace(/3/g, 'e').replace(/[4@]/g, 'a').replace(/[5$]/g, 's').replace(/[^a-z]/g, '')
  return BLOCKED.some((word) => flat.includes(word)) ? '' : nick
}

export function isToken(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z0-9_-]{16,64}$/.test(value)
}

/** The random code from the app, hashed so the stored name can't be turned back into it. */
export function deviceHash(token: string): string {
  return createHash('sha256').update(`otp-daily:${token}`).digest('hex').slice(0, 20)
}

/** A date the app sent (the player's own calendar day) is accepted if it's within a day of the server's UTC day. */
export function dateIsPlausible(date: unknown, now: Date = new Date()): date is string {
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false
  const [y, m, d] = date.split('-').map(Number)
  const at = Date.UTC(y, m - 1, d)
  if (new Date(at).getUTCDate() !== d) return false
  return Math.abs(at - Math.floor(now.getTime() / DAY_MS) * DAY_MS) <= DAY_MS
}

export function scorePrefix(date: string, track: Track): string {
  return `daily/${date}/${track}/`
}

export function scorePath(date: string, track: Track, score: number, hash: string): string {
  return `${scorePrefix(date, track)}${String(score).padStart(3, '0')}-${hash}.json`
}

/** The score in a stored file name, or null. */
export function scoreOf(pathname: string): number | null {
  const match = pathname.match(/\/(\d{3})-[0-9a-f]{20}\.json$/)
  return match ? Number(match[1]) : null
}

export type High = { score: number; nick: string }

/** Today's best score for a track, with the name the player chose (or ''), or null if nobody has posted. */
export async function highScore(date: string, track: Track): Promise<High | null> {
  try {
    const { blobs } = await list({ prefix: scorePrefix(date, track), limit: 1000 })
    const best = blobs.filter((b) => scoreOf(b.pathname) !== null).sort((a, b) => b.pathname.localeCompare(a.pathname))[0]
    if (!best) return null
    let nick = ''
    try {
      const file = await get(best.pathname, { access: 'private', useCache: false })
      if (file && file.statusCode === 200) nick = cleanNick(JSON.parse(await new Response(file.stream).text()).nick)
    } catch {
      nick = ''
    }
    return { score: scoreOf(best.pathname) ?? 0, nick }
  } catch {
    return null
  }
}

/** Scores are only kept for a few days. */
export const KEEP_DAYS = 3

/** The date (YYYY-MM-DD) in a stored file name, or null. */
export function dateOf(pathname: string): string | null {
  return pathname.match(/^daily\/(\d{4}-\d{2}-\d{2})\//)?.[1] ?? null
}

/** True when a stored file is older than KEEP_DAYS days before the day being posted. */
export function isStale(pathname: string, today: string): boolean {
  const date = dateOf(pathname)
  if (!date || !dateIsPlausible(today, new Date(`${today}T12:00:00Z`))) return false
  return Date.parse(`${today}T00:00:00Z`) - Date.parse(`${date}T00:00:00Z`) > KEEP_DAYS * DAY_MS
}

/** Deletes old scores. Best effort: a failure here never affects a post. */
export async function pruneOld(today: string): Promise<void> {
  try {
    const { blobs } = await list({ prefix: 'daily/', limit: 1000 })
    const stale = blobs.map((b) => b.pathname).filter((path) => isStale(path, today))
    if (stale.length) await del(stale)
  } catch {
    // Old files stay until the next post.
  }
}

export type PostResult = 'posted' | 'already'

/** Stores one score. A phone that already posted for this date and track is told so, and nothing changes. */
export async function postScore(input: { date: string; track: Track; score: number; token: string; nick: string }): Promise<PostResult> {
  const hash = deviceHash(input.token)
  const { blobs } = await list({ prefix: scorePrefix(input.date, input.track), limit: 1000 })
  if (blobs.some((b) => b.pathname.endsWith(`-${hash}.json`))) return 'already'
  await put(scorePath(input.date, input.track, input.score, hash), JSON.stringify({ nick: input.nick }), {
    access: 'private', addRandomSuffix: false, contentType: 'application/json',
  })
  return 'posted'
}

export function isTrackName(value: unknown): value is Track {
  return typeof value === 'string' && (TRACKS as string[]).includes(value)
}
