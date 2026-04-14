import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import SoftwareSection from '@/components/SoftwareSection'
import SocialProof from '@/components/SocialProof'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SoftwareSection />
      <SocialProof />
      <CTASection />
      <Footer />
    </main>
  )
}
