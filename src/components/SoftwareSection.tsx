import Link from 'next/link'

export default function SoftwareSection() {
  const products = [
    {
      id: 'trussctr',
      name: 'TrussCTR',
      tagline: 'The CRM Built for Contractors',
      description: 'Manage your pipeline, track jobs, automate follow-ups, and close more deals. TrussCTR is the CRM that actually understands how roofing companies work.',
      color: 'blue',
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
      color: 'orange',
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
    <section id="software" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            614 Tech — Contractor Software
          </span>
          <h2 className="section-heading">Software Built by a Roofer,<br />For Roofers.</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We got tired of expensive, clunky contractor tools. So we built better ones.
            Now we\'re making them available to every contractor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`card border-2 ${
                product.color === 'blue' ? 'border-blue-100 hover:border-blue-300' : 'border-orange-100 hover:border-orange-300'
              } transition-all duration-300`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
                  product.color === 'blue' ? 'bg-blue-100' : 'bg-orange-100'
                }`}>
                  {product.icon}
                </div>
                <div>
                  {/* Replace with: <img src={`/${product.id}-logo.png`} className="h-8" alt={product.name} /> */}
                  <h3 className="text-2xl font-black text-slate-900">{product.name}</h3>
                  <p className={`text-sm font-medium ${
                    product.color === 'blue' ? 'text-blue-600' : 'text-orange-600'
                  }`}>{product.tagline}</p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>

              <ul className="grid grid-cols-2 gap-2 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      product.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={product.href}
                className={product.color === 'blue' ? 'btn-primary block text-center' : 'btn-orange block text-center'}
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
