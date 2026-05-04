import { Phone, ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-roof.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-red-700/90" />
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-red-600 to-red-400" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white mb-4">
          Don&apos;t Wait Until the Next Storm
        </h2>
        <p className="text-red-200 text-lg mb-8 max-w-2xl mx-auto">
          Schedule your free roof inspection today. We&apos;ll give you an honest assessment —
          no pressure, no gimmicks, just the truth about your roof&apos;s condition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:6148088899"
            className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-red-50 hover:scale-105 shadow-2xl"
          >
            <Phone className="w-5 h-5" />
            (614) 808-8899
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/10"
          >
            Request Estimate
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
