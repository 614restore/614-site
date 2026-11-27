import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, FileDown, Mail, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AppStoreButton from '@/components/AppStoreButton'
import DailyChallenge from './_daily/DailyChallenge'
import { shareParams } from './_daily/share'

const metadata: Metadata = {
  title: 'Off the Page: Read Aloud, Study & Interview Prep | 614 Restore',
  description:
    'Off the Page for iPhone and iPad reads anything aloud, records lectures, turns notes into study guides, spaced-repetition flashcards and practice tests, runs study rooms over FaceTime, and coaches you for interviews. Free 3-day trial, then a one-time $9.99 unlock, $4.99 at launch.',
  openGraph: {
    title: 'Off the Page: Hear it. Study it. Land the job.',
    description:
      'Read aloud, lecture recording, flashcards, practice tests, FaceTime study rooms and interview coaching in one app. Pay once, no subscription.',
    url: 'https://614restore.com/software/offthepage',
    images: ['/images/offthepage/listen-01.jpg'],
  },
}

type Props = { searchParams: Record<string, string | string[] | undefined> }

// A shared Daily Challenge result (?t=…&s=…) previews as that player's score card.
export function generateMetadata({ searchParams }: Props): Metadata {
  const shared = shareParams(searchParams)
  if (!shared) return metadata
  const title = `I scored ${shared.score} on today's Off the Page Daily Challenge. Can you beat it?`
  const description = 'A new speaking challenge every day, under a minute. Sell it, explain it or nail the interview question, out loud, and Zedd scores you. Free in your browser.'
  const image = `/software/offthepage/card?${shared.query}`
  return {
    ...metadata,
    metadataBase: new URL('https://614restore.com'),
    title,
    openGraph: { title, description, url: 'https://614restore.com/software/offthepage', images: [{ url: image, width: 1080, height: 1350 }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

const APP_STORE_URL = 'https://apps.apple.com/us/app/off-the-page/id6834362817?pt=82404571&ct=614restore-offthepage-page'
const SUPPORT_EMAIL = 'devmgr.app@gmail.com'
const PDF_URL = '/downloads/off-the-page-features.pdf'

const galleries = [
  {
    id: 'listen',
    title: 'Listen and study',
    shots: [
      'Hear anything: words light up as they are read aloud',
      'Record the lecture: a live transcript, with the important parts starred',
      'Zedd Notes in one tap: key concepts, definitions and practice questions',
      'Read aloud, record, practise: the Listen tab',
      'Your notes, out loud: every class in its own folder',
    ],
  },
  {
    id: 'study',
    title: 'Study together',
    shots: [
      'The same flashcards on every phone over FaceTime',
      'Send the room a practice test and see everyone’s score',
      'Flashcards from your notes: missed cards come back sooner',
      'Your own dictionary of key terms, with quiz mode',
      'Study guides, practice tests and flashcards for the whole folder',
    ],
  },
  {
    id: 'interview',
    title: 'Interview practice',
    shots: [
      'Practise out loud and see yourself on camera as you answer',
      'Every answer scored, with the top things to fix',
      'Eye contact, posture, pace and filler words',
      'Short hints during the real interview, from your résumé',
      'Check your interview stories with AI',
      'Talking points and a checklist during a live call',
    ],
  },
]

const featureGroups = [
  {
    title: 'Listen to anything',
    items: [
      'Paste or type any text and hear it in a natural voice, with each word lit up as it is read',
      'From any app: highlight text, tap Share, then Off the Page; plus a Safari extension',
      'Built-in browser with Reader View, and EPUB books by chapter',
      'Voices run on your iPhone, so it works offline',
    ],
  },
  {
    title: 'Record a professor',
    items: [
      'A live transcript on your phone as the lecture happens',
      'Star the important moments; each star quotes what was being said',
      'A cleaner transcript afterwards, then Lecture Notes in one tap',
      'Saved into any class folder',
    ],
  },
  {
    title: 'Study tools',
    items: [
      'Zedd Notes: a folder of notes becomes a study guide with practice questions',
      'Practice tests with a timer, instant grading and explanations',
      'Zedd brings back the cards you’re about to forget (spaced repetition), plus a dictionary of your key terms',
      'Photos and scans of whiteboards, slides and pages become notes',
    ],
  },
  {
    title: 'Study Room over FaceTime',
    items: [
      'Up to 32 people see the same flashcards live',
      'Buzz Race and Card Holder games, and I’m Ready check-ins',
      'Send a practice test to the room and see everyone’s scores',
      'Breakout groups and shared pages',
    ],
  },
  {
    title: 'Interview and career prep',
    items: [
      'Mock interviews asked out loud for any role, with you on camera',
      'Every answer scored: structure, specifics, length, filler words, confidence',
      'Body language: eye contact, posture, pace and gestures, measured on the phone',
      'Live Interview: during a real Zoom, Teams or Meet call, full suggested answers or short hints from your résumé',
    ],
  },
  {
    title: 'Zedd, your helper',
    items: [
      'A cartoon alien who peeks out from under the page and points the way',
      'Help button with popular questions, search and Take Me There',
      'Walks you through setting up AI',
      'Polite, or Out There if you like being roasted',
    ],
  },
]

const advantages = [
  ['One price', '$9.99 once after a free 3-day trial, and $4.99 at launch. No subscription, nothing charged automatically.'],
  ['Remembers for you', 'Zedd brings back the cards you’re about to forget. Cards you miss come back sooner; cards you know wait days.'],
  ['Private by design', 'No account, no tracking, no Off the Page server. AI runs on your device by default.'],
  ['Works offline', 'Voices, transcripts and on-device AI work without internet.'],
  ['Everything connects', 'A recording becomes notes, a study guide, flashcards, a test and a group game.'],
  ['Honest AI', 'Interview help never invents experience; gaps show as blanks or “not in your résumé”.'],
  ['Accessible', 'Read-along highlighting, voices and speed, and text that fits at the largest sizes.'],
]

const faqs = [
  {
    q: 'How much does it cost?',
    a: 'Off the Page is a free download with a 3-day free trial of every feature. After that, a one-time Lifetime unlock keeps everything: $9.99, or $4.99 at launch through December 31, 2026. There is no subscription, and nothing is charged automatically.',
  },
  {
    q: 'Does it use spaced repetition?',
    a: 'Yes. Zedd brings back the cards you’re about to forget. After each flashcard, tap Again, Good or Easy: a card you miss comes back in about a minute, and a card you know comes back after a day, then three days, then longer gaps. The Study tab shows how many cards are due today, and Review gathers the due cards from every deck.',
  },
  {
    q: 'I bought it on another device. How do I get it back?',
    a: 'Open Settings in the app and tap Restore Purchase. Purchases follow your Apple Account.',
  },
  {
    q: 'Where are my notes saved?',
    a: 'In an "Off the Page" folder on your device, which you can also see in the Files app. If you turn on Sync with iCloud in Settings, the folder moves to your own iCloud Drive so it appears on your other devices.',
  },
  {
    q: 'How do I get a more natural voice?',
    a: 'In the app, go to Settings › Voice and download a Premium voice. Premium voices are free from Apple and run entirely on your device.',
  },
  {
    q: "Why don't the AI study tools work on my phone?",
    a: 'On-device study tools use Apple Intelligence, which needs iOS 26 on a supported iPhone or iPad with Apple Intelligence turned on. On other devices you can turn on Cloud AI in Settings › Study Tools and use your own key from a provider like Groq (free tier available). Zedd can walk you through it.',
  },
  {
    q: 'How do I use Off the Page in other apps?',
    a: 'Highlight text, tap Share, and choose Off the Page. In Safari, turn on the Off the Page extension (Settings › Use Off the Page in Safari in the app shows how).',
  },
  {
    q: 'How does the Study Room work?',
    a: 'Start a FaceTime call, then tap Study Together on a flashcard deck. Everyone on the call who has Off the Page joins the same study room. Friends who don’t have the app yet get a link to the App Store.',
  },
  {
    q: 'How does Live Interview work?',
    a: 'Run your interview on a computer or another device and keep Off the Page open beside you. It listens, spots each question, and shows either a full suggested answer from your résumé or short hints, whichever you choose. Add your résumé and the job description under Your Prep first.',
  },
]

export default function OffThePagePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1b1030] via-[#3a1660] to-[#5c1352] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="text-center lg:text-left">
            <img
              src="/images/offthepage-logo.png"
              alt="Off the Page"
              className="w-20 h-20 rounded-[22%] mx-auto lg:mx-0 mb-6 shadow-lg"
            />
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
              Hear it. Study it. <span className="text-[#ff5fd2]">Land the job.</span>
            </h1>
            <p className="text-[#e6dcff] font-medium mb-4">Off the Page for iPhone and iPad</p>
            <p className="text-white/80 text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              The read-aloud app, lecture recorder, flashcard and quiz app, study-group tool and interview coach you
              would otherwise juggle, in one app. Private by design, with Zedd the alien showing you around.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
              <AppStoreButton
                href={APP_STORE_URL}
                app="Off the Page"
                placement="hero"
                className="!bg-white !text-steel-900 hover:!bg-steel-100"
              />
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 font-semibold px-5 py-3 rounded-xl transition-colors"
              >
                <FileDown className="w-5 h-5" />
                Features (PDF)
              </a>
            </div>
            <p className="text-white/60 text-sm mt-3">Free download · 3-day free trial · Launch price $4.99 once (regular $9.99) · No subscription</p>
          </div>
          <div className="flex justify-center gap-4">
            <img
              src="/images/offthepage/listen-01.jpg"
              alt="Text read aloud with each word lit up"
              className="w-44 sm:w-52 rounded-2xl shadow-2xl"
            />
            <img
              src="/images/offthepage/interview-01.jpg"
              alt="Practice interview with your camera picture"
              className="w-44 sm:w-52 rounded-2xl shadow-2xl mt-10 hidden sm:block"
            />
          </div>
        </div>
      </section>

      <DailyChallenge />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {galleries.map((gallery) => (
            <div key={gallery.id}>
              <h2 className="text-2xl font-heading font-bold text-steel-900 mb-6">{gallery.title}</h2>
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
                {gallery.shots.map((alt, i) => (
                  <img
                    key={alt}
                    src={`/images/offthepage/${gallery.id}-0${i + 1}.jpg`}
                    alt={alt}
                    title={alt}
                    loading="lazy"
                    className="w-52 sm:w-60 flex-shrink-0 snap-start rounded-2xl shadow-lg"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-steel-900 mb-8">What it does</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureGroups.map((group) => (
              <div key={group.title} className="bg-white rounded-2xl border border-steel-100 p-6">
                <h3 className="text-lg font-heading font-bold text-steel-900 mb-3">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-steel-600 text-sm">
                      <ArrowRight className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <h2 className="text-2xl font-heading font-bold text-steel-900 mb-2">Why Off the Page</h2>
            <p className="text-steel-500 mb-8">Most students would need several monthly subscriptions to get all of this.</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {advantages.map(([title, text]) => (
                <div key={title} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-steel-600 text-sm">
                    <span className="font-semibold text-steel-900">{title}.</span> {text}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-red-600 font-semibold mt-8 hover:gap-3 transition-all"
            >
              <FileDown className="w-5 h-5" />
              Download the full features and advantages (PDF) →
            </a>
          </div>
          <div className="flex flex-col items-center">
            <video
              src="/videos/offthepage-preview.mp4"
              poster="/images/offthepage/preview-poster.jpg"
              controls
              playsInline
              preload="none"
              className="w-60 rounded-2xl shadow-lg bg-black"
            />
            <p className="text-steel-400 text-xs mt-2">What&apos;s new: Live Interview and Interview Practice</p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-br from-[#1b1030] via-[#3a1660] to-[#5c1352] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
          <img
            src="/images/offthepage/zedd.png"
            alt="Zedd, the Off the Page helper"
            className="w-28 h-28 rounded-full border-4 border-[#c8f02a] bg-white/10"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-heading font-bold mb-2">Try everything free for 3 days</h2>
            <p className="text-white/80 mb-5">Then keep it forever for $4.99 at launch (regular $9.99). No account to create.</p>
            <AppStoreButton
              href={APP_STORE_URL}
              app="Off the Page"
              placement="footer-cta"
              className="!bg-white !text-steel-900 hover:!bg-steel-100"
            />
          </div>
        </div>
      </section>

      <section id="support" className="py-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-steel-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-steel-100 p-5">
                <summary className="font-semibold text-steel-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-red-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="text-steel-600 mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          <h3 className="text-xl font-heading font-bold text-steel-900 mt-12 mb-2">Support</h3>
          <p className="text-steel-500 mb-6">
            Questions, a bug, or an idea? Email us and we&apos;ll get back to you. In the app, Settings › Support ›
            Contact Support fills in your app version for you.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Off%20the%20Page%20Support`}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Mail className="w-5 h-5" />
              {SUPPORT_EMAIL}
            </a>
            <Link
              href="/software/offthepage/privacy"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
            >
              <ShieldCheck className="w-5 h-5" />
              Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
