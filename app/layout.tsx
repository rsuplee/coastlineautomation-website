import type { Metadata } from 'next'
import Script from 'next/script'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import '../css/styles.css'
import '../css/pricing.css'

export const metadata: Metadata = {
  title: 'RingCatch — AI Phone Receptionist for Trade Businesses',
  description: 'Your AI phone receptionist answers every call, captures the details, and sends you a summary — so you can stay on the tools and live your life.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
        <CookieBanner />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
