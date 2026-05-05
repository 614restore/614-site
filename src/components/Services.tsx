import { Home, Layers, Droplets, CloudLightning, FileCheck, Wrench } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    href: '/portfolio?cat=residential',
    description:
      'Complete roof replacements, repairs, and maintenance for homes across Columbus. We use premium materials and back every job with solid warranties.',
    image: '/images/work-gallery-1.jpg',
  },
  {
    icon: Wrench,
    title: 'Commercial Roofing',
    href: '/portfolio?cat=commercial',
    description:
      'Flat roofs, TPO, EPDM, and modified bitumen systems for businesses. Minimize downtime with efficient project management and quality craftsmanship.',
    image: '/images/work-1.jpg',
  },
  {
    icon: Layers,
    title: 'Siding Installation',
    href: '/portfolio?cat=siding',
    description:
      "Transform your home's exterior with new vinyl, fiber cement, or engineered wood siding. Boost curb appeal and protect against the elements.",
    image: '/images/siding-work.jpg',
  },
  {
    icon: Droplets,
    title: 'Gutters & Downspouts',
    href: '/portfolio?cat=gutters',
    description:
      'Seamless gutter installation, repair, and gutter guard systems. Proper drainage protects your foundation, landscaping, and siding.',
    image: '/images/gutter-install.jpg',
  },
  {
    icon: CloudLightning,
    title: 'Storm Restoration',
    href: '/portfolio?cat=storm',
    description:
      'Hail, wind, and storm damage? We respond fast with thorough inspections and document everything for your insurance claim.',
    image: '/images/work-2.jpg',
  },
  {
    icon: FileCheck,
    title: 'Insurance Claims Assistance',
    href: '/portfolio?cat=storm',
    description:
      "We guide you through the entire insurance process — from inspection to final payment. Insurance companies are notorious for trying to get out of paying what you're owed. We make sure that doesn't happen.",
    image: '/images/drone-aerial-1.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-steel-900 mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            From a single shingle repair to full storm restoration — we&apos;ve got you covered.
            Every project gets the same level of care and attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 block"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-steel-900 mb-2 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-steel-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                    View projects →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}
