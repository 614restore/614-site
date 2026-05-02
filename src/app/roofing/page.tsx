import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Roofing Services | 614 Restore — Columbus, OH',
  description:
    'Professional residential and commercial roofing services in Columbus, OH. Storm damage, insurance claims, free inspections.',
}

const services = [
  {
    icon: '🌩️',
    title: 'Storm Damage Restoration',
    description:
      'Hail, wind, and storm damage specialists. We work directly with your insurance adjuster to maximize your claim and get your roof repaired fast.',
    badge: 'Most Popular',
  },
  {
    icon: '🏠',
    title: 'Residential Roofing',
    description:
      'Full roof replacements and repairs for Columbus homeowners. GAF, Owens Corning, and CertainTeed certified installer.',
    badge: null,
  },
  {
    icon: '🏢',
    title: 'Commercial Roofing',
    description:
      'Flat roofs, TPO, EPDM, and metal roofing systems for commercial properties across Central Ohio.',
    badge: null,
  },
  {
    icon: '📋',
    title: 'Insurance Claims',
    description:
      'We guide you through the entire insurance process — from inspection to final payment. Zero hassle on your end.',
    badge: 'We Handle It',
  },
  {
    icon: '🔍',
    title: 'Free Roof Inspection',
    description:
      'No commitment, no pressure. We assess your roof\'s condition and give you an honest, detailed report.',
    badge: 'Free',
  },
  {
    icon: '🛡️',
    title: 'Warranty & Support',
    description:
      'Manufacturer warranties backed by our workmanship guarantee. We stand behind every single job we complete.',
    badge: null,
  },
]

export default function RoofingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/IMG_8389.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-red-900/50 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-red-700/50">
              Columbus, Ohio — Licensed &amp; Insured
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Roofing You Can{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Trust.
              </span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl">
              614 Restore delivers professional roofing services across Columbus and Central Ohio.
              Storm damage, full replacements, insurance claims — we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center text-base">
                🏠 Get a Free Inspection
              </Link>
              <a
                href="tel:6141234567"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-center text-base border border-slate-600"
              >
                📞 Call (614) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0a0a0a] border-y border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '200+', label: 'Roofs Completed' },
              { value: '10+', label: 'Years Experience' },
              { value: '5★', label: 'Average Rating' },
              { value: '48hr', label: 'Avg Response Time' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-amber-400 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-[#050509]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Roofing Services</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From minor repairs to full replacements, we handle every aspect of your roofing project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="card relative group hover:-translate-y-1 transition-transform duration-300 hover:border-red-700/60"
              >
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-slate-100 text-lg mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storm / Insurance section */}
      <section id="storm" className="py-24 bg-[#0a0a0a] border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-red-900/50 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-red-700/50">
                Storm Damage &amp; Insurance
              </span>
              <h2 id="insurance" className="text-4xl font-black text-white mb-6">
                We Handle the Insurance So You Don&apos;t Have To.
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Dealing with insurance after storm damage is stressful. We work directly with your
                adjuster, document all damage, and advocate for your full claim — so you get the
                roof you deserve without the headache.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Free damage assessment and photo documentation',
                  'Direct communication with your insurance adjuster',
                  'Supplement filing to maximize your claim',
                  'Full project management from claim to completion',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <span className="text-amber-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary inline-block">
                Start Your Insurance Claim
              </Link>
            </div>
            <div className="relative">
              <div className="bg-[url('/IMG_5535.jpg')] bg-cover bg-center rounded-2xl h-80 opacity-70 border border-red-900/40" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-black via-red-950 to-black border-t border-red-900/40">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Get Your Roof Fixed?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Contact us today for a free, no-obligation inspection. We&apos;ll give you an honest
            assessment and a clear path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-center">
              📋 Request a Free Inspection
            </Link>
            <a
              href="tel:6141234567"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-slate-600 text-center"
            >
              📞 (614) 123-4567
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
