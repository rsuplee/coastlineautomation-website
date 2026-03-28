import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Terms of Use — RingCatch',
  description: 'Terms governing your use of the ringcatch.ai website operated by Coastline Automation Ltd.',
}

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="legal-content">
        <Link href="/" className="legal-back">&larr; Back to home</Link>

        <h1>Website Terms of Use</h1>
        <p className="legal-updated">Last updated: [DATE]</p>

        <p>These terms govern your use of the ringcatch.ai website operated by Coastline Automation Ltd.</p>

        <h2>Placeholder</h2>
        <p>[PLACEHOLDER &mdash; Full terms to be drafted by solicitor. This page will cover: acceptable use, intellectual property, limitation of liability, third-party links, governing law (England and Wales), and changes to these terms.]</p>

        <h2>Company Information</h2>
        <p>
          Coastline Automation Ltd<br />
          Registered in England and Wales<br />
          Company No: [TO BE ADDED]<br />
          Registered Office: [TO BE ADDED]<br />
          Email: <a href="mailto:richard@coastlineautomation.co.uk">richard@coastlineautomation.co.uk</a>
        </p>
      </div>
    </section>
  )
}
