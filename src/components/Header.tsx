'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Roofing Services', href: '/roofing' },
  { label: 'Software', href: '/software' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-scarlet/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="614 Restore"
              width={48}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <div className="leading-none">
              <span className="text-white font-bold text-lg block">614 Restore</span>
              <span className="text-gold text-xs">& Tech</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-silver hover:text-scarlet transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-scarlet hover:bg-scarlet/80 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200 text-sm shadow"
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-silver hover:text-scarlet transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 flex flex-col gap-2 border-t border-scarlet/20 mt-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-silver hover:text-scarlet py-2 text-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-scarlet hover:bg-scarlet/80 text-white font-semibold py-2 px-4 rounded-lg text-sm text-center transition-all duration-200 mt-1"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
