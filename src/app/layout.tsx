import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: '614 Restore | Columbus, Ohio Roofing & Restoration',
  description:
    'Columbus, Ohio\'s trusted roofing, siding, gutters, and storm restoration company. Fully licensed & insured. Call (614) 808-8899 for a free estimate.',
  keywords:
    'roofing Columbus Ohio, storm damage restoration, siding installation, gutters, insurance claims, 614 Restore',
  openGraph: {
    title: '614 Restore | Columbus, Ohio Roofing & Restoration',
    description:
      'Residential & commercial roofing, siding, gutters, and full storm restoration in Columbus, OH. Free estimates. Call (614) 808-8899.',
    url: 'https://614restore.com',
    siteName: '614 Restore',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
