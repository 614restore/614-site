import { Heart, Users, Award, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-jeff.jpg"
                alt="Jeffrey Newell - Owner of 614 Restore LLC"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-2xl shadow-red-600/40 max-w-[220px]">
              <Heart className="w-8 h-8 mb-2" />
              <p className="font-heading font-bold text-lg">People First</p>
              <p className="text-red-200 text-sm">Always looking out for our neighbors</p>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-red-600/30 rounded-2xl" />
          </div>

          <div>
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-steel-900 mb-6">
              Meet <span className="text-red-600">Jeffrey Newell</span>
            </h2>
            <div className="space-y-4 text-steel-600 leading-relaxed">
              <p>
                After years in the fitness industry — a career built on helping people become
                their best selves — COVID changed everything. When the industry took a nosedive,
                Jeffrey pivoted back to contractor work: masonry, building projects, whatever
                kept him working and serving others during uncertain times.
              </p>
              <p>
                When the world reopened, he jumped into roofing — but this time on the sales side.
                And what he saw troubled him. Too many companies were in it for themselves, padding
                their wallets instead of looking out for their friends, family, and neighbors.
              </p>
              <p className="font-medium text-steel-800">
                Jeffrey saw a gap — and an opportunity to do things differently. 614 Restore LLC
                was born from a simple belief: homeowners deserve a contractor who genuinely has
                their back. No upselling. No shortcuts. Just honest work for honest people.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { Icon: Users, title: 'Community', sub: 'Proudly serving Columbus & Central OH' },
                { Icon: Award, title: 'Quality', sub: 'Premium materials, expert installation' },
                { Icon: Heart, title: 'Integrity', sub: 'Honest pricing, transparent process' },
                { Icon: TrendingUp, title: 'Innovation', sub: 'Building tools to serve you better' },
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
          </div>
        </div>
      </div>
    </section>
  )
}
