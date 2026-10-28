import { ArrowRight, Mail, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AppStoreButton from '@/components/AppStoreButton'

export const metadata = {
  title: 'MilesMGR: Mileage & Drive Log for iPhone | 614 Restore',
  description:
    'MilesMGR records your drives automatically and turns them into a tax-ready mileage log. Free 5-day trial, then a one-time purchase with no subscription. No account, and your trips stay on your iPhone.',
  openGraph: {
    title: 'MilesMGR: Mileage & Drive Log for iPhone',
    description: 'Every business mile, logged for you. Automatic trip tracking, tax-ready logs, no subscription.',
    url: 'https://614restore.com/software/milesmgr',
    images: ['/images/milesmgr/01-every-business-mile.jpg'],
  },
}

const APP_STORE_URL =
  'https://apps.apple.com/us/app/milesmgr-mileage-drive-log/id6819932792?pt=82404571&ct=614restore-milesmgr-page'
const SUPPORT_EMAIL = 'devmgr.app@gmail.com'
const PRIVACY_URL = 'https://614restore.github.io/milesmgr-site/privacy.html'
const OFFER_CODE = 'EARLYMILES'
const OFFER_REDEEM_URL = `https://apps.apple.com/redeem?ctx=offercodes&id=6819932792&code=${OFFER_CODE}`

const screenshots = [
  { src: '01-every-business-mile', alt: 'Dashboard showing business miles and tax deduction' },
  { src: '02-hands-on-the-wheel', alt: 'Drives record themselves while you drive' },
  { src: '03-parked-one-swipe', alt: 'Sort a drive as business or personal in one swipe' },
  { src: '04-business-by-day', alt: 'Work hours and saved places sort each drive' },
  { src: '05-green-tax-ready', alt: 'A green check on every tax-ready trip' },
  { src: '06-reports', alt: 'Reports with yearly mileage and deduction' },
  { src: '07-expenses', alt: 'Receipts for fuel, parking, tolls and repairs' },
  { src: '08-one-tap-accountant', alt: 'Send everything to your accountant in one tap' },
  { src: '09-private-by-design', alt: 'No account to create; trips stay on your iPhone' },
]

const featureGroups = [
  {
    title: 'Automatic trip tracking',
    items: [
      'Detects and records drives in the background',
      'Skips walks and bike rides, and lets you mark rides as Passenger',
      'Start or end a trip with Siri, or follow it on the Lock Screen',
    ],
  },
  {
    title: 'Smart sorting',
    items: [
      'Drives during your work hours are Business, after hours are Personal',
      'Save clients, job sites and suppliers as Business places',
      'Swipe to sort anything left, and split a trip at any stop',
    ],
  },
  {
    title: 'Tax-ready records',
    items: [
      'Mileage log with date, route, miles and business purpose',
      'Standard mileage rates applied by date, including mid-year changes',
      'A green check on every complete trip, or exactly what is still missing',
    ],
  },
  {
    title: 'Expenses and reports',
    items: [
      'Scan receipts; the text is read on your iPhone',
      'Mileage log and expense PDFs, plus an Excel workbook',
      '"Send to my accountant" shares everything in one tap',
    ],
  },
]

const faqs = [
  {
    q: 'How much does it cost?',
    a: 'MilesMGR is a free download with a 5-day free trial of every feature, no payment required. After that, MilesMGR Pro is a single one-time purchase. There is no subscription and no monthly fee. For a limited time, founders can use code EARLYMILES to get Pro for $9.99.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. There are no accounts and no servers. Your trips, locations and receipts are stored on your iPhone and backed up to your own iCloud Drive. We never see your data, and there are no ads.',
  },
  {
    q: 'I bought it on another iPhone. How do I get it back?',
    a: 'Open Settings in the app and tap Restore purchase. Purchases follow your Apple Account.',
  },
  {
    q: 'Does it work for employees who get reimbursed?',
    a: "Yes. Employee mode shows what your employer owes you at their rate and builds a monthly reimbursement report you can hand in or send to a shared folder.",
  },
  {
    q: 'Will it drain my battery?',
    a: 'MilesMGR uses GPS only while you are driving. As with any app that uses GPS in the background, continued use can decrease battery life.',
  },
  {
    q: 'Is this tax advice?',
    a: 'No. MilesMGR is a record-keeping tool. Check with a tax professional for your situation.',
  },
]

export default function MilesMGRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 bg-steel-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/images/milesmgr-icon.png" alt="MilesMGR app icon" className="w-24 h-24 rounded-[22%] mx-auto mb-6 shadow-lg" />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-steel-900 mb-3">
            Every business mile, <span className="text-red-600">logged for you.</span>
          </h1>
          <p className="text-red-600 font-medium mb-4">MilesMGR: Mileage &amp; Drive Log for iPhone</p>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto mb-8">
            Drives record themselves in the background and turn into a clean, tax-ready mileage log. Try it free for
            5 days, then pay once. No subscription, no account, and your trips stay on your iPhone.
          </p>
          <AppStoreButton href={APP_STORE_URL} app="MilesMGR" placement="hero" />
          <p className="text-steel-400 text-sm mt-3">Free download · 5-day free trial · One-time purchase</p>

          <div className="mt-8 max-w-xl mx-auto rounded-2xl bg-red-50 border border-red-100 px-6 py-5">
            <p className="text-red-700 font-semibold">
              Founders offer: MilesMGR Pro for $9.99 with code{' '}
              <span className="font-mono bg-white border border-red-200 rounded px-2 py-0.5">{OFFER_CODE}</span>
            </p>
            <p className="text-steel-500 text-sm mt-2">
              Limited number of codes. Install the app, then tap the link below, or enter the code in the app under
              Settings › Redeem a code.
            </p>
            <a
              href={OFFER_REDEEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-red-600 font-semibold hover:underline"
            >
              Redeem {OFFER_CODE} →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
            {screenshots.map((shot) => (
              <img
                key={shot.src}
                src={`/images/milesmgr/${shot.src}.jpg`}
                alt={shot.alt}
                loading="lazy"
                className="w-56 sm:w-64 flex-shrink-0 snap-start rounded-2xl shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-steel-900 mb-8">What it does</h2>
          <div className="grid sm:grid-cols-2 gap-8">
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
          <div className="text-center mt-12">
            <AppStoreButton href={APP_STORE_URL} app="MilesMGR" placement="features" />
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
          <p className="text-steel-500 mb-6">Questions, a bug, or an idea? Email us and we&apos;ll get back to you.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=MilesMGR%20Support`}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Mail className="w-5 h-5" />
              {SUPPORT_EMAIL}
            </a>
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
            >
              <ShieldCheck className="w-5 h-5" />
              Privacy Policy →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
