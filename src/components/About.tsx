import { Heart, Users, Award, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src="/images/about-hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950/85 via-steel-900/70 to-steel-950/50" />
      </div>

      {/* Content - portrait on left, text on right */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Portrait */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-[320px] h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <img
                src="/images/portrait-final.jpg"
                alt="Jeff - Owner of 614 Restore"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -inset-2 border-2 border-red-500/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 bg-red-600 text-white p-5 rounded-xl shadow-lg max-w-[200px]">
              <Heart className="w-6 h-6 mb-1" />
              <p className="font-heading font-bold text-sm">People First</p>
              <p className="text-red-200 text-xs">Always looking out for neighbors</p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Meet <span className="text-red-400">Jeff</span>
            </h2>
            <div className="space-y-4 text-steel-300 leading-relaxed">
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
              <p className="font-medium text-white">
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
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-lg">{title}</p>
                    <p className="text-steel-400 text-sm">{sub}</p>
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