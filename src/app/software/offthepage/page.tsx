import Link from 'next/link'
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Off the Page: Read Aloud & Study | 614 Restore',
  description:
    'Off the Page for iPhone and iPad reads any text aloud, saves it into subject folders, and turns notes, lectures, and books into study guides, flashcards, and practice tests. Support and FAQs.',
}

const SUPPORT_EMAIL = 'devmgr.app@gmail.com'

const features = [
  'Read anything aloud: highlight text in any app and tap Share › Off the Page, or paste it in',
  'Save text, photos, scanned pages, books (EPUB), and lecture recordings into subject folders',
  'Study guides, Key Terms, flashcards, and practice tests, made on your device',
  'Record lectures with an on-device transcript and lecture notes',
  'Study Together over FaceTime with SharePlay: buzz-race flashcards for up to 32 people',
  'No account, no ads, no tracking',
]

const faqs = [
  {
    q: 'How much does it cost?',
    a: 'Off the Page is a free download with a 3-day free trial of every feature. After that, a one-time Lifetime unlock keeps everything. There is no subscription, and nothing is charged automatically.',
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
    q: 'Why don\'t the AI study tools work on my phone?',
    a: 'On-device study tools use Apple Intelligence, which needs iOS 26 on a supported iPhone or iPad with Apple Intelligence turned on. On other devices you can turn on Cloud AI in Settings › Study Tools and use your own key from a provider like Groq (free tier available).',
  },
  {
    q: 'How do I use Off the Page in other apps?',
    a: 'Highlight text, tap Share, and choose Off the Page. In Safari, turn on the Off the Page extension (Settings › Use Off the Page in Safari in the app shows how).',
  },
  {
    q: 'How does Study Together work?',
    a: 'Start a FaceTime call, then tap Study Together on a flashcard deck. Everyone on the call who has Off the Page joins the same study room.',
  },
]

export default function OffThePagePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 bg-steel-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/images/offthepage-icon.png" alt="Off the Page app icon" className="w-24 h-24 rounded-[22%] mx-auto mb-6 shadow-lg" />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-steel-900 mb-3">Off the Page</h1>
          <p className="text-red-600 font-medium mb-4">Read Aloud &amp; Study for iPhone and iPad</p>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            Turn anything you read into something you can hear, and keep what matters organized, privately, on
            your device. Launching soon on the App Store.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-steel-900 mb-6">What it does</h2>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-steel-600">
                <ArrowRight className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="support" className="py-16 bg-steel-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-steel-900 mb-2">Support</h2>
          <p className="text-steel-500 mb-6">
            Questions, a bug, or an idea? Email us and we&apos;ll get back to you. In the app, Settings › Support ›
            Contact Support fills in your app version for you.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Off%20the%20Page%20Support`}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Mail className="w-5 h-5" />
            {SUPPORT_EMAIL}
          </a>

          <h3 className="text-xl font-heading font-bold text-steel-900 mt-12 mb-4">Frequently asked questions</h3>
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
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/software/offthepage/privacy"
            className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
          >
            <ShieldCheck className="w-5 h-5" />
            Privacy Policy →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
