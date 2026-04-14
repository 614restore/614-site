export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-red-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      {/* Subtle gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Roofing CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready for a New Roof?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Get a free inspection and estimate. We work with all insurance companies
              and can usually get you on the schedule within 48 hours.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/5 border border-red-700/50 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white/5 border border-red-700/50 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Address (optional)"
                className="bg-white/5 border border-red-700/50 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button type="submit" className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
                🏠 Schedule My Free Inspection
              </button>
            </form>
          </div>

          {/* Right: Software CTA */}
          <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-amber-500/20 hover:border-amber-400/40 transition-colors">
            <h2 className="text-3xl font-black text-white mb-4">
              Contractor? Try Our Software Free.
            </h2>
            <p className="text-slate-300 mb-6">
              TrussCTR and QuoteMGR are in active beta. Get early access, lock in founder pricing,
              and help shape the product.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                '✅ Free during beta',
                '✅ No credit card required',
                '✅ Founder pricing locked in forever',
                '✅ Direct access to the dev team',
              ].map((item) => (
                <li key={item} className="text-slate-200 text-sm">{item}</li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <a href="/software/trussctr" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-lg text-center transition-colors shadow-md">
                ⚡ Get Early Access to TrussCTR
              </a>
              <a href="/software/quotemgr" className="bg-white/10 hover:bg-white/20 text-slate-200 font-semibold py-3 px-6 rounded-lg text-center transition-colors border border-slate-500/50">
                📊 Try QuoteMGR Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
