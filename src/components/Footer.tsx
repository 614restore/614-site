import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-silver py-16 border-t border-scarlet/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="614 Restore"
                width={40}
                height={40}
                className="h-9 w-auto object-contain"
              />
              <div className="leading-none">
                <div className="text-white font-bold">614 Restore &amp; Tech</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Columbus, OH. Roofing services + contractor software.
              One company. Two products. One loop.
            </p>
          </div>

          {/* Roofing */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wide">Roofing</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/roofing" className="hover:text-scarlet transition-colors">Services Overview</Link></li>
              <li><Link href="/roofing#storm" className="hover:text-scarlet transition-colors">Storm Damage</Link></li>
              <li><Link href="/roofing#insurance" className="hover:text-scarlet transition-colors">Insurance Claims</Link></li>
              <li><Link href="/contact" className="hover:text-scarlet transition-colors">Free Inspection</Link></li>
            </ul>
          </div>

          {/* Software */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wide">Software</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/software" className="hover:text-scarlet transition-colors">Products Overview</Link></li>
              <li><Link href="/software" className="hover:text-scarlet transition-colors">TrussCTR CRM</Link></li>
              <li><Link href="/software" className="hover:text-scarlet transition-colors">QuoteMGR</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">📍 Columbus, Ohio</li>
              <li><a href="tel:6141234567" className="hover:text-scarlet transition-colors">📞 (614) 123-4567</a></li>
              <li><a href="mailto:hello@614restore.com" className="hover:text-scarlet transition-colors">✉️ hello@614restore.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© 2026 614 Restore &amp; Tech. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
