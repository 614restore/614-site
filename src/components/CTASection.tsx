export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-[#1a0010] to-black relative overflow-hidden">
      {/* Subtle gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Roofing CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready for a New Roof?
            </h2>
            <p className="text-silver text-lg mb-8">
              Get a free inspection and estimate. We work with all insurance companies
              and can usually get you on the schedule within 48 hours.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-slate-100 placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-slate-100 placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="text"
                placeholder="Address (optional)"
                className="bg-white/5 border border-scarlet/30 rounded-lg px-4 py-3 text-slate-100 placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="bg-scarlet hover:bg-scarlet/80 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
                🏠 Schedule My Free Inspection
              </button>
            </form>
          </div>

          {/* Right: Software CTA */}
          <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-gold/20 hover:border-gold/40 transition-colors">
            <h2 className="text-3xl font-black text-white mb-4">
              Contractor? Try Our Software Free.
            </h2>
            <p className="text-silver mb-6">
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
                <li key={item} className="text-silver text-sm">{item}</li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <a href="/software" className="bg-gold hover:bg-gold/80 text-black font-bold py-3 px-6 rounded-lg text-center transition-colors shadow-md">
                ⚡ Get Early Access to TrussCTR
              </a>
              <a href="/software" className="bg-white/10 hover:bg-white/20 text-silver font-semibold py-3 px-6 rounded-lg text-center transition-colors border border-silver/30">
                📊 Try QuoteMGR Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
