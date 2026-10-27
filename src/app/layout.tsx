import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Script from 'next/script'
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1832240871127078');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1832240871127078&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
