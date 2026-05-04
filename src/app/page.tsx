import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Software from '@/components/Software'
import CTABanner from '@/components/CTABanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <WhyUs />
      <Testimonials />
      <Software />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  )
}
