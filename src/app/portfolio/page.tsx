'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential Roofing' },
  { id: 'commercial', label: 'Commercial Roofing' },
  { id: 'siding', label: 'Siding' },
  { id: 'gutters', label: 'Gutters' },
  { id: 'storm', label: 'Storm Damage' },
]

const projects = [
  { id: 1, category: 'residential', title: 'Full Roof Replacement', location: 'Westerville, OH', image: '/images/work-gallery-1.jpg' },
  { id: 2, category: 'residential', title: 'Storm Damage Repair', location: 'Dublin, OH', image: '/images/storm-damage.jpg' },
  { id: 3, category: 'residential', title: 'Roof Inspection', location: 'Columbus, OH', image: '/images/hero-roof.jpg' },
  { id: 4, category: 'commercial', title: 'TPO Flat Roof Installation', location: 'Reynoldsburg, OH', image: '/images/work-gallery-1.jpg' },
  { id: 5, category: 'siding', title: 'Fiber Cement Siding', location: 'Grove City, OH', image: '/images/siding-work.jpg' },
  { id: 6, category: 'storm', title: 'Hail Damage Restoration', location: 'Pickerington, OH', image: '/images/storm-damage.jpg' },
  { id: 7, category: 'residential', title: 'Asphalt Shingle Roof', location: 'Upper Arlington, OH', image: '/images/hero-roof.jpg' },
  { id: 8, category: 'gutters', title: 'Seamless Gutter Install', location: 'Worthington, OH', image: '/images/gutter-install.jpg' },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('all')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const cat = params.get('cat')
    if (cat) setActive(cat)
  }, [])

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 bg-steel-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-[0.15em] mb-3">Our Work</span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">Project Gallery</h1>
          <p className="text-steel-400 text-lg max-w-2xl mx-auto">Every roof, every project — fully documented with photos. Browse our completed work across Central Ohio.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                active === cat.id
                  ? 'bg-red-600 text-white'
                  : 'bg-steel-100 text-steel-600 hover:bg-steel-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-56 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {categories.find(c => c.id === project.category)?.label}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-steel-900 text-lg mb-1">{project.title}</h3>
                <p className="text-steel-500 text-sm">📍 {project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-steel-500 py-12">No projects in this category yet — check back soon!</p>
        )}
      </div>

      <Footer />
    </main>
  )
}