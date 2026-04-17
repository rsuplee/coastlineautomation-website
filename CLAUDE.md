# Coastline Automation Website — coastlineautomation.co.uk

## What This Is
Company and bespoke services website for Coastline Automation — the premium, sales-driven brand for custom AI voice agent builds. This is NOT the self-serve product site (that's ringcatch.ai). This site targets businesses that want a fully managed, done-for-you solution.

**Live URL:** https://coastlineautomation.co.uk
**Repo:** rsuplee/coastlineautomation-website
**Deploys:** Vercel auto-deploys from `main`. Preview deploys on branches.

## Tech Stack
- Next.js (App Router) + CSS Modules, hosted on Vercel
- Satoshi font via Fontshare (`https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900`)

## Current State
- Originally cloned from ringcatch.ai (28 March 2026)
- Needs evolution: rebrand to Coastline Automation identity, add founder story, case studies, consultation funnel
- Google Business Profile verified (14 April 2026) for richard@coastlineautomation.co.uk

## Brand Identity — DIFFERENT FROM TRADECATCH

### This Is the Company Brand
Coastline Automation is the company behind the TradeCatch product family. This site speaks with the voice of the company and its founder, not the product family. Think consultancy, not SaaS.

### Positioning
- **Bespoke, managed AI voice agents** — not self-serve DIY
- **Founder-led credibility:** Rich Suplee launched Alexa in the UK + was a senior exec at Xero. These credentials are front and centre. No other competitor has both voice AI + small business depth.
- **Sales motion:** Meta ads → landing page → free consultation (Calendly) → qualification → proposal → onboarding
- **Audience:** businesses wanting done-for-you, not DIY. May include non-trades verticals.

### Colours
- Same palette as TradeCatch family (these are company colours):
  - Deep Teal: `#1A5E63`
  - Mid Teal: `#3B8C8C`
  - Light Teal: `#7CCBCB`
  - Sand: `#D4C5A0`
  - Gold: `#B08D57`
  - White: `#F8F8F8`
  - Dark bg: `#0F1A1B`
- Visual weight may differ from product sites — more premium feel, less playful

### Typography
- **Satoshi** throughout
- Headings: Satoshi Medium/Bold (note: Medium for CA, not Black — slightly more refined than RingCatch)
- Body: Satoshi Regular

### Theme
- **Light theme** — same principle as product marketing sites
- Can use more dark sections for premium contrast than the product sites
- No Border Collie dog mascot on this site — that's TradeCatch/product brand only

### Logo
- Coastline Automation logo — layered teal bands + wave line motif
- This is the ONLY site that uses the CA logo
- TradeCatch / RingCatch / dog icon do NOT appear in the header
- Product family can be mentioned in content but CA branding dominates

### Voice & Tone
- More premium and consultative than the product sites
- Still plain English — same ICP, just different buying context
- Founder's expertise and track record are selling points
- Confidence without arrogance. "We've built this before at scale" energy.
- Less "Outlaw edge" than product sites — more "trusted advisor"

### CTAs
- **NEVER** use "Get Started" or "Learn more" — banned company-wide
- Primary CTA: "Book a free consultation", "Talk to us", "See how we build it"
- Secondary: "See our work", "Read the case study"
- Calendly link for consultation booking

## Pricing
- **Core:** £149/mo — bespoke AI agent, SMS + email delivery, missed call callback, monthly summary
- **Pro:** £249/mo — everything in Core + proactive optimisation, CRM/calendar integration, WhatsApp delivery, website chat agent, priority setup, quarterly review
- **Customisation fee:** £499 one-time (currently waived as launch offer)
- No minimum term

## Key Content (Planned / In Progress)
- Founder story — Rich's journey from Alexa UK launch + Xero exec to building AI for trades
- Case studies — Constructive and Co (live client), future pilot customers
- Live demo — phone number and/or web callback form for prospects to experience the product
- Service breakdown — what's included, how onboarding works, timeline
- Consultation CTA — Calendly booking prominently placed

## Key URLs
- **Consultation booking:** Calendly link (in nav/hero/CTA sections)
- **Product family:** https://tradecatch.ai (platform hub)
- **Self-serve product:** https://ringcatch.ai (for visitors who want DIY)
- **App:** https://app.tradecatch.ai

## Development Workflow
- **Feature branches only.** Branch naming: `richard/coa-[issue]-[description]`
- Never push directly to `main`
- Vercel creates preview deployments automatically from branches
- Rich reviews via PR and merges manually

## Company Details
- Coastline Automation Ltd
- Company No. 17046438
- Registered: England & Wales
- ICO Registration: C1902158
- Address: 11 Ashdown Ave, Saltdean, BN2 8AH
- Email: richard@coastlineautomation.co.uk

## Related Repos
- **ringcatch-website** (ringcatch.ai) — self-serve product site. Shared colour palette but different brand weight.
- **tradecatch-website** (tradecatch.ai) — platform hub. Product family brand.
- **ringcatch-app** (app.tradecatch.ai) — SaaS app. Dark theme.

## Gstack Workflow Routing

When a prompt matches a gstack workflow phase, invoke the matching skill below. These are suggestions, not rules — Rich can override any of them inline (e.g. `skip /plan-eng-review`, `don't use /review`, `no /ship`).

Key routing rules:

- Product ideas, "is this worth building", brainstorming → invoke `/office-hours`
- Strategy, scope, "think bigger", "what should we build" → invoke `/plan-ceo-review`
- Architecture, "does this design make sense" → invoke `/plan-eng-review`
- Design system, brand, "how should this look" → invoke `/design-consultation`
- Design review of a plan → invoke `/plan-design-review`
- Developer experience of a plan → invoke `/plan-devex-review`
- "Review everything", full review pipeline → invoke `/autoplan`
- Bugs, errors, "why is this broken", "wtf", "this doesn't work" → invoke `/investigate`
- Test the site, find bugs, "does this work" → invoke `/qa` (or `/qa-only` for report only)
- Code review, check the diff, "look at my changes" → invoke `/review`
- Visual polish, design audit, "this looks off" → invoke `/design-review`
- Developer experience audit, try onboarding → invoke `/devex-review`
- Ship, deploy, release, "send it" → invoke `/ship` (full pipeline: sync main, tests, push, open PR)
- Just open a PR, quick PR, draft PR, WIP PR → use `git` + `gh pr create` directly, do NOT invoke `/ship`
- Merge + deploy + verify → invoke `/land-and-deploy`
- Configure deployment → invoke `/setup-deploy`
- Post-deploy monitoring → invoke `/canary`
- Update docs after shipping → invoke `/document-release`

### Overrides

Override any gstack skill invocation inline:
- `skip /plan-eng-review` — skip this specific skill for this turn
- `don't use /review` — same effect, different phrasing
- `no /ship` — third canonical form

If a gstack skill seems to conflict with an existing convention or custom skill in this repo, stop and ask rather than silently proceeding.

---

**Note on scope:** This repo's CLAUDE.md does not yet address project-specific skill authority because this repo has no custom project-level skills registered. If that changes (skills added to `.claude/skills/`), update this file with an authority section like ringcatch-app's. Cross-repo audit tracked as Linear COA-386.
