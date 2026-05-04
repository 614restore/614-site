import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services | 614 Restore LLC',
  description: 'Residential roofing, commercial roofing, siding, gutters, storm damage restoration, and insurance claims assistance in Columbus, Ohio.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Services />
      <Process />
      <WhyUs />
      <CTABanner />
      <Footer />
    </main>
  )
}