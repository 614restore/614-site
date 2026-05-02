import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: '614 Tech — Contractor Software | TrussCTR & QuoteMGR',
  description: 'TrussCTR CRM and QuoteMGR — contractor software built by a roofer, for roofers. Manage jobs, quotes, and customers in one place.',
}

const trussctrFeatures = [
  { icon: '📊', title: 'Kanban Job Pipeline', desc: 'Visualize every job stage from lead to payment with a drag-and-drop board.' },
  { icon: '👤', title: 'Customer CRM', desc: 'Full customer history, notes, documents, and communication log in one place.' },
  { icon: '✍️', title: 'Built-in E-Signatures', desc: 'Send contracts and get them signed digitally — no third-party apps needed.' },
  { icon: '📱', title: 'Mobile App', desc: 'iOS and Android app for your crew to update jobs from the field in real time.' },
  { icon: '🏦', title: 'Payment Integration', desc: 'Accept credit cards, ACH, and financing — all inside the app.' },
  { icon: '📎', title: 'Insurance Tracking', desc: 'Track claims, supplements, and adjuster communications from one dashboard.' },
]

const quotemgrFeatures = [
  { icon: '🖱️', title: 'Drag-and-Drop Builder', desc: 'Build professional quotes visually — no templates or formatting headaches.' },
  { icon: '📦', title: 'Pricing Library', desc: 'Pre-load your material and labor prices. Update once, apply everywhere.' },
  { icon: '✅', title: 'E-Signature Built-In', desc: 'Customers sign right on the quote — from any device, anywhere.' },
  { icon: '📄', title: 'Branded PDF Export', desc: 'Generate beautiful, fully branded PDF proposals in one click.' },
  { icon: '👁️', title: 'Open Notifications', desc: 'Know the instant your customer views the quote — and follow up at the right time.' },
  { icon: '📐', title: 'Xactimate-Style Line Items', desc: 'Industry-standard line items for insurance work, making supplements easy.' },
]

export default function SoftwarePage() {
  return (
    <>
      <Hero
        badge="614 Tech — Contractor SaaS"
        title="Software Built by a Roofer,"
        titleHighlight="For Roofers."
        titleHighlightColor="gold"
        subtitle="We got tired of expensive, clunky contractor tools. So we built better ones. TrussCTR and QuoteMGR are now available to every contractor — free during beta."
        primaryCta={{ label: '⚡ Get Early Access', href: '#trussctr' }}
        secondaryCta={{ label: '📊 See QuoteMGR', href: '#quotemgr' }}
      />

      {/* TrussCTR Section */}
      <section id="trussctr" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-block bg-scarlet/20 text-scarlet text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-scarlet/40">
                Product 01
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                TrussCTR
              </h2>
              <p className="text-scarlet text-lg font-medium mb-4">The CRM Built for Contractors</p>
              <p className="text-silver text-lg leading-relaxed mb-8">
                Manage your pipeline, track jobs, automate follow-ups, and close more deals.
                TrussCTR is the CRM that actually understands how roofing companies work.
                No more spreadsheets. No more sticky notes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-scarlet hover:bg-scarlet/80 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-lg text-center"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-silver font-semibold px-8 py-3 rounded-lg transition-colors border border-silver/30 text-center"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="bg-[#111827] rounded-2xl p-8 border border-scarlet/30">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-scarlet" />
                <div className="w-3 h-3 rounded-full bg-gold" />
                <div className="w-3 h-3 rounded-full bg-silver/40" />
                <span className="ml-2 text-silver/50 text-sm">TrussCTR Dashboard</span>
              </div>
              {/* Mock UI */}
              <div className="space-y-3">
                {['New Lead — 123 Main St', 'Inspection Scheduled — Oak Ave', 'Contract Signed — Elm Dr', 'Job in Progress — Cedar Ln', 'Payment Pending — Maple St'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-black/40 rounded-lg px-4 py-3 border border-scarlet/10">
                    <div className={`w-2 h-2 rounded-full ${i < 2 ? 'bg-gold' : i < 4 ? 'bg-scarlet' : 'bg-silver/50'}`} />
                    <span className="text-silver text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trussctrFeatures.map((f) => (
              <ServiceCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.desc}
                accentColor="scarlet"
              />
            ))}
          </div>
        </div>
      </section>

      {/* QuoteMGR Section */}
      <section id="quotemgr" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1 bg-[#111827] rounded-2xl p-8 border border-gold/30">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <div className="w-3 h-3 rounded-full bg-scarlet" />
                <div className="w-3 h-3 rounded-full bg-silver/40" />
                <span className="ml-2 text-silver/50 text-sm">QuoteMGR Builder</span>
              </div>
              {/* Mock quote builder */}
              <div className="space-y-3">
                <div className="bg-black/40 rounded-lg px-4 py-3 border border-gold/20">
                  <div className="text-gold text-xs font-semibold mb-1">GAF Timberline HDZ Shingles</div>
                  <div className="flex justify-between text-silver text-sm">
                    <span>24 squares × $98.50</span>
                    <span className="text-white font-semibold">$2,364</span>
                  </div>
                </div>
                <div className="bg-black/40 rounded-lg px-4 py-3 border border-gold/20">
                  <div className="text-gold text-xs font-semibold mb-1">Labor — Tear-off & Install</div>
                  <div className="flex justify-between text-silver text-sm">
                    <span>24 squares × $125.00</span>
                    <span className="text-white font-semibold">$3,000</span>
                  </div>
                </div>
                <div className="bg-black/40 rounded-lg px-4 py-3 border border-gold/20">
                  <div className="text-gold text-xs font-semibold mb-1">Ice & Water Shield</div>
                  <div className="flex justify-between text-silver text-sm">
                    <span>3 rolls × $85.00</span>
                    <span className="text-white font-semibold">$255</span>
                  </div>
                </div>
                <div className="flex justify-between bg-scarlet/20 rounded-lg px-4 py-3 border border-scarlet/30">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-gold font-black text-lg">$5,619</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-gold/30">
                Product 02
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                QuoteMGR
              </h2>
              <p className="text-gold text-lg font-medium mb-4">Quotes That Close</p>
              <p className="text-silver text-lg leading-relaxed mb-8">
                Build beautiful, professional roofing quotes in minutes. Send, track, and get them
                signed — all in one place. The SumoQuote alternative built for speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gold hover:bg-gold/80 text-black font-bold px-8 py-3 rounded-lg transition-colors shadow-lg text-center"
                >
                  Try QuoteMGR Free
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-silver font-semibold px-8 py-3 rounded-lg transition-colors border border-silver/30 text-center"
                >
                  See a Sample Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotemgrFeatures.map((f) => (
              <ServiceCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.desc}
                accentColor="gold"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="py-24 bg-[#0a0a0a] border-y border-gold/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Join the Beta — <span className="text-gold">Free Forever</span> for Early Users
          </h2>
          <p className="text-silver text-lg mb-8">
            TrussCTR and QuoteMGR are in active beta. Lock in founder pricing and help shape the
            product with direct access to the dev team.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10 text-left max-w-xl mx-auto">
            {[
              '✅ Free during beta period',
              '✅ No credit card required',
              '✅ Founder pricing locked forever',
              '✅ Direct line to the dev team',
            ].map((item) => (
              <li key={item} className="text-silver text-sm">{item}</li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold/80 text-black font-bold px-8 py-3 rounded-lg transition-colors shadow-lg text-lg"
            >
              ⚡ Get Early Access
            </Link>
            <Link
              href="/contact"
              className="bg-scarlet hover:bg-scarlet/80 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-lg text-lg"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
