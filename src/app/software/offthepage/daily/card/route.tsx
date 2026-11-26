// The share card, laid out like the app's ChallengeShareCard (DailyChallengeView.swift): 1080 × 1350.
// Without a valid result in the query it draws a plain invitation card.
import { ImageResponse } from 'next/og'
import { TRACK_TITLES } from '@/lib/offthepage/daily'
import { formatDate, shareParams } from '../share'

const LIME = '#d6fa29'
const TEAL = '#2eebcc'
const NIGHT = '#0d0a12'
const PURPLE = '#291247'

// Inter, the site's own font, in the weights the card uses. Only the glyphs in the card's text are fetched.
// Google splits the result into a few files by character range, so load them all.
async function inter(weight: number, text: string): Promise<ArrayBuffer[]> {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(text)}`)).text()
    const sources = Array.from(css.matchAll(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/g), (m) => m[1])
    return await Promise.all(sources.map(async (src) => (await fetch(src)).arrayBuffer()))
  } catch {
    return []
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const shared = shareParams(url.searchParams)
  const zedd = `${url.origin}/images/offthepage/zedd-head.png`

  const muted = 'rgba(255,255,255,0.75)'
  const score = shared ? String(shared.score) : '30s'
  const promptText = shared ? shared.prompt.prompt : 'Sell it. Explain it. Nail the interview question. Out loud, in 30 seconds.'
  const promptSize = promptText.length > 70 ? 40 : 46
  const verdict = shared?.verdict ? `“${shared.verdict.replace(/'/g, '’')}”` : '“Think you can talk your way past me?” — Zedd'
  const label = shared ? `${TRACK_TITLES[shared.track].toUpperCase()} · ${formatDate(shared.date)}` : 'A NEW CHALLENGE EVERY DAY'
  const footer = 'Can you beat it? 614restore.com/software/offthepage/daily'
  const allText = ['OFF THE PAGE DAILY CHALLENGE', label, promptText, score, verdict, 'Learn it. Say it. Land it.', footer].join(' ')
  const weights = [400, 600, 700, 800] as const
  const loaded = await Promise.all(weights.map((w) => inter(w, allText)))
  const fonts = weights.flatMap((weight, i) => loaded[i].map((data) => ({ name: 'Inter', data, weight, style: 'normal' as const })))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: 60, color: 'white', fontFamily: 'Inter',
          backgroundImage: `linear-gradient(180deg, ${NIGHT}, ${PURPLE})`,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: LIME, letterSpacing: 1 }}>OFF THE PAGE</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>DAILY CHALLENGE</div>
        </div>
        <div style={{ fontSize: 24, fontWeight: 600, color: muted, marginTop: 22 }}>
          {label}
        </div>
        <div style={{ fontSize: promptSize, fontWeight: 700, marginTop: 22, lineHeight: 1.2 }}>{promptText}</div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 22 }}>
          <div
            style={{
              fontSize: shared ? 190 : 150, fontWeight: 800, marginRight: 28, lineHeight: 1,
              backgroundImage: `linear-gradient(90deg, ${LIME}, ${TEAL})`, backgroundClip: 'text', color: 'transparent',
            }}
          >
            {score}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={zedd} width={207} height={230} alt="" />
        </div>
        <div style={{ fontSize: 40, fontWeight: 600, fontStyle: 'italic', marginTop: 22, lineHeight: 1.25 }}>
          {verdict}
        </div>
        <div style={{ flexGrow: 1 }} />
        <div style={{ fontSize: 30, fontWeight: 700, color: LIME }}>Learn it. Say it. Land it.</div>
        <div style={{ fontSize: 24, color: muted, marginTop: 10 }}>{footer}</div>
      </div>
    ),
    {
      width: 1080,
      height: 1350,
      fonts: fonts.length ? fonts : undefined,
      headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=31536000, immutable' },
    },
  )
}
