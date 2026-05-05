const galleryImages = [
  { src: '/images/work-gallery-1.jpg', alt: '614 Restore completed project - residential roof' },
  { src: '/images/work-1.jpg', alt: '614 Restore completed project - asphalt shingle roof' },
  { src: '/images/work-2.jpg', alt: '614 Restore completed project - storm damage repair' },
  { src: '/images/drone-aerial-1.jpg', alt: 'Aerial drone view of completed roofing project' },
  { src: '/images/drone-aerial-2.jpg', alt: 'Drone aerial inspection of roof' },
  { src: '/images/siding-work.jpg', alt: 'Siding installation project' },
  { src: '/images/gutter-install.jpg', alt: 'Seamless gutter installation' },
  { src: '/images/storm-damage.jpg', alt: 'Storm damage restoration project' },
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
            Projects We&apos;ve <span className="text-red-600">Proudly</span> Completed
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            Every project fully documented — from initial inspection to final walkthrough.
            Browse our completed work across Central Ohio.
          </p>
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

        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
