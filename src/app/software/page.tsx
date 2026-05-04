import Navbar from '@/components/Navbar'
import Software from '@/components/Software'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Software | 614 Restore',
  description: 'QuoteMGR, TrussCTR, and ScopeMGR — contractor software built in-house by 614 Restore to serve homeowners and contractors better.',
}

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Software />
      <CTABanner />
      <Footer />
    </main>
  )
}