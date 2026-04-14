import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div className="absolute inset-0 bg-[url('/roof-bg.jpg')] bg-cover bg-center opacity-10" />

      {/* Animated orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Columbus, OH — Roofing + SaaS</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              We Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Roofs.
              </span>
              <br />
              We Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Software.
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              614 Restore delivers professional roofing services in Columbus, OH.
              614 Tech builds the contractor software the industry has been missing —
              <strong className="text-white"> TrussCTR</strong> and <strong className="text-white">QuoteMGR</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary text-center text-base">
                🏠 Get a Free Roof Quote
              </Link>
              <Link href="/software" className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-center text-base border border-slate-500">
                💻 See Our Software
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { label: 'Roofs Completed', value: '200+' },
                { label: 'Yrs Experience', value: '10+' },
                { label: 'SaaS Users (Beta)', value: '50+' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dual brand cards */}
          <div className="flex flex-col gap-6">
            <div className="card bg-slate-800/80 border border-blue-500/20 backdrop-blur">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-xl">🏠</div>
                <div>
                  <h3 className="text-white font-bold text-lg">614 Restore</h3>
                  <p className="text-blue-400 text-sm">Roofing & Contracting</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm">Residential & commercial roofing, storm damage restoration, and insurance claims support in Columbus, OH.</p>
              <Link href="/roofing" className="mt-4 inline-block text-blue-400 hover:text-blue-300 text-sm font-medium">Learn more →</Link>
            </div>

            <div className="card bg-slate-800/80 border border-orange-500/20 backdrop-blur">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-xl">⚡</div>
                <div>
                  <h3 className="text-white font-bold text-lg">614 Tech</h3>
                  <p className="text-orange-400 text-sm">Contractor SaaS</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm">TrussCTR CRM and QuoteMGR — built by a roofer who got tired of bad software. Now available to every contractor.</p>
              <Link href="/software" className="mt-4 inline-block text-orange-400 hover:text-orange-300 text-sm font-medium">Explore software →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
