import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — RingCatch',
  description: 'How ringcatch.ai uses cookies and similar technologies.',
}

export default function CookiesPage() {
  return (
    <section className="legal-page">
      <div className="legal-content">
        <Link href="/" className="legal-back">&larr; Back to home</Link>

        <h1>Cookie Policy</h1>
        <p className="legal-updated">Last updated: [DATE]</p>

        <p>This policy explains how ringcatch.ai uses cookies and similar technologies.</p>

        <h2>Placeholder</h2>
        <p>[PLACEHOLDER &mdash; Full cookie policy to be drafted. This page will list all cookies used on the site by category (strictly necessary, analytics, marketing), explain what each does, and describe how to accept or reject non-essential cookies.]</p>

        <h2>Contact</h2>
        <p>For questions about our use of cookies, contact us at <a href="mailto:richard@coastlineautomation.co.uk">richard@coastlineautomation.co.uk</a></p>
      </div>
    </section>
  )
}
