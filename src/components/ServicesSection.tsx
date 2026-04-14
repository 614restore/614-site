export default function ServicesSection() {
  const services = [
    {
      icon: '🌩️',
      title: 'Storm Damage Restoration',
      description: 'Hail, wind, and storm damage specialists. We work directly with your insurance adjuster to maximize your claim.',
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
      icon: '📋',
      title: 'Insurance Claims',
      description: 'We guide you through the entire insurance process — from inspection to final payment. Zero hassle.',
      badge: 'We Handle It',
    },
    {
      icon: '🔍',
      title: 'Free Roof Inspection',
      description: 'No commitment, no pressure. We assess your roof\'s condition and give you an honest report.',
      badge: 'Free',
    },
    {
      icon: '🛡️',
      title: 'Warranty & Support',
      description: 'Manufacturer warranties backed by our workmanship guarantee. We stand behind every job.',
      badge: null,
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] border-y border-red-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-900/50 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-red-700/50">
            614 Restore — Roofing Services
          </span>
          <h2 className="section-heading">Professional Roofing,<br />Done Right.</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Columbus&apos;s trusted roofing contractor for residential and commercial projects.
            Licensed, insured, and local.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="card relative group hover:-translate-y-1 transition-transform duration-300 hover:border-red-700/60">
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

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Schedule a Free Inspection
          </a>
        </div>
      </div>
    </section>
  )
}
