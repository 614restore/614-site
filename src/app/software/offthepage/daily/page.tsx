import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DailyChallenge from './DailyChallenge'
import { shareParams } from './share'

const TITLE = 'Off the Page Daily Challenge: 30 seconds, say it out loud | 614 Restore'
const DESCRIPTION =
  'A new 30-second speaking challenge every day. Sell it, explain it or nail the interview question, out loud, and Zedd scores you. Free in your browser, no download, no account.'

type Props = { searchParams: Record<string, string | string[] | undefined> }

// A shared result link (?t=…&s=…) previews as that player's score card; the plain page uses a generic card.
export function generateMetadata({ searchParams }: Props): Metadata {
  const shared = shareParams(searchParams)
  const image = shared ? `/software/offthepage/daily/card?${shared.query}` : '/software/offthepage/daily/card'
  const title = shared ? `I scored ${shared.score} on today's Off the Page Daily Challenge. Can you beat it?` : TITLE
  return {
    metadataBase: new URL('https://614restore.com'),
    title,
    description: DESCRIPTION,
    alternates: { canonical: 'https://614restore.com/software/offthepage/daily' },
    openGraph: {
      title,
      description: DESCRIPTION,
      url: 'https://614restore.com/software/offthepage/daily',
      images: [{ url: image, width: 1080, height: 1350 }],
    },
    twitter: { card: 'summary_large_image', title, description: DESCRIPTION, images: [image] },
  }
}

export default function DailyPage() {
  return (
    <main className="min-h-screen bg-[#140b24]">
      <Navbar />
      <DailyChallenge />
      <Footer />
    </main>
  )
}
