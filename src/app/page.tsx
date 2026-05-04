import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CTABanner />
      <Footer />
    </main>
  )
}