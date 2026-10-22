import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Off the Page Privacy Policy | 614 Restore',
  description: 'How Off the Page handles your information: no account, no tracking, and your files stay on your device or in your own iCloud.',
}

const SUPPORT_EMAIL = 'devmgr.app@gmail.com'

const sections: { title: string; body: string[] }[] = [
  {
    title: 'The short version',
    body: [
      'Off the Page does not collect your personal information. There is no account to create, no advertising, no analytics, and no tracking. We do not run servers that receive your notes, recordings, or files.',
    ],
  },
  {
    title: 'Your library',
    body: [
      'Text, photos, scans, books, recordings, highlights, flashcards, and tests you save are stored in an "Off the Page" folder on your device. If you turn on Sync with iCloud, that folder is stored in your own iCloud Drive account instead, under Apple\'s privacy policy. We cannot see it either way.',
      'The app only reads files inside its own folder. Content gets in only when you send it: the Share menu, the Safari extension, the in-app browser, the photo picker, the document scanner, a recording you make, or a file you open with the app.',
    ],
  },
  {
    title: 'Microphone, speech recognition, camera, and photos',
    body: [
      'The microphone is used only when you record a lecture. Transcripts are made on your device; audio is not uploaded.',
      'The camera is used only when you scan a document. Photos come in only through Apple\'s photo picker, where you choose each photo; the app does not have access to the rest of your photo library. Text in photos and scans is read on your device.',
    ],
  },
  {
    title: 'Voices and AI study tools',
    body: [
      'Read-aloud voices run on your device.',
      'By default, study guides, flashcards, practice tests, quizzes, and "Ask AI" use Apple Intelligence on your device, and nothing leaves it.',
      'Cloud AI is optional and off unless you turn it on in Settings › Study Tools and add your own key from a provider you choose (Groq, Anthropic, OpenAI, or Google). When you use a study tool with Cloud AI on, the text you are studying is sent directly from your device to that provider to generate the result, under that provider\'s privacy policy. It does not pass through us. Your key is stored in your device\'s Keychain.',
    ],
  },
  {
    title: 'In-app browser and Safari extension',
    body: [
      'The Browse tab is a web browser. Websites you visit receive the same information they would from any browser and may use cookies, which are kept on your device; you can clear them in Settings › Browser. The Safari extension reads a page only when you tap it.',
    ],
  },
  {
    title: 'Study Together (SharePlay)',
    body: [
      'Study rooms use Apple\'s SharePlay on a FaceTime call. Your name for the scoreboard, the decks, pages, and answers you choose to share are sent to the people in the room through Apple\'s end-to-end encrypted SharePlay connection. We do not receive them.',
      'Tests you send to a friend and results they send back are files you share yourself through Messages, AirDrop, or Mail.',
    ],
  },
  {
    title: 'Purchases',
    body: [
      'The free trial and the Lifetime unlock are handled by Apple through the App Store. We do not receive your payment information.',
    ],
  },
  {
    title: 'Contacting us',
    body: [
      `If you email us, we receive your email address and whatever you include, and use it only to reply. Emails from the app's Contact Support button include your app version and device model to help us troubleshoot.`,
    ],
  },
  {
    title: 'Children',
    body: [
      'Off the Page does not knowingly collect personal information from anyone, including children.',
    ],
  },
  {
    title: 'Changes',
    body: [
      'If this policy changes, we will update this page and the date below.',
    ],
  },
]

export default function OffThePagePrivacy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/software/offthepage" className="text-red-600 text-sm font-semibold">
            ← Off the Page
          </Link>
          <h1 className="text-4xl font-heading font-bold text-steel-900 mt-4 mb-2">Off the Page Privacy Policy</h1>
          <p className="text-steel-500 mb-10">Last updated October 22, 2026</p>

          {sections.map((section) => (
            <section key={section.title} className="mb-8">
              <h2 className="text-xl font-heading font-bold text-steel-900 mb-3">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-steel-600 leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <p className="text-steel-600 leading-relaxed">
            Questions about privacy? Email{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-red-600 font-semibold">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>
      </article>
      <Footer />
    </main>
  )
}
