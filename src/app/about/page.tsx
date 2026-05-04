import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us | 614 Restore LLC',
  description: 'Meet Jeffrey Newell, owner of 614 Restore LLC — Columbus, Ohio trusted roofing and restoration contractor.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <About />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  )
}