import type { Metadata } from 'next'
import Link from 'next/link'
import { Trophy } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AppStoreButton from '@/components/AppStoreButton'
import { TRACKS, TRACK_TITLES } from '@/lib/offthepage/daily'
import { highScore } from '@/lib/offthepage/scores'
import { formatDate } from '../_daily/share'

// Refreshed every minute: the High Score list doesn't need to be live to the second.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Today’s High Score | Off the Page Daily Challenge',
  description: 'The highest Off the Page Daily Challenge score posted today on Sell It, Explain It and Interview It. Post yours from the iPhone app.',
}

const APP_STORE_URL = 'https://apps.apple.com/us/app/off-the-page/id6834362817?pt=82404571&ct=614restore-offthepage-results'

/** Today and yesterday in US Eastern time, as YYYY-MM-DD. Players post their own calendar day, so both are listed. */
function recentDates(now = new Date()): string[] {
  const day = (offset: number) =>
    new Date(now.getTime() - offset * 86_400_000).toLocaleDateString('en-CA', { timeZone: 'America/New_York' })
  return [day(0), day(1)]
}

export default async function ResultsPage() {
  const dates = recentDates()
  const days = await Promise.all(
    dates.map(async (date) => ({
      date,
      tracks: await Promise.all(TRACKS.map(async (track) => ({ track, high: await highScore(date, track) }))),
    })),
  )

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#1b1030] via-[#3a1660] to-[#5c1352] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="inline-flex items-center gap-2 text-[#d6fa29] font-semibold mb-3"><Trophy className="w-5 h-5" aria-hidden /> Off the Page Daily Challenge</p>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold">Today’s High Score</h1>
          <p className="mt-4 text-white/80">
            The best score posted from the iPhone app today on each track. Players choose whether to post, and only a score and an optional short name are shown.
          </p>
        </div>
      </section>

      {days.map((day, index) => (
        <section key={day.date} className={index === 0 ? 'py-12' : 'pb-12'}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-heading font-bold mb-4">{index === 0 ? 'Today' : 'Yesterday'} · {formatDate(day.date)}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {day.tracks.map(({ track, high }) => (
                <div key={track} className="rounded-2xl border border-steel-200 p-5">
                  <p className="text-sm font-semibold text-steel-500">{TRACK_TITLES[track]}</p>
                  {high ? (
                    <>
                      <p className="mt-2 text-5xl font-heading font-bold text-[#3a1660]" aria-label={`High score ${high.score}`}>{high.score}</p>
                      <p className="mt-1 text-steel-600">{high.nick || 'Anonymous'}</p>
                    </>
                  ) : (
                    <p className="mt-3 text-steel-500">No one has posted yet. Be the first.</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-12 bg-steel-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-heading font-bold">Post yours</h2>
          <p className="mt-3 text-steel-600">
            Finish today’s challenge in the Off the Page app, then choose Post. You can share just your score, or your score with your tries and Zedd’s feedback.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <AppStoreButton href={APP_STORE_URL} app="Off the Page" placement="high-score" />
            <Link href="/software/offthepage#daily-challenge" className="px-5 py-3 rounded-xl border border-steel-300 font-semibold">Play in your browser</Link>
          </div>
          <p className="mt-6 text-sm text-steel-500">
            Scores are posted by players from their own phones and aren’t verified. <Link href="/software/offthepage/privacy#high-score" className="underline">How posting works</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
