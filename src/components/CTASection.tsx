export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Roofing CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready for a New Roof?
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Get a free inspection and estimate. We work with all insurance companies
              and can usually get you on the schedule within 48 hours.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/10 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white/10 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="text"
                placeholder="Address (optional)"
                className="bg-white/10 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-white transition-colors"
              />
              <button type="submit" className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors">
                🏠 Schedule My Free Inspection
              </button>
            </form>
          </div>

          {/* Right: Software CTA */}
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-black text-white mb-4">
              Contractor? Try Our Software Free.
            </h2>
            <p className="text-blue-200 mb-6">
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
                <li key={item} className="text-white text-sm">{item}</li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <a href="/software/trussctr" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                ⚡ Get Early Access to TrussCTR
              </a>
              <a href="/software/quotemgr" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors border border-white/30">
                📊 Try QuoteMGR Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
