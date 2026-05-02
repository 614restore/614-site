import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Roofing Services | 614 Restore — Columbus, OH',
  description: 'Professional roofing services in Columbus, OH. Storm damage restoration, residential & commercial roofing, insurance claims support.',
}

const services = [
  {
    icon: '🌩️',
    title: 'Storm Damage Restoration',
    description: 'Hail, wind, and storm damage specialists. We work directly with your insurance adjuster to maximize your claim and restore your roof fast.',
    badge: 'Most Popular',
  },
  {
    icon: '🏠',
    title: 'Residential Roofing',
    description: 'Full roof replacements and repairs for Columbus homeowners. GAF, Owens Corning, and CertainTeed certified.',
    badge: null,
  },
  {
    icon: '🏢',
    title: 'Commercial Roofing',
    description: 'Flat roofs, TPO, EPDM, and metal roofing systems for commercial properties in Central Ohio.',
    badge: null,
  },
  {
    icon: '🪟',
    title: 'Siding & Gutters',
    description: 'Complete exterior restoration including vinyl and fiber cement siding, seamless gutters, and gutter guards.',
    badge: null,
  },
  {
    icon: '📋',
    title: 'Insurance Claims',
    description: 'We guide you through the entire insurance process — from initial inspection to final payment. Zero hassle.',
    badge: 'We Handle It',
    id: 'insurance',
  },
  {
    icon: '🔍',
    title: 'Free Roof Inspection',
    description: 'No commitment, no pressure. We assess your roof\'s condition and give you an honest written report.',
    badge: 'Free',
  },
]

export default function RoofingPage() {
  return (
    <>
      <Hero
        badge="Columbus, OH — Licensed & Insured"
        title="Professional Roofing,"
        titleHighlight="Done Right."
        titleHighlightColor="scarlet"
        subtitle="614 Restore is Columbus's trusted roofing contractor for residential and commercial projects. Storm damage? We've got you covered — from inspection to insurance to installation."
        primaryCta={{ label: '🏠 Get a Free Inspection', href: '#contact-form' }}
        secondaryCta={{ label: 'View Our Work', href: '#gallery' }}
        backgroundImage="/images/roofing-2.jpg"
      />

      {/* Services Grid */}
      <section id="services" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-scarlet/20 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-scarlet/40">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything Your Roof Needs</h2>
            <p className="text-silver text-lg max-w-2xl mx-auto">
              From a single repair to a full replacement — we handle it all with transparency and craftsmanship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                badge={s.badge}
                accentColor="scarlet"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="gallery" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Recent Work</h2>
            <p className="text-silver text-lg">Real projects, real results across Central Ohio.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {['/images/roofing-1.jpg', '/images/roofing-2.jpg', '/images/roofing-3.jpg'].map((src, i) => (
              <div key={i} className="relative h-64 rounded-2xl overflow-hidden border border-scarlet/20">
                <Image
                  src={src}
                  alt={`Roofing project ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="storm" className="py-24 bg-[#050509]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-scarlet">Storm Restoration</span> Process
            </h2>
            <p className="text-silver text-lg max-w-2xl mx-auto">
              We handle the entire process — so you don&apos;t have to.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Free Inspection', desc: 'We assess your storm damage and document everything for your insurance claim.' },
              { step: '02', title: 'Insurance Filing', desc: 'We work directly with your adjuster — filing paperwork and maximizing your payout.' },
              { step: '03', title: 'Material Selection', desc: 'Choose your shingles, colors, and upgrades with our expert guidance.' },
              { step: '04', title: 'Installation & Cleanup', desc: 'Professional crew installs your roof with zero mess left behind.' },
            ].map((item) => (
              <div key={item.step} className="card border-scarlet/20 hover:border-scarlet/50 text-center">
                <div className="text-4xl font-black text-scarlet/30 mb-3">{item.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-silver text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="contact-form" className="py-24 bg-black">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Get Your Free Roof Inspection
            </h2>
            <p className="text-silver text-lg">
              We&apos;ll contact you within 2 hours to schedule your free, no-obligation inspection.
            </p>
          </div>
          <form className="flex flex-col gap-4 bg-[#111827] rounded-2xl p-8 border border-scarlet/20">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-slate-100 placeholder-silver/40 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-slate-100 placeholder-silver/40 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-slate-100 placeholder-silver/40 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-slate-100 placeholder-silver/40 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="text"
              placeholder="Property Address"
              className="bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-slate-100 placeholder-silver/40 focus:outline-none focus:border-gold transition-colors"
            />
            <select className="bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-silver focus:outline-none focus:border-gold transition-colors">
              <option value="">Type of Service Needed</option>
              <option value="storm">Storm Damage Restoration</option>
              <option value="residential">Residential Roofing</option>
              <option value="commercial">Commercial Roofing</option>
              <option value="siding">Siding / Gutters</option>
              <option value="inspection">General Inspection</option>
            </select>
            <textarea
              placeholder="Additional details (optional)"
              rows={4}
              className="bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-slate-100 placeholder-silver/40 focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-scarlet hover:bg-scarlet/80 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md text-lg"
            >
              🏠 Schedule My Free Inspection
            </button>
            <p className="text-silver/50 text-xs text-center">
              No spam, ever. We&apos;ll only use your info to schedule your inspection.
            </p>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-scarlet/10 border-y border-scarlet/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Questions? Call Us Now.
          </h2>
          <p className="text-silver mb-6">Our team is available Monday–Saturday, 8am–7pm.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6141234567"
              className="bg-scarlet hover:bg-scarlet/80 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md text-lg"
            >
              📞 (614) 123-4567
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-silver font-semibold px-8 py-3 rounded-lg transition-colors border border-silver/30"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
