'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-steel-900 mb-4">
            Ready to <span className="text-red-600">Get Started</span>?
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            Whether it&apos;s storm damage, a new roof, or just a question — we&apos;re here to help.
            Reach out for a free, no-obligation inspection and estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <a href="tel:6148088899" className="flex items-start gap-4 group">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                <Phone className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-heading font-bold text-steel-900 text-lg">Call Us</p>
                <p className="text-red-600 font-semibold text-lg">(614) 808-8899</p>
                <p className="text-steel-500 text-sm">Tap to call now</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="font-heading font-bold text-steel-900 text-lg">Email Us</p>
                <p className="text-red-600 font-semibold">info@614restore.com</p>
                <p className="text-steel-500 text-sm">We&apos;ll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="font-heading font-bold text-steel-900 text-lg">Service Area</p>
                <p className="text-steel-600 font-medium">Columbus &amp; Central Ohio</p>
                <p className="text-steel-500 text-sm">Franklin County &amp; surrounding areas</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="font-heading font-bold text-steel-900 text-lg">Hours</p>
                <p className="text-steel-600 font-medium">Mon–Fri: 7am – 7pm</p>
                <p className="text-steel-500 text-sm">Sat: 8am – 5pm | Emergency 24/7</p>
              </div>
            </div>

            <div className="bg-red-600 text-white p-6 rounded-2xl shadow-lg shadow-red-600/30">
              <p className="font-heading font-bold text-lg mb-1">🚨 Storm Damage?</p>
              <p className="text-red-200 text-sm">
                We offer emergency same-day inspections. Call us immediately and we&apos;ll be there.
              </p>
              <a
                href="tel:6148088899"
                className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-2.5 rounded-lg mt-4 hover:bg-red-50 transition text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-steel-50 rounded-2xl p-8 border border-steel-200">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-steel-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-steel-500">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-heading font-bold text-steel-900 mb-2">
                    Request a Free Estimate
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white border border-steel-300 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition text-steel-900"
                        placeholder="Jeff"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white border border-steel-300 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition text-steel-900"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-white border border-steel-300 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition text-steel-900"
                        placeholder="(614) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white border border-steel-300 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition text-steel-900"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-steel-300 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition text-steel-900"
                      placeholder="123 Main St, Columbus, OH"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1">
                      Service Needed
                    </label>
                    <select className="w-full px-4 py-3 bg-white border border-steel-300 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition text-steel-900">
                      <option value="">Select a service...</option>
                      <option>Residential Roofing</option>
                      <option>Commercial Roofing</option>
                      <option>Siding</option>
                      <option>Gutters</option>
                      <option>Storm Damage / Insurance Claim</option>
                      <option>General Inspection</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-steel-300 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition resize-none text-steel-900"
                      placeholder="Describe the work needed, any damage, timeline preferences, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    Send Request
                  </button>
                  <p className="text-center text-steel-400 text-xs">
                    We&apos;ll never share your information. Response within 24 hours guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
