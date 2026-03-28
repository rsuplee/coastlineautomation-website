'use client'

import Link from 'next/link'
import { openCalendly } from '@/lib/calendly'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <img src="/images/logo.svg" alt="RingCatch" className="logo-icon" />
            <div className="logo-text">
              <span className="logo-name">RingCatch</span>
              <span className="logo-sub">by Coastline Automation</span>
            </div>
          </div>
          <p style={{ marginTop: 16 }}>Managed AI phone receptionists for trade businesses on the South Coast and beyond.</p>
        </div>

        <div className="footer-col">
          <h4>Agents</h4>
          <Link href="/agents/plumber">Plumber</Link>
          <Link href="/agents/electrician">Electrician</Link>
          <Link href="/agents/roofer">Roofer</Link>
          <Link href="/agents/builder">Builder</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>

        <div className="footer-col">
          <h4>Get Started</h4>
          <a href="#" onClick={openCalendly}>Schedule a Call</a>
          <a href="mailto:hello@ringcatch.ai">hello@ringcatch.ai</a>
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
        <span>Registered in England and Wales. Company No: [TO BE ADDED]. Registered Office: [TO BE ADDED].</span>
        <span>RingCatch is a product of Coastline Automation Ltd. <a href="mailto:hello@ringcatch.ai">hello@ringcatch.ai</a></span>
      </div>
    </footer>
  )
}
