export default function SocialProof() {
  const testimonials = [
    {
      name: 'Mike T.',
      location: 'Westerville, OH',
      text: 'These guys handled everything after the hail storm — insurance, materials, the whole job. Roof looks incredible.',
      stars: 5,
      type: 'roofing',
    },
    {
      name: 'Jason R.',
      location: 'Roofing Contractor, Dayton OH',
      text: 'TrussCTR replaced 3 different apps we were using. Our team actually uses it because it\'s built the way we work.',
      stars: 5,
      type: 'software',
    },
    {
      name: 'Sarah M.',
      location: 'Dublin, OH',
      text: 'Fast, professional, and cleaned up everything after. Our new roof is beautiful. Will absolutely use them again.',
      stars: 5,
      type: 'roofing',
    },
    {
      name: 'Derek L.',
      location: 'Contractor, Columbus OH',
      text: 'QuoteMGR cut my quote time in half. My customers love the professional PDFs and I love that they sign right in the app.',
      stars: 5,
      type: 'software',
    },
  ]

  return (
    <section className="py-24 bg-black border-t border-scarlet/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Trusted by Homeowners &amp; Contractors</h2>
          <p className="text-silver text-lg">Real results from real customers.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#111827] rounded-2xl p-6 border border-scarlet/20 hover:border-gold/40 transition-colors shadow-md">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-silver text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                  t.type === 'roofing' ? 'bg-scarlet' : 'bg-gold'
                }`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-silver/60 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner badges */}
        <div className="mt-16 text-center">
          <p className="text-silver/40 text-sm mb-6 tracking-[0.2em] uppercase">Trusted Partners &amp; Certifications</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {['GAF Certified', 'Owens Corning', 'CertainTeed', 'BBB Accredited', 'State Licensed'].map((badge) => (
              <span key={badge} className="text-silver font-semibold text-sm">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
