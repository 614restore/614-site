import Link from 'next/link'

export default function SoftwareSection() {
  const products = [
    {
      id: 'trussctr',
      name: 'TrussCTR',
      tagline: 'The CRM Built for Contractors',
      description: 'Manage your pipeline, track jobs, automate follow-ups, and close more deals. TrussCTR is the CRM that actually understands how roofing companies work.',
      color: 'scarlet',
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
      href: '/software',
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
      href: '/software',
    },
  ]

  return (
    <section id="software" className="py-24 bg-[#050509]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-gold/30">
            614 Tech — Contractor Software
          </span>
          <h2 className="section-heading">Software Built by a Roofer,<br />For Roofers.</h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            We got tired of expensive, clunky contractor tools. So we built better ones.
            Now we&apos;re making them available to every contractor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`card border-2 transition-all duration-300 ${
                product.color === 'scarlet'
                  ? 'border-scarlet/30 hover:border-scarlet/70'
                  : 'border-gold/30 hover:border-gold/70'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
                  product.color === 'scarlet' ? 'bg-scarlet/20' : 'bg-gold/20'
                }`}>
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{product.name}</h3>
                  <p className={`text-sm font-medium ${
                    product.color === 'scarlet' ? 'text-scarlet' : 'text-gold'
                  }`}>{product.tagline}</p>
                </div>
              </div>

              <p className="text-silver mb-6 leading-relaxed">{product.description}</p>

              <ul className="grid grid-cols-2 gap-2 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-silver">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      product.color === 'scarlet' ? 'bg-scarlet' : 'bg-gold'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={product.href}
                className={product.color === 'scarlet' ? 'btn-primary block text-center' : 'btn-gold block text-center'}
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
