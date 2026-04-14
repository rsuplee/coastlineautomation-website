import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import '../css/styles.css'
import '../css/company.css'

export const metadata: Metadata = {
  title: 'Coastline Automation — Bespoke AI Tools for UK Trade Businesses',
  description: 'Bespoke AI-powered tools built for UK trade businesses. From AI phone receptionists to review management — we build it, you benefit.',
  openGraph: {
    title: 'Coastline Automation — Bespoke AI Tools for UK Trade Businesses',
    description: 'Bespoke AI-powered tools built for UK trade businesses. From AI phone receptionists to review management — we build it, you benefit.',
    siteName: 'Coastline Automation',
  },
  twitter: {
    title: 'Coastline Automation — Bespoke AI Tools for UK Trade Businesses',
    description: 'Bespoke AI-powered tools built for UK trade businesses. From AI phone receptionists to review management — we build it, you benefit.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
