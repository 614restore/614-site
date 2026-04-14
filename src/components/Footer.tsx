import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">614</span>
              </div>
              <div>
                <div className="text-white font-bold">614 Restore & Tech</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Columbus, OH. Roofing services + contractor software.
              One company. Two products. One loop.
            </p>
          </div>

          {/* Roofing */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Roofing</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/roofing" className="hover:text-white transition-colors">Services Overview</Link></li>
              <li><Link href="/roofing#storm" className="hover:text-white transition-colors">Storm Damage</Link></li>
              <li><Link href="/roofing#insurance" className="hover:text-white transition-colors">Insurance Claims</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Free Inspection</Link></li>
            </ul>
          </div>

          {/* Software */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Software</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/software" className="hover:text-white transition-colors">Products Overview</Link></li>
              <li><Link href="/software/trussctr" className="hover:text-white transition-colors">TrussCTR CRM</Link></li>
              <li><Link href="/software/quotemgr" className="hover:text-white transition-colors">QuoteMGR</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">📍 Columbus, Ohio</li>
              <li><a href="tel:6141234567" className="hover:text-white transition-colors">📞 (614) 123-4567</a></li>
              <li><a href="mailto:hello@614restore.com" className="hover:text-white transition-colors">✉️ hello@614restore.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">© 2026 614 Restore & Tech. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
