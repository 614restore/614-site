// The share link's query: t (track), p (prompt id), s (score 0–100), v (Zedd's verdict), d (YYYY-MM-DD).
// Used by the page's preview tags, the card image, and the Share button. Values are checked, never trusted.
import { isTrack, promptById, type ChallengePrompt, type Track } from '@/lib/offthepage/daily'

export type Shared = { track: Track; prompt: ChallengePrompt; score: number; verdict: string; date: string; query: string }

const MAX_VERDICT = 160

export function buildShareQuery(track: Track, promptId: string, score: number, verdict: string, date: string): string {
  return new URLSearchParams({ t: track, p: promptId, s: String(score), v: verdict.slice(0, MAX_VERDICT), d: date }).toString()
}

export function shareParams(params: Record<string, string | string[] | undefined> | URLSearchParams): Shared | null {
  const get = (key: string) => {
    const value = params instanceof URLSearchParams ? params.get(key) : params[key]
    return (Array.isArray(value) ? value[0] : value) ?? ''
  }
  const track = get('t')
  if (!isTrack(track)) return null
  const prompt = promptById(track, get('p'))
  const score = Number(get('s'))
  const date = get('d')
  if (!prompt || !Number.isInteger(score) || score < 0 || score > 100 || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return null
  const verdict = get('v').replace(/\s+/g, ' ').trim().slice(0, MAX_VERDICT)
  return { track, prompt, score, verdict, date, query: buildShareQuery(track, prompt.id, score, verdict, date) }
}

export function formatDate(date: string): string {
  const [y, m, d] = date.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}
