const galleryImages = [
  {
    src: '/images/work-gallery-1.jpg',
    alt: '614 Restore completed project',
  },
]

export default function Gallery() {
  return (
    <section className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-steel-900 mb-4">
            Projects We've <span className="text-red-600">Proudly</span> Completed
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}