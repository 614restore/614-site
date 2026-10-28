'use client'

import { useEffect, useState } from 'react'
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

// Visitors from an ad arrive with ?utm_source=chatgpt (or facebook, etc.). Swapping the App Store
// campaign token to "<source>-ad" lets App Store Connect report downloads from each ad source.
function adSource(): string | null {
  const raw = new URLSearchParams(window.location.search).get('utm_source')
  const source = raw?.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 30)
  return source || null
}

// App Store link that also records a Meta Pixel event, so ad clicks that reach the App Store can be counted.
export default function AppStoreButton({ href, app, placement, className = '' }: Props) {
  const [link, setLink] = useState(href)
  const [source, setSource] = useState<string | null>(null)

  useEffect(() => {
    const s = adSource()
    if (!s) return
    const url = new URL(href)
    url.searchParams.set('ct', `${s}-ad`)
    setLink(url.toString())
    setSource(s)
  }, [href])

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => window.fbq?.('trackCustom', 'AppStoreClick', { app, placement, source: source ?? 'site' })}
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
