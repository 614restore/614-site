import Script from 'next/script'

// Off the Page's own Meta Pixel, only on the Off the Page pages. The 614 Restore pixel
// (root layout) also loads fbq; the loader skips itself if fbq exists, so either can run first.
// trackSingle keeps each pixel's PageView separate.
const OTP_PIXEL_ID = '29901191766139424'

export default function OffThePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script id="otp-meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${OTP_PIXEL_ID}');
fbq('trackSingle', '${OTP_PIXEL_ID}', 'PageView');`}
      </Script>
    </>
  )
}
