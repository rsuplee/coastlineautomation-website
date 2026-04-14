'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-text">
              <span className="logo-name">Coastline Automation</span>
            </div>
          </div>
          <p style={{ marginTop: 16 }}>Bespoke AI-powered tools built for UK trade businesses.</p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <a href="mailto:hello@coastlineautomation.co.uk">hello@coastlineautomation.co.uk</a>
        </div>
      </div>

      <div className="footer-legal-links">
        <Link href="/privacy">Privacy Policy</Link>
        <span className="footer-legal-dot">&middot;</span>
        <Link href="/cookies">Cookie Policy</Link>
        <span className="footer-legal-dot">&middot;</span>
        <Link href="/terms">Terms of Use</Link>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 Coastline Automation Ltd. All rights reserved.</span>
        <span>Registered in England and Wales. Company No: 17046438. Registered Office: 11 Ashdown Ave, Saltdean, BN2 8AH.</span>
        <span>ICO Registration: C1902158. <a href="mailto:hello@coastlineautomation.co.uk">hello@coastlineautomation.co.uk</a></span>
      </div>
    </footer>
  )
}
