import Link from 'next/link'

export default function ContactPage() {
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
              <Link href="/roofing" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Roofing</Link>
              <Link href="/pricing" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Pricing</Link>
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-red-900/50 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-red-700/50">
            We Respond Within 2 Hours
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Whether you need a free roof inspection or want to see the software — we're here.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-[#111] rounded-2xl border border-red-700/40 p-8">
              <h2 className="text-2xl font-black text-white mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full bg-[#0a0a0a] border border-slate-700/60 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#0a0a0a] border border-slate-700/60 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(614) 555-1234"
                    className="w-full bg-[#0a0a0a] border border-slate-700/60 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">What are you interested in?</label>
                  <select className="w-full bg-[#0a0a0a] border border-slate-700/60 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-700 transition-colors">
                    <option value="" className="text-slate-500">Select an option</option>
                    <option value="roofing">Roofing Services (Columbus, OH)</option>
                    <option value="trussctr">TrussCTR CRM</option>
                    <option value="quotemgr">QuoteMGR</option>
                    <option value="scopemgr">ScopeMGR</option>
                    <option value="bundle">All Three Software Tools</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or what you're looking for..."
                    className="w-full bg-[#0a0a0a] border border-slate-700/60 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-700 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full text-center"
                >
                  Send Message
                </button>
              </form>
              <p className="text-slate-500 text-xs mt-4 text-center">We typically respond within 2 hours during business hours.</p>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-white mb-6">614 Restore & Tech</h2>
                <p className="text-slate-300 leading-relaxed">
                  Columbus, Ohio-based roofing contractor and software company. We serve Central Ohio homeowners and contractors across the region.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: '📍',
                    label: 'Location',
                    value: 'Columbus, OH — Serving all of Central Ohio',
                  },
                  {
                    icon: '📞',
                    label: 'Phone',
                    value: '(614) 808-8899',
                    href: 'tel:+16148088899',
                  },
                  {
                    icon: '✉️',
                    label: 'Email',
                    value: 'info@614restore.com',
                    href: 'mailto:info@614restore.com',
                  },
                  {
                    icon: '🕐',
                    label: 'Hours',
                    value: 'Mon–Fri 8am–6pm, Sat 9am–2pm',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-slate-400 text-sm">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-white font-medium hover:text-amber-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-[#111] rounded-2xl border border-slate-700/60 p-6">
                <h3 className="text-white font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a href="tel:+16148088899" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                    <span>📞</span>
                    <span>Call us directly — fastest response</span>
                  </a>
                  <a href="/roofing" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                    <span>🏠</span>
                    <span>Learn about our roofing services</span>
                  </a>
                  <a href="/software" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                    <span>💻</span>
                    <span>Explore our contractor software</span>
                  </a>
                  <a href="/pricing" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                    <span>💰</span>
                    <span>View SaaS pricing plans</span>
                  </a>
                </div>
              </div>

              {/* Areas Served */}
              <div className="bg-[#111] rounded-2xl border border-slate-700/60 p-6">
                <h3 className="text-white font-bold mb-3">Areas We Serve</h3>
                <p className="text-slate-400 text-sm mb-3">Central Ohio including but not limited to:</p>
                <div className="flex flex-wrap gap-2">
                  {['Columbus', 'Dublin', 'Westerville', 'Grove City', 'Hilliard', 'Reynoldsburg', 'Pickerington', 'Upper Arlington', 'Worthington', 'Delaware', 'Plain City', 'Lewis Center'].map((city) => (
                    <span key={city} className="text-slate-400 text-xs bg-[#0a0a0a] px-3 py-1 rounded-full border border-slate-700/40">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/40 py-10">
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