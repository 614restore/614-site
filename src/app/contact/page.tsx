import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | 614 Restore & Tech',
  description: 'Get in touch with 614 Restore & Tech. Request a free roof inspection, ask about our contractor software, or send us a message.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-black" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-scarlet/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-scarlet/20 border border-scarlet/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm font-medium">Columbus, OH — We respond within 2 hours</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get in <span className="text-scarlet">Touch</span>
          </h1>
          <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto">
            Need a roof inspection, have a question about our software, or just want to say hi?
            We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-[#050509]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-silver text-sm mb-1.5" htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="w-full bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-white placeholder-silver/40 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-silver text-sm mb-1.5" htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Smith"
                      className="w-full bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-white placeholder-silver/40 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-silver text-sm mb-1.5" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-white placeholder-silver/40 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-silver text-sm mb-1.5" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(614) 555-0100"
                    className="w-full bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-white placeholder-silver/40 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-silver text-sm mb-1.5" htmlFor="inquiry">What can we help you with?</label>
                  <select
                    id="inquiry"
                    className="w-full bg-[#111] border border-scarlet/30 rounded-lg px-4 py-3 text-silver focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="roofing">Roofing — Free Inspection</option>
                    <option value="storm">Storm Damage Assessment</option>
                    <option value="commercial">Commercial Roofing</option>
                    <option value="trussctr">TrussCTR CRM Demo</option>
                    <option value="quotemgr">QuoteMGR Demo</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-silver text-sm mb-1.5" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us more about what you need..."
                    className="w-full bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-white placeholder-silver/40 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-scarlet hover:bg-scarlet/80 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md text-lg"
                >
                  Send Message
                </button>

                <p className="text-silver/40 text-xs text-center">
                  We&apos;ll respond within 2 business hours. Your info is never shared.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-[#111827] rounded-xl p-4 border border-scarlet/20">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="text-white font-semibold">Location</div>
                      <div className="text-silver text-sm">Columbus, Ohio &amp; Central Ohio area</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#111827] rounded-xl p-4 border border-scarlet/20">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <a href="tel:6141234567" className="text-scarlet hover:text-gold transition-colors text-sm">
                        (614) 123-4567
                      </a>
                      <div className="text-silver/50 text-xs mt-1">Mon–Sat, 8am–7pm EST</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#111827] rounded-xl p-4 border border-scarlet/20">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <a href="mailto:hello@614restore.com" className="text-scarlet hover:text-gold transition-colors text-sm">
                        hello@614restore.com
                      </a>
                      <div className="text-silver/50 text-xs mt-1">Response within 2 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/roofing"
                    className="bg-scarlet/20 hover:bg-scarlet/30 text-white font-medium px-4 py-3 rounded-lg transition-colors border border-scarlet/30 text-sm text-center"
                  >
                    🏠 Request Inspection
                  </Link>
                  <Link
                    href="/software"
                    className="bg-gold/10 hover:bg-gold/20 text-white font-medium px-4 py-3 rounded-lg transition-colors border border-gold/30 text-sm text-center"
                  >
                    ⚡ Software Demo
                  </Link>
                  <a
                    href="tel:6141234567"
                    className="bg-[#111827] hover:bg-white/10 text-silver font-medium px-4 py-3 rounded-lg transition-colors border border-silver/20 text-sm text-center"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href="mailto:hello@614restore.com"
                    className="bg-[#111827] hover:bg-white/10 text-silver font-medium px-4 py-3 rounded-lg transition-colors border border-silver/20 text-sm text-center"
                  >
                    📧 Email Us
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-[#111827] rounded-2xl p-6 border border-gold/20">
                <h3 className="text-white font-bold text-lg mb-3">Service Area</h3>
                <p className="text-silver text-sm leading-relaxed mb-3">
                  We serve the greater Columbus, OH metropolitan area including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Columbus', 'Dublin', 'Westerville', 'Worthington', 'Powell', 'New Albany', 'Gahanna', 'Hilliard', 'Grove City', 'Pickerington'].map((city) => (
                    <span key={city} className="bg-scarlet/10 text-silver text-xs px-3 py-1 rounded-full border border-scarlet/20">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
