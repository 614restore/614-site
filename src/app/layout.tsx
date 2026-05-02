import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '614 Restore & Tech | Roofing + SaaS Solutions',
  description: 'Professional roofing services in Columbus, OH — powered by our own contractor software: TrussCTR CRM and QuoteMGR.',
  keywords: 'roofing Columbus Ohio, contractor CRM, TrussCTR, QuoteMGR, roofing software',
  openGraph: {
    title: '614 Restore & Tech',
    description: 'Roofing services meets contractor SaaS. Built by roofers, for roofers.',
    url: 'https://614restore.com',
    siteName: '614 Restore',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
