import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contractor Software | 614 Tech — TrussCTR & QuoteMGR',
  description:
    'TrussCTR CRM and QuoteMGR — contractor software built by a roofer. Manage jobs, build quotes, and close more deals.',
}

const products = [
  {
    id: 'trussctr',
    name: 'TrussCTR',
    tagline: 'The CRM Built for Contractors',
    description:
      'Manage your pipeline, track jobs, automate follow-ups, and close more deals. TrussCTR is the CRM that actually understands how roofing companies work.',
    color: 'red' as const,
    icon: '🏗️',
    features: [
      'Kanban pipeline for every job stage',
      'Customer CRM with full history',
      'Document signing built-in',
      'Mobile app (iOS + Android)',
      'Insurance claim tracking',
      'Payment integration',
      'Team & crew management',
      'Automated follow-up sequences',
    ],
    cta: 'Start Free Trial',
    href: '/software/trussctr',
    price: 'Free during beta',
  },
  {
    id: 'quotemgr',
    name: 'QuoteMGR',
    tagline: 'Quotes That Close',
    description:
      'Build beautiful, professional roofing quotes in minutes. Send, track, and get them signed — all in one place. The SumoQuote alternative built for speed.',
    color: 'gold' as const,
    icon: '📊',
    features: [
      'Drag-and-drop quote builder',
      'Material & labor pricing library',
      'E-signature built-in',
      'PDF export with your branding',
      'Quote tracking & open notifications',
      'Xactimate-style line items',
      'Customer portal',
      'Multi-trade support',
    ],
    cta: 'Try QuoteMGR Free',
    href: '/software/quotemgr',
    price: 'Free during beta',
  },
]

export default function SoftwarePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-black overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-700/10 rounded-full blur-3xl animate-pulse" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-amber-500/30">
              614 Tech — Contractor Software
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Software Built by a Roofer,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                For Roofers.
              </span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-8">
              We got tired of expensive, clunky contractor tools. So we built better ones. TrussCTR
              and QuoteMGR are now available to every contractor — free during beta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#trussctr" className="btn-primary text-center">
                🏗️ Explore TrussCTR
              </a>
              <a
                href="#quotemgr"
                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-center"
              >
                📊 Explore QuoteMGR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-[#050509]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {products.map((product, idx) => (
            <div
              id={product.id}
              key={product.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Text */}
              <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${
                    product.color === 'red' ? 'bg-red-900/60' : 'bg-amber-500/20'
                  }`}
                >
                  {product.icon}
                </div>
                <h2 className="text-4xl font-black text-white mb-2">{product.name}</h2>
                <p
                  className={`text-lg font-medium mb-4 ${
                    product.color === 'red' ? 'text-red-400' : 'text-amber-300'
                  }`}
                >
                  {product.tagline}
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          product.color === 'red' ? 'bg-red-500' : 'bg-amber-400'
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href={product.href}
                    className={
                      product.color === 'red'
                        ? 'btn-primary text-center'
                        : 'btn-orange text-center'
                    }
                  >
                    {product.cta}
                  </Link>
                  <span className="text-slate-400 text-sm self-center">{product.price}</span>
                </div>
              </div>

              {/* Visual card */}
              <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div
                  className={`card border-2 p-8 ${
                    product.color === 'red'
                      ? 'border-red-700/50 hover:border-red-500'
                      : 'border-amber-500/30 hover:border-amber-400'
                  }`}
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-3">{product.icon}</div>
                    <h3 className="text-2xl font-black text-white">{product.name}</h3>
                    <p
                      className={`text-sm ${
                        product.color === 'red' ? 'text-red-400' : 'text-amber-300'
                      }`}
                    >
                      {product.tagline}
                    </p>
                  </div>
                  <div
                    className={`rounded-xl p-4 text-center ${
                      product.color === 'red'
                        ? 'bg-red-900/20 border border-red-700/30'
                        : 'bg-amber-500/10 border border-amber-500/20'
                    }`}
                  >
                    <div className="text-3xl font-black text-white mb-1">FREE</div>
                    <div className="text-slate-400 text-sm">During Beta</div>
                    <div
                      className={`text-xs mt-2 ${
                        product.color === 'red' ? 'text-red-400' : 'text-amber-400'
                      }`}
                    >
                      Lock in founder pricing forever
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why we built this */}
      <section className="py-24 bg-[#0a0a0a] border-t border-red-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Why We Built These Tools</h2>
          <p className="text-slate-300 text-xl leading-relaxed mb-12">
            After 10+ years in roofing, we were tired of paying for software that didn&apos;t
            understand our industry. Generic CRMs, clunky quote tools, and disconnected apps that
            cost thousands per year. So we built what we wished existed.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Built for Speed',
                text: 'Create a quote in minutes, not hours. Every workflow is optimized for how contractors actually work.',
              },
              {
                icon: '💰',
                title: 'Contractor Pricing',
                text: 'We know margins are tight. Our pricing is designed for small to mid-size contractor businesses.',
              },
              {
                icon: '🔄',
                title: 'The Full Loop',
                text: "Roofing services and software in one company means we eat our own cooking. If it doesn't work for us, we fix it.",
              },
            ].map((item) => (
              <div key={item.title} className="card text-left">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-black via-amber-950/20 to-black border-t border-amber-500/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Get Early Access — It&apos;s Free.
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Both products are in active beta. Join now, lock in founder pricing, and help shape
            the tools that will power the next generation of contractors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/software/trussctr" className="btn-primary text-center">
              ⚡ Get Early Access to TrussCTR
            </a>
            <a href="/software/quotemgr" className="btn-orange text-center">
              📊 Try QuoteMGR Free
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-6">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
