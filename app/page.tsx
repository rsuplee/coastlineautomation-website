'use client'

import Link from 'next/link'
import GsapInit from '@/components/GsapInit'
import PainSlideshow from '@/components/PainSlideshow'
import { openCalendly } from '@/lib/calendly'
import FaqAccordion from '@/components/FaqAccordion'

export default function HomePage() {
  return (
    <>
      <GsapInit />
      <PainSlideshow />
      <FaqAccordion />

      {/* ==================== 1. HERO ==================== */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay-left"></div>
        <div className="hero-overlay-bottom"></div>
        <div className="hero-grain"></div>

        <div className="hero-content">
          <p className="eyebrow hero-fade">An AI Receptionist Built Around Your Business</p>
          <p className="eyebrow hero-fade">Custom-trained for your trade, your services, and your patch.</p>
          <h1 className="hero-headline hero-fade">
            Never miss a lead.<br />
            <em>Never miss a wave.</em>
          </h1>
          <p className="hero-tagline hero-fade">
            Your AI phone receptionist answers every call, captures the details, and sends you a summary — so you can <strong>stay on the tools</strong> and <strong>live your life</strong>.
          </p>
          <div className="hero-actions hero-fade">
            <a href="#" className="btn-primary" onClick={openCalendly}>Schedule a Call</a>
            <Link href="/#agents" className="btn-ghost">Explore Our Agents</Link>
          </div>
        </div>

        <div className="hero-bottom hero-fade" style={{ opacity: 0 }}>
          <div className="hero-stat-group">
            <div className="stat">
              <div className="stat-num">24/7</div>
              <div className="stat-label">Agents Running</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-num">0</div>
              <div className="stat-label">Missed Calls</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-num">0</div>
              <div className="stat-label">Missed Waves</div>
            </div>
          </div>
          <div className="scroll-hint">
            <div className="scroll-line"></div>
            <span className="scroll-label">Scroll</span>
          </div>
        </div>
      </section>

      {/* ==================== 2. PAIN / PROBLEM ==================== */}
      <section className="pain-section" id="pain">
        <div className="pain-stage">
          <p className="section-label accent-ember pain-label">The Problem</p>
          <div className="pain-slideshow">
            <p className="pain-slide" data-slide="0">You&apos;re on the tools.</p>
            <p className="pain-slide" data-slide="1">Your phone rings.</p>
            <p className="pain-slide" data-slide="2">You can&apos;t pick up.</p>
            <p className="pain-slide dim" data-slide="3">They don&apos;t leave a message.</p>
            <p className="pain-slide dim" data-slide="4">They call someone else.</p>
            <p className="pain-slide ember" data-slide="5">That job&apos;s gone.</p>
          </div>
          <div className="pain-progress-bar"><div className="pain-progress-fill"></div></div>
          <div className="pain-footer">
            <p className="pain-resolve">RingCatch makes sure this never happens.</p>
            <div className="pain-bridge">
              <span className="pain-bridge-num">80%</span>
              <span className="pain-bridge-label">of callers won&apos;t leave a voicemail — they&apos;ll just ring the next person</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. HOW IT WORKS ==================== */}
      <section className="section section-dark" id="how-it-works">
        <div className="max-w-site">
          <p className="section-label reveal">How It Works</p>
          <h2 className="section-heading reveal">Three steps. Zero missed calls.</h2>
          <p className="section-sub reveal">No apps to learn. No tech to manage. Just more leads landing in your pocket.</p>

          <div className="steps-grid stagger-group">
            <div className="step-card stagger-item">
              <div className="step-icon">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div className="step-num">01</div>
              <h3 className="step-title">Your phone forwards after 3–4 rings</h3>
              <p className="step-desc">If you can&apos;t pick up, the call diverts to your RingCatch number automatically. No hardware, no apps — just a simple call forward from your existing phone.</p>
            </div>

            <div className="step-card stagger-item">
              <div className="step-icon">
                <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              </div>
              <div className="step-num">02</div>
              <h3 className="step-title">Your AI agent has a natural conversation</h3>
              <p className="step-desc">Your RingCatch agent answers like a real receptionist — friendly, professional, trained for your trade. It asks the right questions and captures every detail.</p>
            </div>

            <div className="step-card stagger-item">
              <div className="step-icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="step-num">03</div>
              <h3 className="step-title">You get an SMS and email with everything</h3>
              <p className="step-desc">Within seconds, you receive a clean summary: caller name, number, what they need, and when they want it done. Call them back informed, on your terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. MEET THE AGENTS ==================== */}
      <section className="section section-darker" id="agents">
        <div className="max-w-site">
          <p className="section-label reveal">Meet the Agents</p>
          <h2 className="section-heading reveal">AI receptionists trained for your trade.</h2>
          <p className="section-sub reveal">Each RingCatch agent is purpose-built for a specific trade. It knows the terminology, asks the right questions, and captures exactly what you need to quote the job.</p>

          <div className="agents-grid stagger-group">
            <div className="agent-card stagger-item">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24"><path d="M3 17h2v5H3zM19 17h2v5h-2z"/><path d="M6 7V4a1 1 0 011-1h10a1 1 0 011 1v3"/><path d="M4 7h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z"/><circle cx="8" cy="12" r="1"/><circle cx="16" cy="12" r="1"/></svg>
              </div>
              <h3 className="agent-name">Plumber Agent</h3>
              <p className="agent-tagline">Captures leak details, boiler types, and urgency — so you can quote before the other plumber even calls back.</p>
              <Link href="/agents/plumber" className="agent-link">Learn more &rarr;</Link>
            </div>

            <div className="agent-card stagger-item">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="agent-name">Electrician Agent</h3>
              <p className="agent-tagline">Knows consumer units from sockets. Gets the job details right first time, every time.</p>
              <Link href="/agents/electrician" className="agent-link">Learn more &rarr;</Link>
            </div>

            <div className="agent-card stagger-item">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24"><path d="M3 21h18l-9-18z"/><line x1="12" y1="9" x2="12" y2="15"/></svg>
              </div>
              <h3 className="agent-name">Roofer Agent</h3>
              <p className="agent-tagline">Flat roof, pitched roof, emergency leak — your agent knows the questions to ask before you climb the ladder.</p>
              <Link href="/agents/roofer" className="agent-link">Learn more &rarr;</Link>
            </div>

            <div className="agent-card stagger-item">
              <div className="agent-icon">
                <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M12 7V3"/><path d="M2 7l10-4 10 4"/></svg>
              </div>
              <h3 className="agent-name">Builder Agent</h3>
              <p className="agent-tagline">Extensions, renovations, new builds — your agent captures scope and timelines so you can plan ahead.</p>
              <Link href="/agents/builder" className="agent-link">Learn more &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. WHAT YOU GET ==================== */}
      <section className="section section-dark" id="features">
        <div className="max-w-site">
          <p className="section-label reveal">What You Get</p>
          <h2 className="section-heading reveal">Everything you need. Nothing you don&apos;t.</h2>

          <div className="features-grid stagger-group">
            <div className="feature-item stagger-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h3 className="feature-title">24/7 call answering</h3>
                <p className="feature-desc">Evenings, weekends, bank holidays — your agent never clocks off. Every call gets answered, every lead gets captured.</p>
              </div>
            </div>

            <div className="feature-item stagger-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <h3 className="feature-title">Structured lead data</h3>
                <p className="feature-desc">Every lead arrives as a clean SMS and email summary — name, number, what they need, and when. No garbled voicemails.</p>
              </div>
            </div>

            <div className="feature-item stagger-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h3 className="feature-title">Fully managed service</h3>
                <p className="feature-desc">We handle everything — setup, training your agent, updates, and support. You don&apos;t lift a finger.</p>
              </div>
            </div>

            <div className="feature-item stagger-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div>
                <h3 className="feature-title">Set up in around 7 days</h3>
                <p className="feature-desc">From sign-up to live calls in about a week. We train your agent on your trade and your business — then you&apos;re good to go.</p>
              </div>
            </div>

            <div className="feature-item stagger-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <div>
                <h3 className="feature-title">No tech skills needed</h3>
                <p className="feature-desc">If you can forward a phone call, you can use RingCatch. That&apos;s genuinely all the &ldquo;tech&rdquo; involved on your end.</p>
              </div>
            </div>

            <div className="feature-item stagger-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div>
                <h3 className="feature-title">Calls that sound natural</h3>
                <p className="feature-desc">Your agent doesn&apos;t sound like a robot reading a script. It has a genuine conversation, handles curveballs, and sounds like someone on your team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. FAQ ==================== */}
      <section className="section section-darker" id="faq">
        <div className="max-w-site">
          <p className="section-label reveal" style={{ textAlign: 'center' }}>FAQ</p>
          <h2 className="section-heading reveal" style={{ textAlign: 'center', margin: '0 auto' }}>Got questions? Fair enough.</h2>

          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                Will callers know they&apos;re talking to AI?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">Most won&apos;t notice a thing. Your RingCatch agent uses natural-sounding speech, understands context, and handles real conversations — not robotic menus. It&apos;s trained specifically for your trade, so it asks the right questions and sounds like someone who knows what they&apos;re talking about.</div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                What happens if the system goes down?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">We&apos;ve built RingCatch on infrastructure that runs 24/7 with redundancy baked in. In the very unlikely event of downtime, calls fall back to your phone as normal — you&apos;d just answer them yourself. But honestly, this almost never happens.</div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                Can&apos;t I just use voicemail?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">You can — but most people don&apos;t leave voicemails anymore. They hang up and call the next person on the list. RingCatch actually answers the call, has a conversation, and captures everything. It&apos;s the difference between a missed opportunity and a solid lead waiting in your inbox.</div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                How long does setup take?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">About a week from start to finish. We spend that time training your agent on your specific trade, your services, and how you like things handled. Once it&apos;s live, you just set up a call forward on your phone — that takes about two minutes.</div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                Is my data safe?
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">Absolutely. All call data is encrypted and stored securely. We don&apos;t sell your data or your customers&apos; data to anyone. RingCatch is a UK-based service and we take data protection seriously — your information stays between you and us.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. RINGCATCH GO CTA ==================== */}
      <section className="go-cta-section">
        <div className="max-w-site">
          <h2 className="go-cta-heading reveal">Set up RingCatch Go today</h2>
          <p className="go-cta-sub reveal">Get your AI phone receptionist live in minutes &mdash; no consultation needed</p>
          <div className="go-cta-bullets reveal">
            <div className="go-cta-bullet">
              <span className="go-cta-check">&#x2713;</span>
              <span>Choose your trade, customise your greeting</span>
            </div>
            <div className="go-cta-bullet">
              <span className="go-cta-check">&#x2713;</span>
              <span>AI builds your perfect phone agent</span>
            </div>
            <div className="go-cta-bullet">
              <span className="go-cta-check">&#x2713;</span>
              <span>Live and answering calls in under 10 minutes</span>
            </div>
          </div>
          <a href="https://app.ringcatch.ai/auth/sign-up" className="btn-go-cta reveal">Start for &pound;79/month</a>
          <p className="go-cta-fine reveal">No setup fee. Cancel any time. 14-day money-back guarantee.</p>
        </div>
      </section>

      {/* ==================== 8. CONSULTATION CTA ==================== */}
      <section className="cta-section">
        <div className="max-w-site">
          <h2 className="cta-heading reveal">Book your free 20-minute consultation</h2>
          <p className="cta-sub reveal">We&apos;ll walk through how RingCatch works for your trade, answer your questions, and get you set up if it&apos;s a good fit. No pressure, no hard sell.</p>
          <a href="#" className="btn-gold reveal" onClick={openCalendly}>Schedule a Call</a>
        </div>
      </section>
    </>
  )
}
