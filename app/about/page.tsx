export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="max-w-site">
          <h1 className="about-hero-heading reveal">We build AI tools for trade businesses</h1>
          <p className="about-hero-sub reveal">Coastline Automation builds bespoke AI-powered tools — so tradespeople can focus on the work, not the admin.</p>
        </div>
      </section>

      {/* The Story */}
      <section className="section about-story">
        <div className="max-w-site about-prose">
          <h2 className="about-section-heading reveal">The story</h2>
          <p className="reveal">Coastline Automation was built on the South Coast of England by Rich — a one-person business with a simple idea.</p>
          <p className="reveal">Tradespeople are brilliant at what they do. But they&apos;re on the tools, on a roof, or in a loft when their phone rings. They miss the call. The customer calls the next person on the list. The job is gone.</p>
          <p className="reveal">It&apos;s not a skills problem. It&apos;s a systems problem.</p>
          <p className="reveal">We build the systems. AI voice agents, review tools, and more — each one designed to catch the revenue that falls through the cracks when you&apos;re busy doing the actual work.</p>
        </div>
      </section>

      {/* The Company */}
      <section className="section about-company">
        <div className="max-w-site about-prose">
          <h2 className="about-section-heading reveal">The company</h2>
          <p className="reveal">Coastline Automation Ltd is a registered company based on the South Coast of England. Company No. 17046438. ICO Registration: C1902158.</p>
          <p className="reveal">We&apos;re the company behind the TradeCatch family of products — RingCatch, ReviewCatch, and more on the way.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="max-w-site">
          <h2 className="cta-heading reveal">Want to talk?</h2>
          <p className="cta-sub reveal">Whether you need a bespoke AI build or just want to learn more about what we do, drop us a line.</p>
          <a href="mailto:hello@coastlineautomation.co.uk" className="btn-gold reveal">Get in touch</a>
        </div>
      </section>
    </>
  )
}
