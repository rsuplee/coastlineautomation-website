'use client'

import { useState } from 'react'
import FaqAccordion from '@/components/FaqAccordion'
import { openCalendly } from '@/lib/calendly'

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  const prices = {
    monthly: { core: 149, pro: 249, coreLabel: '£149', proLabel: '£249' },
    annual: { core: 119, pro: 199, coreLabel: '£119', proLabel: '£199' },
  }

  const p = prices[billing]

  return (
    <>
      <FaqAccordion />

      {/* ==================== 1. HERO ==================== */}
      <section className="pricing-hero">
        <div className="max-w-site">
          <p className="eyebrow">Pricing</p>
          <h1 className="pricing-headline">Simple, Transparent Pricing</h1>
          <p className="pricing-sub">No minimum term. Cancel anytime. No hidden costs.</p>
          <p className="pricing-bespoke-intro">Every RingCatch agent is custom-built around your business &mdash; your services, your pricing, your service areas, your terminology, your tone. Not a template with your name on it.</p>
        </div>
      </section>

      {/* ==================== 2. LAUNCH OFFER ==================== */}
      <section className="pricing-offer-section">
        <div className="max-w-site">
          <div className="launch-banner">
            <div className="launch-banner-icon">&#128640;</div>
            <div className="launch-banner-content">
              <h3 className="launch-banner-title">Launch Offer &mdash; First 2 Customers Only</h3>
              <p className="launch-banner-sub">50% off for 12 months. Full service. Full support. Just feedback and a short testimonial in return.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. BILLING TOGGLE + PRICING CARDS ==================== */}
      <section className="pricing-cards-section">
        <div className="max-w-site">

          {/* Toggle */}
          <div className="billing-toggle-wrap">
            <button
              className={`billing-toggle-btn ${billing === 'monthly' ? 'active' : ''}`}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              className={`billing-toggle-btn ${billing === 'annual' ? 'active' : ''}`}
              onClick={() => setBilling('annual')}
            >
              Annual
              <span className="billing-save-badge">Save 20%</span>
            </button>
          </div>

          <p className="billing-note">No minimum term. Cancel anytime.</p>

          <div className="pricing-cards pricing-cards-three">

            {/* Go — self-serve */}
            <div className="pricing-card pricing-card-go">
              <div className="pricing-card-header">
                <span className="pricing-self-serve-label">Self-serve</span>
                <h3 className="pricing-tier-name">RingCatch Go</h3>
                <div className="pricing-price-block">
                  <span className="pricing-price-current">&pound;79<span className="pricing-price-period">/mo</span></span>
                </div>
                <p className="pricing-setup-note">No setup fee</p>
              </div>
              <ul className="pricing-features">
                <li>Set up your own AI phone agent</li>
                <li>Choose from 12 professional voices</li>
                <li>AI builds your custom greeting</li>
                <li>24/7 call answering</li>
                <li>SMS + email lead delivery</li>
                <li>Self-serve dashboard</li>
              </ul>
              <a href="https://app.ringcatch.ai/auth/sign-up" className="btn-go-cta pricing-cta">Get Started</a>
            </div>

            {/* Core */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-tier-name">RingCatch Core</h3>
                <div className="pricing-price-block">
                  <span className="pricing-price-current">{p.coreLabel}<span className="pricing-price-period">/mo</span></span>
                </div>
                {billing === 'annual' && (
                  <p className="pricing-billed-note">Billed &pound;1,428/year</p>
                )}
                <div className="pricing-pilot-line">
                  <span className="pricing-pilot-label">Pilot price</span>
                  <span className="pricing-pilot-price">&pound;75/mo for 12 months</span>
                </div>
                <p className="pricing-setup-note"><s>&pound;499</s> setup &mdash; <strong>waived</strong></p>
              </div>
              <ul className="pricing-features">
                <li>24/7 AI call answering in your business name</li>
                <li>Per-business customisation (greeting, tone, data capture)</li>
                <li>SMS + email lead delivery within seconds</li>
                <li>Missed call follow-up callback (automatic, UK compliant)</li>
                <li>Monthly performance summary</li>
                <li>Script updates and prompt tuning</li>
                <li>System monitoring and uptime management</li>
                <li>Email/WhatsApp support</li>
              </ul>
              <a href="#" onClick={openCalendly} className="btn-primary pricing-cta">Book a Free Consultation</a>
            </div>

            {/* Pro */}
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-card-badge">Recommended</div>
              <div className="pricing-card-header">
                <h3 className="pricing-tier-name">RingCatch Pro</h3>
                <div className="pricing-price-block">
                  <span className="pricing-price-current">{p.proLabel}<span className="pricing-price-period">/mo</span></span>
                </div>
                {billing === 'annual' && (
                  <p className="pricing-billed-note">Billed &pound;2,388/year</p>
                )}
                <div className="pricing-pilot-line">
                  <span className="pricing-pilot-label">Pilot price</span>
                  <span className="pricing-pilot-price">&pound;125/mo for 12 months</span>
                </div>
                <p className="pricing-setup-note"><s>&pound;499</s> setup &mdash; <strong>waived</strong></p>
              </div>
              <p className="pricing-includes-label">Everything in Core, plus:</p>
              <ul className="pricing-features">
                <li>Proactive monthly optimisation (we review your calls and improve your agent)</li>
                <li>Workflow integration (calendar/CRM connections)</li>
                <li>WhatsApp lead delivery</li>
                <li>Website chat agent</li>
                <li>Priority setup (48-hour target)</li>
                <li>Quarterly business review call</li>
              </ul>
              <a href="#" onClick={openCalendly} className="btn-gold pricing-cta">Book a Free Consultation</a>
            </div>

            {/* Add-ons panel */}
            <div className="pricing-card pricing-card-addons">
              <div className="pricing-card-header">
                <h3 className="pricing-tier-name">Add-ons</h3>
                <p className="addons-panel-sub">Bolt on to any plan</p>
              </div>
              <table className="addons-table">
                <tbody>
                  <tr>
                    <td className="addons-table-name">WhatsApp Lead Delivery</td>
                    <td className="addons-table-price"><span className="addons-table-included">In Pro</span><br /><span className="addons-table-alt">&pound;29/mo on Core</span></td>
                  </tr>
                  <tr>
                    <td className="addons-table-name">Website Chat Agent<br /><span className="addons-table-alt">AI chat widget on your website &mdash; same RingCatch brain, captures leads 24/7 via text conversation.</span></td>
                    <td className="addons-table-price"><span className="addons-table-included">In Pro</span><br /><span className="addons-table-alt">&pound;29/mo on Core</span></td>
                  </tr>
                  <tr>
                    <td className="addons-table-name">Additional Phone Line<br /><span className="addons-table-alt">Fully configured second AI agent with its own number, custom knowledge base, and dedicated workflows.</span><br /><span className="addons-table-alt"><s>&pound;499</s> build &mdash; <strong style={{ color: 'var(--light-teal)' }}>waived</strong></span></td>
                    <td className="addons-table-price">&pound;39/mo</td>
                  </tr>
                  <tr>
                    <td className="addons-table-name">Outbound Appointment Reminders<br /><span className="addons-table-alt">Automated call reminders to reduce no-shows</span></td>
                    <td className="addons-table-price">&pound;49/mo</td>
                  </tr>
                  <tr>
                    <td className="addons-table-name">Custom Voice Clone<br /><span className="addons-table-alt">Your agent speaks in your voice &mdash; cloned from a short recording. Your callers hear you, even when you can&apos;t pick up.</span><br /><span className="addons-table-alt"><s>&pound;199</s> setup &mdash; <strong style={{ color: 'var(--light-teal)' }}>waived</strong></span></td>
                    <td className="addons-table-price">&pound;59/mo</td>
                  </tr>
                </tbody>
              </table>
              <a href="#" onClick={openCalendly} className="btn-ghost-teal pricing-cta">Ask Us About Add-ons</a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. WHAT MISSED CALLS COST ==================== */}
      <section className="section section-darker" id="missed-call-cost">
        <div className="max-w-site">
          <p className="section-label" style={{ textAlign: 'center' }}>The Real Cost</p>
          <h2 className="section-heading" style={{ textAlign: 'center', margin: '0 auto' }}>What missed calls are really costing you</h2>
          <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto 48px' }}>You&apos;re not spending &pound;149 on RingCatch. You&apos;re losing thousands a month without it.</p>

          <div className="roi-cards">
            <div className="roi-card">
              <div className="roi-trade-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17h2v5H3zM19 17h2v5h-2z"/><path d="M6 7V4a1 1 0 011-1h10a1 1 0 011 1v3"/><path d="M4 7h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z"/></svg>
              </div>
              <h4 className="roi-trade">Plumber</h4>
              <div className="roi-job-value">&pound;600<span>avg job</span></div>
              <div className="roi-lost">Miss 1 job/month = <strong>&pound;600 lost</strong></div>
              <div className="roi-return"><span className="roi-multiplier">4x</span> return on RingCatch</div>
            </div>

            <div className="roi-card">
              <div className="roi-trade-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h4 className="roi-trade">Electrician</h4>
              <div className="roi-job-value">&pound;450<span>avg job</span></div>
              <div className="roi-lost">Miss 1 job/month = <strong>&pound;450 lost</strong></div>
              <div className="roi-return"><span className="roi-multiplier">3x</span> return on RingCatch</div>
            </div>

            <div className="roi-card">
              <div className="roi-trade-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18l-9-18z"/></svg>
              </div>
              <h4 className="roi-trade">Roofer</h4>
              <div className="roi-job-value">&pound;1,500<span>avg job</span></div>
              <div className="roi-lost">Miss 1 job/month = <strong>&pound;1,500 lost</strong></div>
              <div className="roi-return"><span className="roi-multiplier">10x</span> return on RingCatch</div>
            </div>

            <div className="roi-card">
              <div className="roi-trade-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M12 7V3"/><path d="M2 7l10-4 10 4"/></svg>
              </div>
              <h4 className="roi-trade">Builder</h4>
              <div className="roi-job-value">&pound;2,500<span>avg job</span></div>
              <div className="roi-lost">Miss 1 job/month = <strong>&pound;2,500 lost</strong></div>
              <div className="roi-return"><span className="roi-multiplier">17x</span> return on RingCatch</div>
            </div>

            <div className="roi-card">
              <div className="roi-trade-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M17 9v2M7 9v2"/></svg>
              </div>
              <h4 className="roi-trade">HVAC Engineer</h4>
              <div className="roi-job-value">&pound;800<span>avg job</span></div>
              <div className="roi-lost">Miss 1 job/month = <strong>&pound;800 lost</strong></div>
              <div className="roi-return"><span className="roi-multiplier">5x</span> return on RingCatch</div>
            </div>
          </div>

          <p className="roi-punchline">One captured job pays for RingCatch many times over. Most of our customers see that in the first week.</p>
        </div>
      </section>

      {/* ==================== 5. BESPOKE BUILD ==================== */}
      <section className="pricing-bespoke-section">
        <div className="max-w-site">
          <div className="bespoke-card">
            <div className="bespoke-card-left">
              <p className="eyebrow" style={{ marginBottom: 12 }}>Bespoke Agent Build</p>
              <div className="bespoke-price-block">
                <span className="bespoke-price-old">&pound;499</span>
                <span className="bespoke-price-free">Free</span>
                <span className="pricing-intro-label">Launch offer</span>
              </div>
              <p className="bespoke-desc">We build your agent from scratch around your business &mdash; your services, your pricing, your areas, your terminology. Not a template. Not a chatbot. A bespoke AI receptionist that actually knows your business.</p>
            </div>
            <div className="bespoke-card-right">
              <h4 className="bespoke-includes-title">What&apos;s included in the build</h4>
              <ul className="bespoke-includes-list">
                <li>Business discovery session</li>
                <li>Custom voice agent configuration</li>
                <li>Service, pricing, area &amp; FAQ knowledge base</li>
                <li>Workflow setup (SMS, email, CRM)</li>
                <li>Full testing and go-live support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. HOW RINGCATCH COMPARES ==================== */}
      <section className="section section-darker" id="compare-alternatives">
        <div className="max-w-site">
          <p className="section-label" style={{ textAlign: 'center' }}>How RingCatch Compares</p>
          <h2 className="section-heading" style={{ textAlign: 'center', margin: '0 auto' }}>The real alternatives &mdash; and what they actually cost</h2>
          <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto 48px' }}>Annual cost comparison for a typical trade business.</p>

          <div className="alt-bars">
            <div className="alt-bar-row">
              <div className="alt-bar-label">
                <span className="alt-bar-name">Do nothing</span>
                <span className="alt-bar-detail">&pound;0 &mdash; but &pound;7,200+/yr in lost jobs</span>
              </div>
              <div className="alt-bar-track"><div className="alt-bar-fill alt-bar-danger" style={{ width: '100%' }}></div></div>
              <span className="alt-bar-cost">&pound;7,200+ lost</span>
            </div>

            <div className="alt-bar-row">
              <div className="alt-bar-label">
                <span className="alt-bar-name">Budget answering service</span>
                <span className="alt-bar-detail">Takes a name &amp; number, Mon&ndash;Fri only</span>
              </div>
              <div className="alt-bar-track"><div className="alt-bar-fill alt-bar-muted" style={{ width: '8%' }}></div></div>
              <span className="alt-bar-cost">&pound;600&ndash;1,200/yr</span>
            </div>

            <div className="alt-bar-row">
              <div className="alt-bar-label">
                <span className="alt-bar-name">ARROW (AI competitor)</span>
                <span className="alt-bar-detail">No callback, template-based</span>
              </div>
              <div className="alt-bar-track"><div className="alt-bar-fill alt-bar-muted" style={{ width: '10%' }}></div></div>
              <span className="alt-bar-cost">&pound;1,188/yr</span>
            </div>

            <div className="alt-bar-row alt-bar-highlight">
              <div className="alt-bar-label">
                <span className="alt-bar-name">RingCatch Core</span>
                <span className="alt-bar-detail">Bespoke, 24/7, structured leads, missed call callback</span>
              </div>
              <div className="alt-bar-track"><div className="alt-bar-fill alt-bar-brand" style={{ width: '14%' }}></div></div>
              <span className="alt-bar-cost">&pound;1,428/yr</span>
            </div>

            <div className="alt-bar-row">
              <div className="alt-bar-label">
                <span className="alt-bar-name">Moneypenny</span>
                <span className="alt-bar-detail">Just takes a message</span>
              </div>
              <div className="alt-bar-track"><div className="alt-bar-fill alt-bar-muted" style={{ width: '22%' }}></div></div>
              <span className="alt-bar-cost">&pound;2,400&ndash;4,800/yr</span>
            </div>

            <div className="alt-bar-row alt-bar-highlight">
              <div className="alt-bar-label">
                <span className="alt-bar-name">RingCatch Pro</span>
                <span className="alt-bar-detail">Everything + proactive optimisation</span>
              </div>
              <div className="alt-bar-track"><div className="alt-bar-fill alt-bar-brand" style={{ width: '18%' }}></div></div>
              <span className="alt-bar-cost">&pound;2,388/yr</span>
            </div>

            <div className="alt-bar-row">
              <div className="alt-bar-label">
                <span className="alt-bar-name">Part-time receptionist</span>
                <span className="alt-bar-detail">~24 hrs/week, no evenings/weekends</span>
              </div>
              <div className="alt-bar-track"><div className="alt-bar-fill alt-bar-muted" style={{ width: '55%' }}></div></div>
              <span className="alt-bar-cost">~&pound;16,500/yr</span>
            </div>

            <div className="alt-bar-row">
              <div className="alt-bar-label">
                <span className="alt-bar-name">Full-time receptionist</span>
                <span className="alt-bar-detail">9&ndash;5 weekdays, minus holidays</span>
              </div>
              <div className="alt-bar-track"><div className="alt-bar-fill alt-bar-muted" style={{ width: '100%' }}></div></div>
              <span className="alt-bar-cost">&pound;30,000+/yr</span>
            </div>
          </div>

          {/* Core vs Pro feature comparison */}
          <div className="plan-compare-section">
            <h3 className="plan-compare-title">Go vs Core vs Pro &mdash; feature breakdown</h3>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Go</th>
                    <th>Core</th>
                    <th className="comparison-highlight">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>24/7 AI call answering</td><td className="check">&#x2713;</td><td className="check">&#x2713;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                  <tr><td>Self-serve setup</td><td className="check">&#x2713;</td><td className="cross">&#x2717;</td><td className="cross comparison-highlight">&#x2717;</td></tr>
                  <tr><td>SMS + email lead delivery</td><td className="check">&#x2713;</td><td className="check">&#x2713;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                  <tr><td>12 professional voice options</td><td className="check">&#x2713;</td><td className="check">&#x2713;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                  <tr><td>Self-serve dashboard</td><td className="check">&#x2713;</td><td className="cross">&#x2717;</td><td className="cross comparison-highlight">&#x2717;</td></tr>
                  <tr><td>Bespoke agent customisation</td><td className="cross">&#x2717;</td><td className="check">&#x2713;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                  <tr><td>Missed call follow-up callback</td><td className="cross">&#x2717;</td><td className="check">&#x2713;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                  <tr><td>Script updates &amp; prompt tuning</td><td className="cross">&#x2717;</td><td className="check">&#x2713;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                  <tr><td>System monitoring &amp; uptime</td><td className="cross">&#x2717;</td><td className="check">&#x2713;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                  <tr><td>Proactive monthly optimisation</td><td className="cross">&#x2717;</td><td className="cross">&#x2717;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                  <tr><td>Workflow integration (calendar/CRM)</td><td className="cross">&#x2717;</td><td className="cross">&#x2717;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                  <tr><td>WhatsApp lead delivery</td><td className="cross">&#x2717;</td><td className="cross">&#x2717;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                  <tr><td>Quarterly business review call</td><td className="cross">&#x2717;</td><td className="cross">&#x2717;</td><td className="check comparison-highlight">&#x2713;</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. FAQ ==================== */}
      <section className="section section-dark" id="pricing-faq">
        <div className="max-w-site">
          <p className="section-label" style={{ textAlign: 'center' }}>FAQ</p>
          <h2 className="section-heading" style={{ textAlign: 'center', margin: '0 auto' }}>Got questions? Fair enough.</h2>

          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                Is there a setup fee?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">The bespoke agent build is normally &pound;499 &mdash; that covers a full business discovery session, custom AI configuration, workflow setup, and testing. Right now, we&apos;re waiving it entirely as a launch offer for all customers.</div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                What&apos;s the minimum commitment?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">There isn&apos;t one. No contract, no minimum term. If RingCatch isn&apos;t working for you, we turn it off. We&apos;re that confident it pays for itself.</div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                What if callers know it&apos;s AI?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">The agent introduces itself as a virtual assistant. Most callers engage naturally and the conversation feels like speaking to a helpful receptionist.</div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                What happens if the system goes down?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">Calls go to your normal voicemail &mdash; exactly as before. We monitor uptime and resolve issues fast.</div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                How quickly can I get started?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">Core: within 7 days. Pro: 48-hour priority setup target.</div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                Is one captured job worth &pound;149/month?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">One boiler repair, rewire, or roofing job typically pays &pound;300&ndash;&pound;2,000+. If RingCatch catches even one extra job a month, it&apos;s paid for itself many times over.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 8. BOTTOM CTA ==================== */}
      <section className="cta-section">
        <div className="max-w-site">
          <h2 className="cta-heading">Ready to stop missing calls?</h2>
          <p className="cta-sub">Book a free consultation. We&apos;ll walk you through the right plan for your trade and get you set up.</p>
          <a href="#" onClick={openCalendly} className="btn-gold">Book a Free Consultation</a>
        </div>
      </section>
    </>
  )
}
