'use client'
import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Why Us', href: '/#why-us' },
    { label: 'Software', href: '/#software' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-steel-900/95 backdrop-blur-md shadow-2xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="614 Restore LLC"
              className="h-14 w-14 object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-heading font-bold text-white tracking-wide">
                614 <span className="text-red-500">Restore</span>
              </span>
              <span className="block text-[10px] text-steel-400 uppercase tracking-[0.2em]">
                LLC
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-steel-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:6148088899"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              (614) 808-8899
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-steel-900/98 backdrop-blur-lg border-t border-white/10 mt-2">
          <div className="px-4 py-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-steel-300 hover:text-white hover:bg-white/10 rounded-lg font-medium transition"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:6148088899"
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg font-semibold mt-4"
            >
              <Phone className="w-4 h-4" />
              (614) 808-8899
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
