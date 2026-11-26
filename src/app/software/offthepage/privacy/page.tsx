import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Off the Page Privacy Policy | 614 Restore',
  description: 'How Off the Page handles your information: no account, no tracking, and your files stay on your device or in your own iCloud.',
}

const SUPPORT_EMAIL = 'devmgr.app@gmail.com'

const sections: { id?: string; title: string; body: string[] }[] = [
  {
    title: 'The short version',
    body: [
      'Off the Page does not collect your personal information. There is no account to create, no advertising, no analytics, and no tracking. We do not run servers that receive your notes, recordings, or files.',
    ],
  },
  {
    title: 'This website',
    body: [
      'Everything above and below is about the app. This website (614restore.com, including the Off the Page pages) is different: it uses Google Analytics and the Meta Pixel to count visits and measure our ads. They may set cookies in your browser and receive standard information such as the pages you view, your browser type, and your IP address, under Google\'s and Meta\'s privacy policies. You can block or clear these cookies in your browser settings. None of this is in the app.',
    ],
  },
  {
    id: 'daily-challenge',
    title: 'The Daily Challenge on this website',
    body: [
      'The Daily Challenge on 614restore.com/software/offthepage uses your browser\'s own speech recognition to turn what you say into words. We never receive your audio. Depending on your browser, its speech recognition may run on your device or through your browser maker\'s speech service (for example Google for Chrome or Apple for Safari), under their privacy policies.',
      'Without an AI key, your answer is scored right in your browser with word checks, and your words are not sent anywhere.',
      'If you add your own AI key (for example a free Groq or Google Gemini key), your browser sends the words you said, the day\'s prompt and the feedback style you picked straight to that provider to be scored, under that provider\'s terms. For example, Google may use what is sent with a free Gemini key to improve its products. We never receive your key or your words.',
      'Your key (only if you tick Remember on this device), feedback style, streak and today\'s scores are saved only in your browser\'s local storage, which you can clear at any time. The Daily Challenge asks for no name, account or email and sets no cookies of its own.',
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
          <p className="text-steel-500 mb-10">Last updated November 25, 2026</p>

          {sections.map((section) => (
            <section key={section.title} id={section.id} className="mb-8 scroll-mt-28">
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
