import { Heart, Users, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-steel-50 via-white to-steel-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Portrait */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/portrait-final.jpg"
                alt="Jeff - Owner of 614 Restore"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-red-600 text-white p-5 rounded-xl shadow-lg max-w-[200px]">
              <Heart className="w-6 h-6 mb-1" />
              <p className="font-heading font-bold text-sm">People First</p>
              <p className="text-red-200 text-xs">Always looking out for neighbors</p>
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-steel-900 mb-6 leading-tight">
              Meet <span className="text-red-600">Jeff</span>
            </h2>
            <div className="space-y-4 text-steel-600 leading-relaxed">
              <p>
                After years in the fitness industry — helping people become their best selves —
                COVID changed everything. When the industry took a nosedive, Jeff pivoted back to
                contractor work: masonry, building projects, whatever kept him working and serving
                others during uncertain times.
              </p>
              <p>
                When the world reopened, he jumped into roofing — but on the sales side. And what
                he saw troubled him. Too many companies were in it for themselves, padding their
                wallets instead of looking out for their friends, family, and neighbors.
              </p>
              <p className="font-medium text-steel-800">
                Jeff saw a gap — and an opportunity to do things differently. 614 Restore was
                born from a simple belief: homeowners deserve a contractor who genuinely has their
                back. No upselling. No shortcuts. Just honest work for honest people.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { Icon: Users, title: 'Community', sub: 'Serving Columbus & Central OH' },
                { Icon: Award, title: 'Quality', sub: 'Premium materials, expert work' },
                { Icon: Heart, title: 'Integrity', sub: 'Honest pricing, no surprises' },
                { Icon: TrendingUp, title: 'Innovation', sub: 'Building tools to serve better' },
              ].map(({ Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-steel-900 text-lg">{title}</p>
                    <p className="text-steel-500 text-sm">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:scale-105"
              >
                Request Inspection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}