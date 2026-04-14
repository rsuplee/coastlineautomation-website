export default function HomePage() {
  return (
    <div className="ca-page">
      {/* ==================== HERO ==================== */}
      <section className="ca-hero">
        <div className="max-w-site">
          <h1 className="ca-hero-headline">Building AI tools that work for real businesses</h1>
          <p className="ca-hero-sub">
            Coastline Automation builds practical AI products for UK trade businesses — and offers bespoke AI consulting for companies that need something custom.
          </p>
          <div className="ca-hero-actions">
            <a href="https://tradecatch.ai" className="ca-btn ca-btn-primary" target="_blank" rel="noopener noreferrer">Explore TradeCatch</a>
            <a href="#contact" className="ca-btn ca-btn-outline">Talk to us</a>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT / FOUNDER ==================== */}
      <section className="ca-section" id="about">
        <div className="max-w-site">
          <p className="ca-label">The Founder</p>
          <h2 className="ca-heading">Built by someone who&apos;s shipped products at scale</h2>
          <div className="ca-founder-content">
            <div className="ca-founder-bio">
              <p>
                Rich Suplee launched Alexa at Amazon UK and led senior product at Xero — two companies that transformed how millions of people use technology every day. He moved to the South Coast of England and founded Coastline Automation to build AI tools that solve real problems for real businesses.
              </p>
              <p>
                Every product is built in-house using AI-assisted development. No agency, no outsourced dev team. Rich understands every piece of the system because he built every piece of the system.
              </p>
            </div>
            <div className="ca-credentials">
              <div className="ca-credential-card">
                <span className="ca-credential-company">Amazon</span>
                <span className="ca-credential-role">Launched Alexa UK</span>
              </div>
              <div className="ca-credential-card">
                <span className="ca-credential-company">Xero</span>
                <span className="ca-credential-role">Senior Product</span>
              </div>
              <div className="ca-credential-card">
                <span className="ca-credential-company">Coastline Automation</span>
                <span className="ca-credential-role">Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS ==================== */}
      <section className="ca-section ca-section-alt" id="products">
        <div className="max-w-site">
          <p className="ca-label">Products</p>
          <h2 className="ca-heading">The TradeCatch platform</h2>
          <p className="ca-intro">
            TradeCatch is a family of AI-powered tools — each one built to catch the revenue that falls through the cracks for trade businesses. They work brilliantly on their own. Together, they form a system that handles the admin while you stay on the tools.
          </p>

          <div className="ca-product-grid">
            <div className="ca-product-card">
              <div className="ca-product-header">
                <h3 className="ca-product-name">RingCatch</h3>
                <span className="ca-badge ca-badge-live">Live</span>
              </div>
              <p className="ca-product-desc">AI phone receptionist. Answers missed calls 24/7, captures lead details, texts you a summary in seconds.</p>
              <a href="https://ringcatch.ai" className="ca-product-link" target="_blank" rel="noopener noreferrer">Try RingCatch &rarr;</a>
            </div>

            <div className="ca-product-card">
              <div className="ca-product-header">
                <h3 className="ca-product-name">ReviewCatch</h3>
                <span className="ca-badge ca-badge-live">Live</span>
              </div>
              <p className="ca-product-desc">AI-powered Google review collection. Send review requests by SMS, get AI-drafted responses, grow your reputation on autopilot.</p>
              <a href="https://reviewcatch.ai" className="ca-product-link" target="_blank" rel="noopener noreferrer">Try ReviewCatch &rarr;</a>
            </div>

            <div className="ca-product-card">
              <div className="ca-product-header">
                <h3 className="ca-product-name">QuoteCatch</h3>
                <span className="ca-badge ca-badge-soon">Coming Soon</span>
              </div>
              <p className="ca-product-desc">AI captures job details on the call and sends a quote before the customer rings someone else.</p>
            </div>

            <div className="ca-product-card">
              <div className="ca-product-header">
                <h3 className="ca-product-name">BookCatch</h3>
                <span className="ca-badge ca-badge-soon">Coming H2 2026</span>
              </div>
              <p className="ca-product-desc">AI books jobs into your calendar while you&apos;re on the tools. No double-booking, no back-and-forth.</p>
            </div>

            <div className="ca-product-card">
              <div className="ca-product-header">
                <h3 className="ca-product-name">ReturnCatch</h3>
                <span className="ca-badge ca-badge-soon">Coming H2 2026</span>
              </div>
              <p className="ca-product-desc">Automated follow-up that turns one-off jobs into repeat customers.</p>
            </div>
          </div>

          <div className="ca-products-footer">
            <p>All TradeCatch products are available at <a href="https://tradecatch.ai" target="_blank" rel="noopener noreferrer">tradecatch.ai</a></p>
            <a href="https://tradecatch.ai" className="ca-btn ca-btn-primary" target="_blank" rel="noopener noreferrer">Visit TradeCatch &rarr;</a>
          </div>
        </div>
      </section>

      {/* ==================== CONSULTING ==================== */}
      <section className="ca-section" id="consulting">
        <div className="max-w-site">
          <p className="ca-label">Bespoke Consulting</p>
          <h2 className="ca-heading">Need something custom? We build that too.</h2>
          <div className="ca-consulting-text">
            <p>
              Not every business fits a self-serve template. Coastline Automation offers bespoke AI voice agent builds — fully managed, custom-trained for your business, your services, your patch, and your terminology.
            </p>
            <p>
              We handle everything: discovery, agent configuration, workflow setup, testing, and go-live. You get a working AI system without touching a line of code or learning a new tool.
            </p>
          </div>

          <div className="ca-pricing-grid">
            <div className="ca-pricing-card">
              <h3 className="ca-pricing-tier">Core</h3>
              <div className="ca-pricing-price">&pound;149<span>/month</span></div>
              <p className="ca-pricing-desc">Bespoke AI agent built around your business. 24/7 answering, SMS + email lead delivery, missed call callback, monthly performance summary, script updates.</p>
            </div>
            <div className="ca-pricing-card ca-pricing-card-featured">
              <h3 className="ca-pricing-tier">Pro</h3>
              <div className="ca-pricing-price">&pound;249<span>/month</span></div>
              <p className="ca-pricing-desc">Everything in Core plus proactive monthly optimisation, workflow integration, WhatsApp delivery, website chat agent, priority setup, quarterly business review.</p>
            </div>
          </div>

          <p className="ca-pricing-note">&pound;499 customisation fee — currently waived for all new customers.</p>
          <div className="ca-pricing-cta">
            <a href="mailto:hello@coastlineautomation.co.uk" className="ca-btn ca-btn-primary">Book a free consultation</a>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section className="ca-section ca-section-alt" id="contact">
        <div className="max-w-site">
          <p className="ca-label">Contact</p>
          <h2 className="ca-heading">Let&apos;s talk</h2>
          <div className="ca-contact-content">
            <div className="ca-contact-info">
              <div className="ca-contact-item">
                <span className="ca-contact-label">Email</span>
                <a href="mailto:hello@coastlineautomation.co.uk">hello@coastlineautomation.co.uk</a>
              </div>
              <div className="ca-contact-item">
                <span className="ca-contact-label">Products</span>
                <a href="https://tradecatch.ai" target="_blank" rel="noopener noreferrer">tradecatch.ai</a>
              </div>
            </div>
            <p className="ca-contact-text">Book a free 20-minute call to discuss your needs. No pressure, no hard sell.</p>
            <a href="mailto:hello@coastlineautomation.co.uk" className="ca-btn ca-btn-primary">Get in touch</a>
          </div>
        </div>
      </section>
    </div>
  )
}
