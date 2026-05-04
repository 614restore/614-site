import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us | 614 Restore',
  description: 'Meet Jeff, owner of 614 Restore — Columbus, Ohio trusted roofing and restoration contractor.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <About />
      <Gallery />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  )
}