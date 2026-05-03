import Link from 'next/link'

export default function PricingPage() {
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
              <Link href="/pricing" className="text-red-400 transition-colors text-sm font-medium">Pricing</Link>
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-amber-500/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-amber-500/30">
            Simple, Transparent Pricing
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Software That Pays<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">For Itself</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Built for contractors who are tired of overpaying for software that doesn't deliver. Pick what you need — all three work better together.
          </p>
        </div>
      </section>

      {/* SaaS Pricing */}
      <section className="py-20 bg-[#0a0a0a] border-y border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">SaaS Pricing</h2>
            <p className="text-slate-300 text-lg">All tools include a free trial. No credit card required.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* TrussCTR */}
            <div className="bg-[#111] rounded-2xl border border-red-700/40 p-8 flex flex-col">
              <div className="mb-6">
                <span className="text-2xl">📋</span>
                <h3 className="text-2xl font-black text-white mt-2">TrussCTR</h3>
                <p className="text-slate-400 text-sm mt-1">CRM & Project Management</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-black text-amber-400">$99</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Unlimited leads & contacts',
                  'Job pipeline tracking',
                  'Insurance claim status',
                  'Follow-up reminders',
                  'Mobile-accessible',
                  'Email support',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="text-amber-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-center block">Start Free Trial</Link>
            </div>

            {/* QuoteMGR */}
            <div className="bg-[#111] rounded-2xl border border-amber-500/50 p-8 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="mb-6">
                <span className="text-2xl">📝</span>
                <h3 className="text-2xl font-black text-white mt-2">QuoteMGR</h3>
                <p className="text-slate-400 text-sm mt-1">Estimating & Quoting</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-black text-amber-400">$149</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Unlimited estimates',
                  'Material & labor database',
                  'Roof measurement integration',
                  'Photo attachments',
                  'Professional PDF quotes',
                  'Estimate-to-job tracking',
                  'Email support',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="text-amber-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-orange text-center block">Start Free Trial</Link>
            </div>

            {/* ScopeMGR */}
            <div className="bg-[#111] rounded-2xl border border-blue-600/40 p-8 flex flex-col">
              <div className="mb-6">
                <span className="text-2xl">📸</span>
                <h3 className="text-2xl font-black text-white mt-2">ScopeMGR</h3>
                <p className="text-slate-400 text-sm mt-1">Photo Documentation (Mobile)</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-black text-amber-400">$49</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Unlimited photo storage',
                  'Annotate & draw on photos',
                  'Organize by roof section',
                  'Share scopes with adjuster',
                  'GPS & timestamp data',
                  'Mobile app (iOS/Android)',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="text-amber-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all text-center block">
                Coming Soon
              </a>
            </div>
          </div>

          {/* Bundle */}
          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-red-900/30 to-amber-900/20 rounded-2xl border border-red-700/40 p-8 text-center">
            <span className="inline-block bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
              Best Value
            </span>
            <h3 className="text-3xl font-black text-white mb-2">All Three Tools</h3>
            <p className="text-slate-300 mb-6">TrussCTR + QuoteMGR + ScopeMGR — everything you need to run your contracting business.</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-slate-400 line-through text-2xl">$297/mo</span>
              <span className="text-4xl font-black text-amber-400">$199/mo</span>
              <span className="text-slate-400 text-sm">when bundled</span>
            </div>
            <Link href="/contact" className="btn-primary inline-block">Get All Three</Link>
          </div>
        </div>
      </section>

      {/* Roofing Pricing Note */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-4xl mb-4 block">🏠</span>
          <h2 className="text-3xl font-black text-white mb-4">Roofing Services</h2>
          <p className="text-slate-300 text-lg mb-6">
            Roofing estimates are free — and we work with all insurance claims. Pricing depends on roof size, materials, and scope of work.
          </p>
          <p className="text-slate-400 mb-8">
            No two roofs are the same. Get a free inspection and we'll give you an accurate, transparent quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary inline-block text-center">Schedule Free Inspection</a>
            <a href="/roofing" className="bg-[#1a1a1a] hover:bg-[#222] text-white font-semibold px-6 py-3 rounded-lg transition-all text-center border border-slate-600">
              Learn About Our Roofing
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0a0a0a] border-t border-red-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is there a free trial?',
                a: 'Yes — all SaaS tools come with a 14-day free trial. No credit card required to start.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Absolutely. Monthly plans can be cancelled at any time. No long-term contracts required.',
              },
              {
                q: 'Do the tools work together?',
                a: 'Yes. TrussCTR, QuoteMGR, and ScopeMGR are built to share data — leads become jobs, jobs get estimates, estimates get photo documentation.',
              },
              {
                q: 'Is there a mobile app?',
                a: 'TrussCTR and QuoteMGR are mobile-friendly web apps. ScopeMGR is a native mobile app (coming soon to App Store).',
              },
              {
                q: 'What about roofing pricing?',
                a: 'Roofing is quoted per-job after a free inspection. We work with all major insurance carriers and will never surprise you with hidden costs.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#111] rounded-xl p-6 border border-slate-700/40">
                <h3 className="text-white font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-black border-t border-red-900/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-4">Still have questions?</h2>
          <p className="text-slate-300 mb-6">Talk to a real person — we'll help you figure out what's right for your business.</p>
          <a href="/contact" className="btn-primary inline-block">Contact Us</a>
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