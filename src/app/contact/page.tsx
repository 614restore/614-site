import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | 614 Restore & Tech — Columbus, OH',
  description:
    'Get a free roof inspection or inquire about our contractor software. Contact 614 Restore & Tech in Columbus, Ohio.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-900/50 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-red-700/50">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let&apos;s Talk.
          </h1>
          <p className="text-slate-300 text-xl">
            Whether you need a new roof or want to try our contractor software, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact forms */}
      <section className="py-16 bg-[#050509]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Roofing form */}
            <div className="card border border-red-700/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-800 rounded-xl flex items-center justify-center text-xl">🏠</div>
                <div>
                  <h2 className="text-xl font-black text-white">Request a Free Roof Inspection</h2>
                  <p className="text-red-400 text-sm">614 Restore — Roofing Services</p>
                </div>
              </div>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm mb-1.5">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-white/5 border border-red-700/50 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm mb-1.5">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full bg-white/5 border border-red-700/50 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(614) 555-0100"
                    className="w-full bg-white/5 border border-red-700/50 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-red-700/50 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Property Address</label>
                  <input
                    type="text"
                    placeholder="123 Main St, Columbus, OH"
                    className="w-full bg-white/5 border border-red-700/50 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Service Type</label>
                  <select className="w-full bg-[#111827] border border-red-700/50 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-amber-400 transition-colors">
                    <option value="">Select a service...</option>
                    <option value="storm">Storm Damage Restoration</option>
                    <option value="residential">Residential Roofing</option>
                    <option value="commercial">Commercial Roofing</option>
                    <option value="insurance">Insurance Claim Help</option>
                    <option value="inspection">Free Inspection</option>
                    <option value="repair">Repair</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Additional Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-red-700/50 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full text-center"
                >
                  🏠 Schedule My Free Inspection
                </button>
                <p className="text-slate-500 text-xs text-center">
                  We&apos;ll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            </div>

            {/* Software form */}
            <div className="card border border-amber-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-xl">⚡</div>
                <div>
                  <h2 className="text-xl font-black text-white">Get Early Software Access</h2>
                  <p className="text-amber-400 text-sm">614 Tech — TrussCTR &amp; QuoteMGR</p>
                </div>
              </div>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm mb-1.5">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-white/5 border border-amber-500/30 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm mb-1.5">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full bg-white/5 border border-amber-500/30 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="contractor@company.com"
                    className="w-full bg-white/5 border border-amber-500/30 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Company Name</label>
                  <input
                    type="text"
                    placeholder="ABC Roofing LLC"
                    className="w-full bg-white/5 border border-amber-500/30 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(614) 555-0100"
                    className="w-full bg-white/5 border border-amber-500/30 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Which product(s) interest you?</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 accent-amber-400" defaultChecked />
                      <span className="text-slate-300 text-sm group-hover:text-white transition-colors">TrussCTR — Contractor CRM</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 accent-amber-400" defaultChecked />
                      <span className="text-slate-300 text-sm group-hover:text-white transition-colors">QuoteMGR — Quote Builder</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Team Size</label>
                  <select className="w-full bg-[#111827] border border-amber-500/30 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-amber-400 transition-colors">
                    <option value="">Select team size...</option>
                    <option value="1">Just me</option>
                    <option value="2-5">2–5 people</option>
                    <option value="6-15">6–15 people</option>
                    <option value="16+">16+ people</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">What tools are you currently using?</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Salesforce, SumoQuote, spreadsheets..."
                    className="w-full bg-white/5 border border-amber-500/30 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-orange w-full text-center"
                >
                  ⚡ Request Early Access
                </button>
                <p className="text-slate-500 text-xs text-center">
                  Free during beta. No credit card required. We&apos;ll reach out within 1 business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 bg-black border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '📍', label: 'Location', value: 'Columbus, Ohio', sub: 'Serving Central Ohio' },
              { icon: '📞', label: 'Phone', value: '(614) 123-4567', sub: 'Mon–Sat 7am–7pm' },
              { icon: '✉️', label: 'Email', value: 'hello@614restore.com', sub: 'We reply within 24hrs' },
            ].map((item) => (
              <div key={item.label} className="card">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-slate-400 text-sm uppercase tracking-wide mb-1">{item.label}</div>
                <div className="text-white font-bold text-lg">{item.value}</div>
                <div className="text-slate-500 text-sm">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
