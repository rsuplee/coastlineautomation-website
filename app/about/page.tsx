'use client'

import GsapInit from '@/components/GsapInit'
import { openCalendly } from '@/lib/calendly'

export default function AboutPage() {
  return (
    <>
      <GsapInit />

      {/* Hero */}
      <section className="about-hero">
        <div className="max-w-site">
          <h1 className="about-hero-heading reveal">Built for the bloke who&apos;s too busy to answer the phone</h1>
          <p className="about-hero-sub reveal">RingCatch is a managed AI phone service — built by someone who grew up watching good tradespeople lose work for stupid reasons.</p>
        </div>
      </section>

      {/* The Story */}
      <section className="section about-story">
        <div className="max-w-site about-prose">
          <h2 className="about-section-heading reveal">The story</h2>
          <p className="reveal">RingCatch was built on the South Coast of England by Coastline Automation — a one-person business run by Rich.</p>
          <p className="reveal">The idea is simple. Tradespeople are brilliant at what they do. But they&apos;re on the tools, on a roof, or in a loft when their phone rings. They miss the call. The customer calls the next person on the list. The job is gone.</p>
          <p className="reveal">It&apos;s not a skills problem. It&apos;s a systems problem.</p>
          <p className="reveal">RingCatch is the system. A bespoke AI voice agent, built around your business, that answers every missed call, qualifies the caller, and sends you a structured lead summary — name, job, location, urgency — before you&apos;ve come down off the roof.</p>
          <p className="reveal">Not a robot that sounds like a robot. An agent that sounds like it works for you.</p>
        </div>
      </section>

      {/* Why Managed? */}
      <section className="section about-managed">
        <div className="max-w-site about-prose">
          <h2 className="about-section-heading reveal">We handle everything. You just take the calls that matter.</h2>
          <p className="reveal">We don&apos;t sell you software and leave you to figure it out. We build your agent, configure your workflows, and tune it over time. You get a phone receptionist without the receptionist.</p>
        </div>
      </section>

      {/* The Company */}
      <section className="section about-company">
        <div className="max-w-site about-prose">
          <h2 className="about-section-heading reveal">Coastline Automation</h2>
          <p className="reveal">RingCatch is a product of Coastline Automation Ltd — a registered company based on the South Coast of England. Company No. 17046438.</p>
        </div>
      </section>

      {/* CTA */}
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
