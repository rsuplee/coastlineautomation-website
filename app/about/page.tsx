export default function AboutPage() {
  return (
    <div className="ca-page">
      <section className="ca-hero" style={{ paddingBottom: '64px' }}>
        <div className="max-w-site">
          <h1 className="ca-hero-headline">We build AI tools for trade businesses</h1>
          <p className="ca-hero-sub">Coastline Automation builds bespoke AI-powered tools — so tradespeople can focus on the work, not the admin.</p>
        </div>
      </section>

      <section className="ca-section">
        <div className="max-w-site">
          <p className="ca-label">The Story</p>
          <h2 className="ca-heading">Built on the South Coast of England</h2>
          <div className="ca-founder-bio">
            <p>Coastline Automation was founded by Rich Suplee — who launched Alexa at Amazon UK and led senior product at Xero. He moved to the South Coast and started building AI tools that solve real problems for real businesses.</p>
            <p>Tradespeople are brilliant at what they do. But they&apos;re on the tools, on a roof, or in a loft when their phone rings. They miss the call. The customer calls the next person on the list. The job is gone. We build the systems that make sure that doesn&apos;t happen.</p>
          </div>
        </div>
      </section>

      <section className="ca-section ca-section-alt">
        <div className="max-w-site">
          <p className="ca-label">The Company</p>
          <h2 className="ca-heading">Coastline Automation Ltd</h2>
          <div className="ca-founder-bio">
            <p>Coastline Automation Ltd is a registered company based on the South Coast of England. Company No. 17046438. ICO Registration: C1902158.</p>
            <p>We&apos;re the company behind the TradeCatch family of products — RingCatch, ReviewCatch, and more on the way.</p>
          </div>
        </div>
      </section>

      <section className="ca-section">
        <div className="max-w-site">
          <p className="ca-label">Contact</p>
          <h2 className="ca-heading">Want to talk?</h2>
          <p className="ca-contact-text">Whether you need a bespoke AI build or just want to learn more about what we do, drop us a line.</p>
          <a href="mailto:hello@coastlineautomation.co.uk" className="ca-btn ca-btn-primary">Get in touch</a>
        </div>
      </section>
    </div>
  )
}
