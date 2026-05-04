import Link from 'next/link'

export default function RoofingPage() {
  return (
    <main className="min-h-screen bg-[#050509]">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">614</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none block">614 Restore</span>
                <span className="text-amber-400 text-xs">& Tech</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#services" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Services</Link>
              <Link href="/software" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Software</Link>
              <Link href="/roofing" className="text-red-400 transition-colors text-sm font-medium">Roofing</Link>
              <Link href="/pricing" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Pricing</Link>
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-black" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-700/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-red-900/50 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-red-700/50">
                Columbus, OH — Licensed & Insured
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Professional Roofing<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Done Right.</span>
              </h1>
              <p className="text-slate-300 text-xl mb-8 max-w-xl">
                Residential and commercial roofing in Central Ohio. Storm damage, replacements, repairs — and we work directly with your insurance company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-primary text-center">Get a Free Inspection</a>
                <a href="tel:+16148088899" className="bg-[#1a1a1a] hover:bg-[#222] text-white font-semibold px-6 py-3 rounded-lg transition-all text-center border border-slate-600">
                  📞 Call Us Now
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-6">
                {[
                  { label: 'Roofs Completed', value: '200+' },
                  { label: 'Years Experience', value: '10+' },
                  { label: 'Insurance Claims Handled', value: '100+' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black text-amber-400">{stat.value}</div>
                    <div className="text-slate-400 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111] rounded-2xl border border-red-700/30 p-6">
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/5 rounded-xl aspect-[4/3] flex items-center justify-center border border-red-700/20">
                <div className="text-center">
                  <div className="text-5xl mb-3">🏠</div>
                  <p className="text-slate-400 text-sm">614 Restore Project Photo</p>
                  <p className="text-slate-500 text-xs mt-1">Image coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#0a0a0a] border-y border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-900/50 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-red-700/50">
              Our Services
            </span>
            <h2 className="text-4xl font-black text-white mb-4">What We Do</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From storm damage to full replacements — we handle it all. Columbus homeowners and businesses trust 614 Restore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🌩️',
                title: 'Storm Damage Restoration',
                description: 'Hail, wind, and storm damage specialists. We work directly with your insurance adjuster to maximize your claim.',
                badge: 'Most Popular',
              },
              {
                icon: '🏠',
                title: 'Residential Roofing',
                description: 'Full roof replacements and repairs. GAF, Owens Corning, and CertainTeed certified. Lifetime warranties available.',
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
                title: 'Insurance Claims Support',
                description: 'We guide you through the entire insurance process — from inspection to final payment. Zero hassle.',
                badge: 'We Handle It',
              },
              {
                icon: '🔍',
                title: 'Free Roof Inspection',
                description: 'No commitment, no pressure. We assess your roof\'s condition and give you an honest, detailed report.',
                badge: 'Free',
              },
              {
                icon: '🛡️',
                title: 'Warranty & Guarantee',
                description: 'Manufacturer warranties backed by our workmanship guarantee. We stand behind every single job.',
                badge: null,
              },
            ].map((service) => (
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
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-amber-500/30">
              How It Works
            </span>
            <h2 className="text-4xl font-black text-white mb-4">Our Process</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Working with us is simple. No surprises, no pressure — just professional roofing done right.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Call or Submit Form', desc: 'Reach out — we respond within 2 hours during business hours.' },
              { step: '2', title: 'Free Inspection', desc: 'We come out, assess your roof, and give you an honest evaluation.' },
              { step: '3', title: 'We Handle Insurance', desc: 'If storm damage is involved, we work directly with your adjuster.' },
              { step: '4', title: 'We Build Your Roof', desc: 'Quality installation, cleanup daily, and final walkthrough when done.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center text-2xl font-black text-white mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-[#0a0a0a] border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-6">Areas We Serve</h2>
          <p className="text-slate-300 mb-8">Proudly serving Central Ohio and surrounding communities.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Columbus', 'Dublin', 'Westerville', 'Grove City', 'Hilliard', 'Reynoldsburg', 'Pickerington', 'Upper Arlington', 'Worthington', 'Delaware', 'Plain City', 'Lewis Center'].map((city) => (
              <span key={city} className="bg-[#111] border border-slate-700/60 text-slate-300 px-4 py-2 rounded-full text-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black border-t border-red-900/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to Get Your Free Inspection?</h2>
          <p className="text-slate-300 text-xl mb-8">No obligation. No pressure. Just an honest assessment of your roof.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary inline-block text-center">Request Free Inspection</a>
            <a href="tel:+16148088899" className="bg-[#1a1a1a] hover:bg-[#222] text-white font-semibold px-6 py-3 rounded-lg transition-all text-center border border-slate-600">
              📞 Call (614) 808-8899
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-red-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">614</span>
              </div>
              <span className="text-slate-400 text-sm">© 2024 614 Restore & Tech. Columbus, OH.</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/roofing" className="hover:text-red-400 transition-colors">Roofing</Link>
              <Link href="/software" className="hover:text-red-400 transition-colors">Software</Link>
              <Link href="/pricing" className="hover:text-red-400 transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-red-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}