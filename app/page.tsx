export default function HomePage() {
  return (
    <>
      {/* ==================== 1. HERO ==================== */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay-left"></div>
        <div className="hero-overlay-bottom"></div>
        <div className="hero-grain"></div>

        <div className="hero-content">
          <h1 className="hero-headline hero-fade">
            AI-powered tools built for your trade business
          </h1>
          <p className="hero-tagline hero-fade">
            We build bespoke AI solutions that catch the revenue falling through the cracks — missed calls, lost reviews, forgotten follow-ups.
          </p>
          <div className="hero-actions hero-fade">
            <a href="mailto:hello@coastlineautomation.co.uk" className="btn-primary">Get in touch</a>
          </div>
        </div>
      </section>

      {/* ==================== 2. WHAT WE BUILD ==================== */}
      <section className="section section-dark" id="how-it-works">
        <div className="max-w-site">
          <p className="section-label reveal">What We Build</p>
          <h2 className="section-heading reveal">AI tools that catch what you&apos;re missing.</h2>

          <div className="steps-grid stagger-group">
            <div className="step-card stagger-item">
              <div className="step-icon">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <h3 className="step-title">RingCatch</h3>
              <p className="step-desc">AI phone receptionist that answers missed calls, captures lead details, and texts them to you.</p>
              <a href="https://ringcatch.ai" className="agent-link" target="_blank" rel="noopener noreferrer">Learn more &rarr;</a>
            </div>

            <div className="step-card stagger-item">
              <div className="step-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 className="step-title">ReviewCatch</h3>
              <p className="step-desc">AI-powered Google review collection. Send review requests, draft responses, grow your reputation.</p>
              <a href="https://reviewcatch.ai" className="agent-link" target="_blank" rel="noopener noreferrer">Learn more &rarr;</a>
            </div>

            <div className="step-card stagger-item">
              <div className="step-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="step-title">Coming Soon</h3>
              <p className="step-desc">QuoteCatch, BookCatch, ReturnCatch — more tools on the way to help you catch what you&apos;re missing.</p>
            </div>
          </div>

          <p className="section-sub reveal" style={{ marginTop: '3rem', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Coastline Automation is the company behind the TradeCatch family of products. We also offer bespoke AI voice agent builds for businesses that need something custom.
          </p>
        </div>
      </section>
    </>
  )
}
