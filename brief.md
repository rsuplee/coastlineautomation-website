# RingCatch Website Brief

## What is RingCatch?
Managed AI phone receptionist for UK trade businesses (plumbers, electricians, HVAC, roofers). Answers missed calls 24/7, captures structured lead data, delivers via SMS and email.

## Target audience
South Coast trade business owners, 1-10 employees, owner-operated. Not technical. They want something that just works.

---

## Creative direction

### Aesthetic
Dark, cinematic, premium. Not a typical SaaS landing page. Think luxury brand meets practical trades service. Warm sand/gold tones against dark backgrounds. Atmospheric, immersive hero imagery. This site should feel like it belongs to a company that takes your business seriously — not a cheap tech tool.

### Hero
- Full-viewport hero with the robot dog mascot on a South Coast beach (white cliffs in background)
- Robot dog is the brand mascot — personifies the AI agent that "watches over" the business while the owner lives their life
- Dark overlay with warm golden text
- Headline direction: aspirational lifestyle messaging — RingCatch frees small business owners to live a better life
- Headline options: "Work optional. Life non-negotiable." / "Never miss a lead. Never miss a wave." / variations
- Stats bar at bottom: "24/7 Agents Running" | "0 Missed Calls" | "0 Missed Waves" — ties into the wave/coastline brand identity
- Two CTAs: "Schedule a Call" (primary, gold button) + "Explore Our Agents" (ghost button)

### Existing hero code
A fully coded hero section exists in `coastline-hero.html` and should be used as the starting point. It includes:
- Responsive nav with mobile drawer
- Full-viewport hero with background image, gradient overlays, film grain effect
- Animated fade-in headline, eyebrow text, CTAs, and stat bar
- The hero background image is `hero-bg.png`

Fonts in the existing hero code need updating:
- REPLACE Cormorant Garamond → Satoshi Bold (headings, display text)
- REPLACE DM Sans → Satoshi Medium/Regular (body, nav, labels)
- Keep the italic styling on the second headline line — use Satoshi Bold Italic

### Personified AI agents
Each major ICP gets a personified AI agent character. These agents are the centrepiece of the site beyond the hero. Each agent:
- Has a name and visual identity (robot dog variant styled to the trade — e.g., wearing a tool belt, hard hat, etc.)
- Gets its own dedicated page on the site
- Shows the RingCatch value proposition through that specific trade's lens
- Includes a demo section (see below)
- Serves as a targeted landing page for Meta ads

**Phase 1 agents (launch):**
1. Plumber agent — highest volume ICP
2. Electrician agent
3. Roofer agent
4. General builder agent

**Phase 2 agents (post-launch):**
5. HVAC agent
6. Locksmith agent
7. Landscaper/gardener agent

### Demo as lead capture
Each agent page includes a demo experience — a second conversion path beyond "Schedule a Call":
- **Phase 1:** Animated walkthrough or video showing a call being handled by the agent (caller rings → AI answers → conversation → lead SMS arrives)
- **Phase 2:** Live interactive demo with a real RingCatch phone number visitors can call from the website. They experience the AI agent first-hand, and the demo itself captures their details as a lead.
- Demo section includes a CTA: "Try it yourself — call our demo line" or "See [Agent Name] in action"

### Two lead capture paths
1. **Direct CTA:** "Book Your Free Consultation" → Calendly embed (for people ready to buy)
2. **Demo experience:** Try the AI agent → details captured as a lead (for people who want to see it first)

---

## Brand

### Colours
- Primary: Deep Teal #1A5E63
- White: #F8F8F8
- Sand (warm neutral): #D4C5A0
- Mid Teal: #3B8C8C
- Light Teal: #7CCBCB
- Gold (accent): #B08D57

### Hero-specific palette (from existing hero code)
- Sand: #e8dcc8
- Ocean: #2a4a5e
- Foam: #f5f0e8
- Ember/Gold: #c97a2f
- Dusk: #1a1a1a
- Background: #0d0d0d

### Typography
- Satoshi Bold — headings, display text, RingCatch wordmark
- Satoshi Medium — subheadings, nav, labels
- Satoshi Regular — body text, paragraphs

### Tone
Practical, plain-spoken, confident, local, warm. Aspirational but grounded — not Silicon Valley hype.

---

## Site structure (multi-page)

### Homepage
1. **Hero** — full viewport, robot dog mascot, aspirational headline, dual CTAs, stat bar
2. **Pain / problem** — "You're on the tools, your phone rings. You can't pick up. They call someone else."
3. **How it works** — 3 steps: calls forward → AI answers → you get a lead summary
4. **Meet the agents** — grid/cards showing each personified agent with trade name, linking to their dedicated page
5. **What you get** — feature highlights (24/7, managed service, set up in 7 days, etc.)
6. **Social proof** — testimonials/case studies (placeholder until pilot customers provide them)
7. **FAQ accordion** — common objections from Product Spec
8. **CTA + Calendly** — "Book Your Free Consultation"
9. **Footer** — Coastline Automation info, links, legal

### Agent pages (one per ICP)
Each agent page follows a consistent template:
1. **Agent hero** — the personified agent character, trade-specific headline (e.g., "Your plumbing calls, answered 24/7")
2. **Trade-specific pain** — missed call scenarios specific to that trade
3. **How it works** — same 3 steps, but with trade-specific language and examples
4. **Demo section** — animated walkthrough (Phase 1) or live demo (Phase 2)
5. **What you get** — features framed for that trade
6. **Pricing teaser** — "From £X/month" or "Book a call for pricing"
7. **CTA** — dual path: Schedule a Call + Try the Demo

### Other pages (future)
- About / Our Story
- Pricing (when finalised)
- Blog (future, for SEO)

---

## Technical

### Stack
- HTML + Tailwind CSS (via CDN for now) + GSAP (via CDN) for scroll animations
- Multi-page static site (not single-page app)
- Hosted on Vercel (free tier), deployed via GitHub
- Custom domain: ringcatch.ai

### Performance
- Mobile-first, responsive
- Fast loading — optimise images, lazy load below the fold
- Lighthouse score target: 90+ on all metrics

### Content rules
- British English throughout
- All copy must pass the "Would a plumber in Portsmouth understand this?" test
- Say "AI phone receptionist" not "AI system" or "bot"
- Say "managed service" not "software" or "platform"
- Avoid: AI-powered, cutting-edge, seamless, leverage, ecosystem, solution

### Images
- Hero: robot dog mascot on South Coast beach (hero-bg.png — provided)
- Agent characters: to be created (robot dog variants per trade)
- Stock photography: real tradespeople at work (Stocksy / iStock)
- No generic AI-generated images, no fake office workers

---

## File inventory (existing assets)
- `coastline-hero.html` — fully coded hero section (use as starting point)
- `hero-bg.png` — hero background image (robot dog on beach, white cliffs)
- Brand guidelines and colour palette confirmed in Notion Business Brain

---

## Build priority
1. Homepage with hero (adapt existing code) + remaining sections
2. Agent page template (reusable structure)
3. First agent page: Plumber
4. Remaining Phase 1 agent pages: Electrician, Roofer, Builder
5. Demo section (animated walkthrough)
6. Live demo integration (Phase 2)
