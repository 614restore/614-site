import Link from 'next/link'

export default function SoftwareSection() {
  const products = [
    {
      id: 'trussctr',
      name: 'TrussCTR',
      tagline: 'The CRM Built for Contractors',
      description: 'Manage your pipeline, track jobs, automate follow-ups, and close more deals. TrussCTR is the CRM that actually understands how roofing companies work.',
      color: 'red',
      icon: '🏗️',
      features: [
        'Kanban pipeline for every job stage',
        'Customer CRM with full history',
        'Document signing built-in',
        'Mobile app (iOS + Android)',
        'Insurance claim tracking',
        'Payment integration',
      ],
      cta: 'Start Free Trial',
      href: '/software/trussctr',
    },
    {
      id: 'quotemgr',
      name: 'QuoteMGR',
      tagline: 'Quotes That Close',
      description: 'Build beautiful, professional roofing quotes in minutes. Send, track, and get them signed — all in one place. The SumoQuote alternative built for speed.',
      color: 'gold',
      icon: '📊',
      features: [
        'Drag-and-drop quote builder',
        'Material & labor pricing library',
        'E-signature built-in',
        'PDF export with your branding',
        'Quote tracking & open notifications',
        'Xactimate-style line items',
      ],
      cta: 'Try QuoteMGR Free',
      href: '/software/quotemgr',
    },
  ]

  return (
    <section id="software" className="py-24 bg-[#050509]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-500/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-amber-500/30">
            614 Tech — Contractor Software
          </span>
          <h2 className="section-heading">Software Built by a Roofer,<br />For Roofers.</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We got tired of expensive, clunky contractor tools. So we built better ones.
            Now we&apos;re making them available to every contractor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`card border-2 transition-all duration-300 ${
                product.color === 'red'
                  ? 'border-red-800/60 hover:border-red-500'
                  : 'border-amber-500/30 hover:border-amber-400'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
                  product.color === 'red' ? 'bg-red-900/60' : 'bg-amber-500/20'
                }`}>
                  {product.icon}
                </div>
                <div>
                  {/* Replace with real logos once in /public: */}
                  {/* <img src={`/${product.id}-logo.jpg`} className="h-10 w-auto mb-1" alt={product.name} /> */}
                  <h3 className="text-2xl font-black text-white">{product.name}</h3>
                  <p className={`text-sm font-medium ${
                    product.color === 'red' ? 'text-red-400' : 'text-amber-300'
                  }`}>{product.tagline}</p>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">{product.description}</p>

              <ul className="grid grid-cols-2 gap-2 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      product.color === 'red' ? 'bg-red-500' : 'bg-amber-400'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={product.href}
                className={product.color === 'red' ? 'btn-primary block text-center' : 'btn-orange block text-center'}
              >
                {product.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
