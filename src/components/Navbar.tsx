'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/614logo.png" width={160} height={40} style={{ height: '40px', width: 'auto' }} alt="614 Restore & Tech" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Services</Link>
            <Link href="#software" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Software</Link>
            <Link href="/roofing" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Roofing</Link>
            <Link href="/software" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">Products</Link>
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-red-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 flex flex-col gap-3 border-t border-red-900/40 mt-1">
            <Link href="#services" className="text-slate-300 hover:text-red-400 py-2 text-sm" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link href="#software" className="text-slate-300 hover:text-red-400 py-2 text-sm" onClick={() => setMobileOpen(false)}>Software</Link>
            <Link href="/roofing" className="text-slate-300 hover:text-red-400 py-2 text-sm" onClick={() => setMobileOpen(false)}>Roofing</Link>
            <Link href="/software" className="text-slate-300 hover:text-red-400 py-2 text-sm" onClick={() => setMobileOpen(false)}>Products</Link>
            <Link href="/contact" className="btn-primary text-sm text-center" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
