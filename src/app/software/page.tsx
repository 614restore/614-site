import Link from 'next/link'

export default function SoftwarePage() {
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
              <Link href="/software" className="text-red-400 transition-colors text-sm font-medium">Software</Link>
              <Link href="/roofing" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Roofing</Link>
              <Link href="/pricing" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Pricing</Link>
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-amber-500/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-amber-500/30">
            Built by Roofers, for Contractors
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Contractor Software<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">That Actually Works</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10">
            Three tools built from real jobsite experience — CRM, quoting, and photo documentation. No bloat, no learning curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pricing" className="btn-orange inline-block text-center">View Pricing</a>
            <a href="/contact" className="bg-[#1a1a1a] hover:bg-[#222] text-white font-semibold px-6 py-3 rounded-lg transition-all text-center border border-slate-600">Request a Demo</a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-[#0a0a0a] border-y border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">

            {/* TrussCTR */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-red-900/50 text-red-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">CRM & Project Management</span>
                <h2 className="text-4xl font-black text-white mb-4">TrussCTR</h2>
                <p className="text-slate-300 text-lg mb-6">
                  Keep every lead, job, and customer organized — from first call to final payment. Built for crews that need real visibility without the spreadsheet chaos.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Lead tracking with instant follow-up reminders',
                    'Job pipeline with stage-based progress',
                    'Customer history — every interaction, one place',
                    'Insurance claim status tracking',
                    'Mobile-friendly — runs on your phone at the jobsite',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-300">
                      <span className="text-amber-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary inline-block">Get Early Access</Link>
              </div>
              <div className="bg-[#111] rounded-2xl border border-slate-700/60 p-4">
                <div className="bg-gradient-to-br from-red-900/30 to-red-800/10 rounded-xl aspect-video flex items-center justify-center border border-red-700/30">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📋</div>
                    <p className="text-slate-400 text-sm">TrussCTR Dashboard</p>
                    <p className="text-slate-500 text-xs mt-1">Screenshot coming soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* QuoteMGR */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#111] rounded-2xl border border-slate-700/60 p-4">
                  <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/10 rounded-xl aspect-video flex items-center justify-center border border-amber-600/30">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📝</div>
                      <p className="text-slate-400 text-sm">QuoteMGR Interface</p>
                      <p className="text-slate-500 text-xs mt-1">Screenshot coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block bg-amber-500/20 text-amber-300 text-sm font-semibold px-3 py-1 rounded-full mb-4">Estimating & Quoting</span>
                <h2 className="text-4xl font-black text-white mb-4">QuoteMGR</h2>
                <p className="text-slate-300 text-lg mb-6">
                  Build accurate estimates in minutes, not hours. Pull in material pricing, labor rates, and roof measurements — then send a professional quote from your phone.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Material & labor cost database',
                    'Roof measurement integration',
                    'One-tap photo attachments from jobsite',
                    'Professional PDF quotes with your branding',
                    'Track which estimates become jobs',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-300">
                      <span className="text-amber-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-orange inline-block text-center">Get Early Access</Link>
              </div>
            </div>

            {/* ScopeMGR */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-blue-900/50 text-blue-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">Photo Documentation</span>
                <h2 className="text-4xl font-black text-white mb-4">ScopeMGR</h2>
                <p className="text-slate-300 text-lg mb-6">
                  Document damage like a pro. Take photos, annotate them, and build a clear scope of work — all from your phone. Perfect for storm jobs and insurance claims.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Photo capture with GPS and timestamp',
                    'Annotate and draw directly on photos',
                    'Organize by roof section / damage type',
                    'Share scope with adjusters and homeowners',
                    'Mobile-only — optimized for the jobsite',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-300">
                      <span className="text-amber-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                  <span>📱</span> Coming to App Store
                </a>
              </div>
              <div className="bg-[#111] rounded-2xl border border-slate-700/60 p-4">
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl aspect-video flex items-center justify-center border border-blue-600/30">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-slate-400 text-sm">ScopeMGR Mobile</p>
                    <p className="text-slate-500 text-xs mt-1">Screenshot coming soon</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to run your business better?</h2>
          <p className="text-slate-300 text-lg mb-8">All three tools work together — or use just the ones you need.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pricing" className="btn-primary inline-block text-center">See Pricing</a>
            <a href="/contact" className="bg-[#1a1a1a] hover:bg-[#222] text-white font-semibold px-6 py-3 rounded-lg transition-all text-center border border-slate-600">Talk to Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Footer() {
  return (
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
  )
}