import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact | 614 Restore LLC',
  description: 'Get a free roof inspection. Call (614) 808-8899 or request an estimate online. Columbus, Ohio — fast, honest, reliable.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  )
}