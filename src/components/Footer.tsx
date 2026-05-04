import { Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-steel-950 text-steel-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="614 Restore LLC"
                className="h-12 w-12 object-contain"
              />
              <div>
                <span className="text-xl font-heading font-bold text-white">
                  614 <span className="text-red-500">Restore</span>
                </span>
                <span className="block text-[10px] text-steel-500 uppercase tracking-[0.2em]">
                  LLC
                </span>
              </div>
            </div>
            <p className="text-steel-500 text-sm leading-relaxed mb-6">
              Columbus, Ohio's trusted roofing and restoration company.
              Protecting homes and helping neighbors — one roof at a time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-red-400 transition">Residential Roofing</Link></li>
              <li><Link href="/services" className="hover:text-red-400 transition">Commercial Roofing</Link></li>
              <li><Link href="/services" className="hover:text-red-400 transition">Siding Installation</Link></li>
              <li><Link href="/services" className="hover:text-red-400 transition">Gutters & Downspouts</Link></li>
              <li><Link href="/services" className="hover:text-red-400 transition">Storm Restoration</Link></li>
              <li><Link href="/services" className="hover:text-red-400 transition">Insurance Assistance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-red-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-red-400 transition">Services</Link></li>
              <li><Link href="/software" className="hover:text-red-400 transition">Our Software</Link></li>
              <li><Link href="/contact" className="hover:text-red-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:6148088899" className="flex items-center gap-3 hover:text-red-400 transition">
                  <Phone className="w-4 h-4 text-red-500" />
                  (614) 808-8899
                </a>
              </li>
              <li>
                <a href="mailto:info@614restore.com" className="flex items-center gap-3 hover:text-red-400 transition">
                  <Mail className="w-4 h-4 text-red-500" />
                  info@614restore.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                  Columbus, OH & Central Ohio
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-sm">
            © {currentYear} 614 Restore LLC. All rights reserved.
          </p>
          <p className="text-steel-600 text-xs">
            Proudly serving Columbus, Ohio and surrounding communities
          </p>
        </div>
      </div>
    </footer>
  )
}