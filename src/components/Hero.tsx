import { Phone, ArrowDown, Shield, Star, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-roof.jpg"
          alt="Professional roofing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950/90 via-steel-900/80 to-steel-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950/60 via-transparent to-steel-950/30" />
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
            <Shield className="w-4 h-4" />
            Columbus, Ohio&apos;s Trusted Restoration Experts
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 animate-fade-in-up delay-100">
            Protecting Your Home.
            <br />
            <span className="text-red-500">Restoring</span> Your Peace of Mind.
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 max-w-2xl mb-10 animate-fade-in-up delay-200 leading-relaxed">
            Residential &amp; commercial roofing, siding, gutters, and full storm restoration —
            backed by honest service and genuine care for our Columbus neighbors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
            <a
              href="tel:6148088899"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now — Free Estimate
            </a>
            <a
              href="/#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/5"
            >
              Our Services
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap gap-8 animate-fade-in-up delay-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="text-white font-semibold">Fully Licensed</p>
                <p className="text-steel-400 text-sm">&amp; Insured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="text-white font-semibold">5-Star Rated</p>
                <p className="text-steel-400 text-sm">Customer Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="text-white font-semibold">Fast Response</p>
                <p className="text-steel-400 text-sm">Same-Day Inspections</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  )
}
