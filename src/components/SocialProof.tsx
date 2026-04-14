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
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Homeowners & Contractors</h2>
          <p className="text-slate-400 text-lg">Real results from real customers.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                  t.type === 'roofing' ? 'bg-blue-600' : 'bg-orange-600'
                }`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos bar */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-6">TRUSTED PARTNERS & CERTIFICATIONS</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40">
            {['GAF Certified', 'Owens Corning', 'CertainTeed', 'BBB Accredited', 'State Licensed'].map((badge) => (
              <span key={badge} className="text-slate-400 font-semibold text-sm">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
