import { Heart, Users, Award, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center">
      {/* Full-screen background */}
      <div className="absolute inset-0">
        <img
          src="/images/about-hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Content in centered card */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-16 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left: Photo */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/portrait.jpg"
                  alt="Jeff - Owner of 614 Restore LLC"
                  className="w-full h-[400px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Right: Story */}
            <div className="lg:col-span-3">
              <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-steel-900 mb-6">
                Meet <span className="text-red-600">Jeff</span>
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  After years in the fitness industry — a career built on helping people become
                  their best selves — COVID changed everything. When the industry took a nosedive,
                  Jeff pivoted back to contractor work: masonry, building projects, whatever
                  kept him working and serving others during uncertain times.
                </p>
                <p>
                  When the world reopened, he jumped into roofing — but this time on the sales side.
                  And what he saw troubled him. Too many companies were in it for themselves, padding
                  their wallets instead of looking out for their friends, family, and neighbors.
                </p>
                <p className="font-medium text-steel-800">
                  Jeff saw a gap — and an opportunity to do things differently. 614 Restore LLC
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
      </div>
    </section>
  )
}