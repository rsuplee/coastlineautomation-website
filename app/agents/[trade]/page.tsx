'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import GsapInit from '@/components/GsapInit'
import PainSlideshow from '@/components/PainSlideshow'
import { tradeAgents } from '@/lib/agent-config'
import type { Feature } from '@/lib/agent-config'
import { openCalendly } from '@/lib/calendly'
import { demoAgents } from '@/lib/demo-config'
import DemoWidget from '@/components/DemoWidget'

/* ─── SVG icon renderer ─── */

function FeatureIcon({ feature }: { feature: Feature }) {
  const p = feature.iconPath

  // Clock icon (24/7)
  if (p === 'CLOCK') {
    return (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }

  // Envelope icon (lead summaries)
  if (p === 'ENVELOPE') {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  }

  // Shield icon (fully managed)
  if (p === 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z') {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }

  // Calendar icon (live in 7 days)
  if (p === 'CALENDAR') {
    return (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  }

  // Pulse icon (natural conversations)
  if (p === 'PULSE') {
    return (
      <svg viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  }

  // Roof icon (roofer trade)
  if (p === 'ROOF') {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M3 21h18l-9-18z" />
        <line x1="12" y1="9" x2="12" y2="15" />
      </svg>
    )
  }

  // Building icon (builder trade)
  if (p === 'BUILDING') {
    return (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="2" y1="22" x2="22" y2="22" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="14" x2="9" y2="14.01" />
        <line x1="15" y1="14" x2="15" y2="14.01" />
        <rect x="10" y="18" width="4" height="4" />
      </svg>
    )
  }

  // Default: render path directly (wrench, bolt, etc.)
  return (
    <svg viewBox="0 0 24 24">
      <path d={p} />
    </svg>
  )
}

/* ─── Agent Page ─── */

export default function AgentPage() {
  const params = useParams()
  const trade = params.trade as string
  const config = tradeAgents[trade]
  const demoAgent = demoAgents[trade]

  if (!config) {
    return (
      <section className="section section-dark" style={{ textAlign: 'center', paddingTop: '160px' }}>
        <h1 className="section-heading">Agent not found</h1>
        <p className="section-sub" style={{ margin: '20px auto 0' }}>
          We don&apos;t have an agent page for &ldquo;{trade}&rdquo;. Check out our{' '}
          <Link href="/#agents" style={{ color: '#e8a550' }}>
            available agents
          </Link>
          .
        </p>
      </section>
    )
  }

  const { hero, painSlides, painFooter, howItWorksSub, step2, smsStep3Desc, demoTimeline, featuresHeading, features, pricingSub, ctaSub } = config

  return (
    <>
      <GsapInit />
      <PainSlideshow />

      {/* ==================== 1. AGENT HERO ==================== */}
      <section className="agent-hero">
        <div className="agent-hero-bg"></div>
        <div className="agent-hero-overlay"></div>
        <div className="hero-grain"></div>

        <div className={`agent-hero-inner${demoAgent ? '' : ' no-demo'}`}>
          <div className="agent-hero-content">
            <p className="eyebrow hero-fade">{hero.eyebrow}</p>
            <h1 className="hero-headline hero-fade">
              {hero.headlineLine1}
              <br />
              <em>{hero.headlineEm}</em>
            </h1>
            <p
              className="hero-tagline hero-fade"
              dangerouslySetInnerHTML={{ __html: hero.tagline }}
            />
            <div className="hero-actions hero-fade">
              <a href="#how-it-works" className="btn-ghost">How It Works →</a>
            </div>
          </div>

          {demoAgent && (
            <div className="agent-hero-demo hero-fade">
              <DemoWidget
                trade={trade}
                agentId={demoAgent.agentId}
                phoneNumber={demoAgent.phoneNumber}
                businessName={demoAgent.businessName}
              />
            </div>
          )}
        </div>
      </section>

      {/* ==================== 2. TRADE-SPECIFIC PAIN ==================== */}
      <section className="pain-section" id="pain">
        <div className="pain-stage">
          <p className="section-label accent-ember pain-label">Sound Familiar?</p>
          <div className="pain-slideshow">
            {painSlides.map((slide, i) => (
              <p
                key={i}
                className={`pain-slide${slide.className ? ` ${slide.className}` : ''}`}
                data-slide={i}
              >
                {slide.text}
              </p>
            ))}
          </div>
          <div className="pain-progress-bar">
            <div className="pain-progress-fill"></div>
          </div>
          <div className="pain-footer">
            <p className="pain-resolve">{painFooter.resolveText}</p>
            <div className="pain-bridge">
              <span className="pain-bridge-num">80%</span>
              <span className="pain-bridge-label">{painFooter.bridgeLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. HOW IT WORKS ==================== */}
      <section className="section section-dark" id="how-it-works">
        <div className="max-w-site">
          <p className="section-label reveal">How It Works</p>
          <h2 className="section-heading reveal">Three steps. Zero missed calls.</h2>
          <p className="section-sub reveal">{howItWorksSub}</p>

          <div className="steps-grid stagger-group">
            {/* Step 1 — identical across trades */}
            <div className="step-card stagger-item">
              <div className="step-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="step-num">01</div>
              <h3 className="step-title">Your phone forwards after 3&ndash;4 rings</h3>
              <p className="step-desc">
                If you&apos;re on a job and can&apos;t pick up, the call diverts to your RingCatch number. No hardware, no apps &mdash; just a simple call forward.
              </p>
            </div>

            {/* Step 2 — trade-specific */}
            <div className="step-card stagger-item">
              <div className="step-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div className="step-num">02</div>
              <h3 className="step-title">{step2.title}</h3>
              <p className="step-desc">{step2.desc}</p>
            </div>

            {/* Step 3 — trade-specific desc */}
            <div className="step-card stagger-item">
              <div className="step-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="step-num">03</div>
              <h3 className="step-title">You get an SMS with everything you need</h3>
              <p className="step-desc">{smsStep3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. DEMO SECTION ==================== */}
      <section className="section section-darker" id="demo">
        <div className="max-w-site">
          <p className="section-label reveal" style={{ textAlign: 'center' }}>See It in Action</p>
          <h2 className="section-heading reveal" style={{ textAlign: 'center', margin: '0 auto' }}>
            A missed call turned into a solid lead.
          </h2>
          <p className="section-sub reveal" style={{ textAlign: 'center', margin: '20px auto 0' }}>
            Here&apos;s what happens when a homeowner calls your number and you can&apos;t pick up.
          </p>

          <div className="demo-timeline reveal">
            {/* Timeline step 1 — caller */}
            <div className="demo-step">
              <div className="demo-step-marker">
                <div className="demo-step-dot"></div>
                <div className="demo-step-line"></div>
              </div>
              <div className="demo-step-content">
                <div className="demo-step-label">Incoming call</div>
                <div className="demo-step-card">
                  <p className="demo-caller">&ldquo;{demoTimeline.callerText}&rdquo;</p>
                  <span className="demo-tag">Homeowner</span>
                </div>
              </div>
            </div>

            {/* Timeline step 2 — agent */}
            <div className="demo-step">
              <div className="demo-step-marker">
                <div className="demo-step-dot dot-teal"></div>
                <div className="demo-step-line"></div>
              </div>
              <div className="demo-step-content">
                <div className="demo-step-label">Your agent responds</div>
                <div className="demo-step-card card-teal">
                  <p className="demo-agent">&ldquo;{demoTimeline.agentText}&rdquo;</p>
                  <span className="demo-tag tag-teal">RingCatch Agent</span>
                </div>
              </div>
            </div>

            {/* Timeline step 3 — caller details */}
            <div className="demo-step">
              <div className="demo-step-marker">
                <div className="demo-step-dot"></div>
                <div className="demo-step-line"></div>
              </div>
              <div className="demo-step-content">
                <div className="demo-step-label">Details captured</div>
                <div className="demo-step-card">
                  <p className="demo-caller">&ldquo;{demoTimeline.callerText2}&rdquo;</p>
                  <span className="demo-tag">Homeowner</span>
                </div>
              </div>
            </div>

            {/* Timeline step 4 — SMS */}
            <div className="demo-step">
              <div className="demo-step-marker">
                <div className="demo-step-dot dot-ember"></div>
              </div>
              <div className="demo-step-content">
                <div className="demo-step-label">You receive this SMS</div>
                <div className="demo-step-card card-sms">
                  <div className="sms-header">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    <span>New lead from RingCatch</span>
                  </div>
                  <div className="sms-body">
                    {demoTimeline.sms.map((field, i) => (
                      <div key={i} className="sms-row">
                        <strong>{field.label}:</strong> {field.value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. WHAT YOU GET ==================== */}
      <section className="section section-dark" id="features">
        <div className="max-w-site">
          <p className="section-label reveal">What You Get</p>
          <h2 className="section-heading reveal">{featuresHeading}</h2>

          <div className="features-grid stagger-group">
            {features.map((feat, i) => (
              <div key={i} className="feature-item stagger-item">
                <div className="feature-icon">
                  <FeatureIcon feature={feat} />
                </div>
                <div>
                  <h3 className="feature-title">{feat.title}</h3>
                  <p className="feature-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. PRICING TEASER ==================== */}
      <section className="section section-darker" id="pricing">
        <div className="max-w-site" style={{ textAlign: 'center' }}>
          <p className="section-label reveal">Pricing</p>
          <h2 className="section-heading reveal" style={{ margin: '0 auto' }}>
            One missed job pays for months of RingCatch.
          </h2>
          <p className="section-sub reveal" style={{ margin: '20px auto 0' }}>
            {pricingSub}
          </p>
          <div className="reveal" style={{ marginTop: '48px' }}>
            <a href="#" className="btn-gold" onClick={openCalendly}>Get a Quote</a>
          </div>
        </div>
      </section>

      {/* ==================== 7. CTA ==================== */}
      <section className="cta-section">
        <div className="max-w-site">
          <h2 className="cta-heading reveal">Ready to stop missing calls?</h2>
          <p className="cta-sub reveal">{ctaSub}</p>
          <div className="reveal" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn-gold" onClick={openCalendly}>Schedule a Call</a>
            <a href="#demo" className="btn-ghost" style={{ color: 'rgba(245,240,232,0.6)' }}>
              See the Demo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
