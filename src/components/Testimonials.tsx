import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Westerville, OH',
    text: "Jeffrey and his team were incredible from start to finish. After a bad hailstorm, they handled everything with our insurance and got our roof replaced in just a few days. You can tell they genuinely care about doing right by people.",
    rating: 5,
  },
  {
    name: 'Mike T.',
    location: 'Dublin, OH',
    text: "I had three other companies come out and give estimates. 614 Restore was the only one that didn't try to upsell me on things I didn't need. Honest, fair, and the work was top-notch. Highly recommend.",
    rating: 5,
  },
  {
    name: 'Linda K.',
    location: 'Reynoldsburg, OH',
    text: "The communication throughout the entire process was amazing. Jeffrey kept us updated at every step, showed us photos of the damage, and explained everything in plain English. Our new roof looks beautiful!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-steel-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-[300px] font-heading font-bold text-white leading-none">
          &ldquo;
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            What Our <span className="text-red-500">Neighbors</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-red-500/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-steel-300 leading-relaxed mb-6 text-sm italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-steel-500 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
