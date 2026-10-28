'use client'

import { Download } from 'lucide-react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

type Props = {
  href: string
  app: string
  placement: string
  className?: string
}

// App Store link that also records a Meta Pixel event, so ad clicks that reach the App Store can be counted.
export default function AppStoreButton({ href, app, placement, className = '' }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => window.fbq?.('trackCustom', 'AppStoreClick', { app, placement })}
      className={`inline-flex items-center gap-3 bg-steel-900 hover:bg-black text-white font-semibold px-6 py-3 rounded-xl transition-colors ${className}`}
    >
      <Download className="w-6 h-6" />
      <span className="text-left leading-tight">
        <span className="block text-xs font-normal opacity-80">Download on the</span>
        <span className="block text-lg">App Store</span>
      </span>
    </a>
  )
}
