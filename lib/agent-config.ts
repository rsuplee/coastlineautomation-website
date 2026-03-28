/* ─── Trade Agent Page Configuration ─── */

export interface SmsField {
  label: string
  value: string
}

export interface PainSlide {
  text: string
  className?: string
}

export interface DemoTimelineStep {
  callerText: string
  agentText: string
  callerText2: string
  sms: SmsField[]
}

export interface Feature {
  title: string
  desc: string
  iconPath: string
}

export interface TradeConfig {
  meta: {
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    headlineLine1: string
    headlineEm: string
    tagline: string
  }
  painSlides: PainSlide[]
  painFooter: {
    resolveText: string
    bridgeLabel: string
  }
  howItWorksSub: string
  step2: {
    title: string
    desc: string
  }
  smsStep3Desc: string
  demoTimeline: DemoTimelineStep
  featuresHeading: string
  features: Feature[]
  pricingSub: string
  ctaSub: string
}

/* ─── Shared features (identical across all trades) ─── */

const featureFullyManaged: Feature = {
  title: 'Fully managed',
  desc: 'We handle setup, agent training, updates, and support. You just set up a call forward on your phone \u2014 takes about two minutes.',
  iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
}

const featureLiveIn7Days: Feature = {
  title: 'Live in about 7 days',
  desc: 'We spend a week training your agent on your services, your patch, and how you like things handled. Then you\u2019re good to go.',
  iconPath: 'CALENDAR', // sentinel handled in the page component
}

/* ─── Shared icon paths ─── */

const ICON_CLOCK = 'CLOCK'
const ICON_ENVELOPE = 'ENVELOPE'
const ICON_PULSE = 'PULSE'

/* ─── Trade configurations ─── */

export const tradeAgents: Record<string, TradeConfig> = {
  /* ────────────────────────────────────
     PLUMBER
  ──────────────────────────────────── */
  plumber: {
    meta: {
      title: 'Plumber Agent \u2014 RingCatch AI Phone Receptionist',
      description:
        'RingCatch\u2019s AI phone receptionist for plumbers. Answers every missed call, captures leak details, boiler types, and urgency \u2014 then sends you a clean lead summary by SMS.',
    },
    hero: {
      eyebrow: 'Plumber Agent',
      headlineLine1: 'Your plumbing calls,',
      headlineEm: 'answered 24/7.',
      tagline:
        'While you\u2019re under a sink or up in a loft, your AI receptionist answers every call, captures the leak details, boiler type, and urgency \u2014 then sends you a <strong>clean lead summary</strong> by SMS.',
    },
    painSlides: [
      { text: 'You\u2019re under a boiler.' },
      { text: 'Your phone buzzes.' },
      { text: 'Hands covered in muck.' },
      { text: 'You\u2019ll call them back later.', className: 'dim' },
      { text: 'They\u2019ve already rung someone else.', className: 'dim' },
      { text: 'Another job lost.', className: 'ember' },
    ],
    painFooter: {
      resolveText: 'Your RingCatch plumber agent makes sure this never happens.',
      bridgeLabel: 'of callers won\u2019t leave a voicemail \u2014 they\u2019ll just ring the next plumber',
    },
    howItWorksSub: 'No apps to learn. No tech to manage. Just more plumbing leads landing in your pocket.',
    step2: {
      title: 'Your plumber agent has a real conversation',
      desc: 'It answers like a receptionist who knows plumbing \u2014 asks about the problem, whether it\u2019s a leak or a boiler, the property type, urgency, and preferred callback times.',
    },
    smsStep3Desc:
      'Within seconds: caller name, number, what\u2019s wrong, property type, and when they want it sorted. You call back informed, on your terms.',
    demoTimeline: {
      callerText:
        'Hi, I\u2019ve got a leak under my kitchen sink \u2014 it\u2019s been dripping since this morning and it\u2019s getting worse.',
      agentText:
        'I\u2019m sorry to hear that. Let me take some details so we can get someone out to you. Is this a house or a flat? And is the leak coming from the pipes or the tap itself?',
      callerText2:
        'It\u2019s a house \u2014 semi-detached. The leak looks like it\u2019s coming from the pipe underneath. I\u2019m around all day tomorrow if someone can come then.',
      sms: [
        { label: 'Name', value: 'Sarah Mitchell' },
        { label: 'Phone', value: '07700 900123' },
        { label: 'Issue', value: 'Leaking pipe under kitchen sink' },
        { label: 'Property', value: 'Semi-detached house' },
        { label: 'Urgency', value: 'Getting worse, wants it sorted soon' },
        { label: 'Availability', value: 'All day tomorrow' },
      ],
    },
    featuresHeading: 'Built for plumbers. Managed for you.',
    features: [
      {
        title: '24/7 call answering',
        desc: 'Emergency leaks don\u2019t wait for office hours. Your agent answers evenings, weekends, and bank holidays \u2014 so you never lose an urgent job.',
        iconPath: ICON_CLOCK,
      },
      {
        title: 'Trained for plumbing',
        desc: 'Your agent knows the difference between a combi boiler and a system boiler, understands leak descriptions, and asks about stop-cock access. It speaks your trade.',
        iconPath:
          'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
      },
      {
        title: 'Structured lead summaries',
        desc: 'Every lead arrives as a clean SMS and email \u2014 name, number, problem, property type, urgency, and availability. Everything you need to quote the job.',
        iconPath: ICON_ENVELOPE,
      },
      featureFullyManaged,
      featureLiveIn7Days,
      {
        title: 'Natural conversations',
        desc: 'Callers won\u2019t know it\u2019s AI. Your agent handles curveballs, asks follow-up questions, and sounds like someone who actually knows about plumbing.',
        iconPath: ICON_PULSE,
      },
    ],
    pricingSub:
      'Think about what a single lost lead costs you \u2014 an emergency boiler job, a bathroom refit, a burst pipe at midnight. RingCatch makes sure those calls never go unanswered.',
    ctaSub:
      'Book a free 20-minute consultation. We\u2019ll walk through how RingCatch works for plumbers, answer your questions, and get you set up if it\u2019s a good fit.',
  },

  /* ────────────────────────────────────
     ELECTRICIAN
  ──────────────────────────────────── */
  electrician: {
    meta: {
      title: 'Electrician Agent \u2014 RingCatch AI Phone Receptionist',
      description:
        'RingCatch\u2019s AI phone receptionist for electricians. Answers every missed call, captures fault details and urgency \u2014 then sends you a clean lead summary by SMS.',
    },
    hero: {
      eyebrow: 'Electrician Agent',
      headlineLine1: 'Your electrical calls,',
      headlineEm: 'answered 24/7.',
      tagline:
        'While you\u2019re up a ladder or rewiring a kitchen, your AI receptionist answers every call, captures the fault details and urgency \u2014 then sends you a <strong>clean lead summary</strong> by SMS.',
    },
    painSlides: [
      { text: 'You\u2019re mid-way through a second fix.' },
      { text: 'Your phone buzzes in your pocket.' },
      { text: 'Both hands full of cable.' },
      { text: 'You\u2019ll call them back later.', className: 'dim' },
      { text: 'They\u2019ve already rung someone else.', className: 'dim' },
      { text: 'Another job lost.', className: 'ember' },
    ],
    painFooter: {
      resolveText: 'Your RingCatch electrician agent makes sure this never happens.',
      bridgeLabel: 'of callers won\u2019t leave a voicemail \u2014 they\u2019ll just ring the next sparky',
    },
    howItWorksSub: 'No apps to learn. No tech to manage. Just more electrical leads landing in your pocket.',
    step2: {
      title: 'Your electrician agent has a real conversation',
      desc: 'It answers like a receptionist who knows electrics \u2014 asks about the fault, whether it\u2019s a consumer unit issue or socket problem, the property type, and how urgent it is.',
    },
    smsStep3Desc:
      'Within seconds: caller name, number, what\u2019s gone wrong, property type, and when they want it sorted. You call back informed, on your terms.',
    demoTimeline: {
      callerText:
        'Hi, our power keeps tripping. The whole house goes off whenever we use the oven. It\u2019s been happening for a couple of days.',
      agentText:
        'That doesn\u2019t sound right \u2014 let me take some details. Is it the main trip switch going, or an individual circuit breaker? And do you know how old your consumer unit is?',
      callerText2:
        'I think it\u2019s the main switch \u2014 everything goes off. The fuse box looks quite old, it\u2019s got those wire fuses in it. We\u2019re in most evenings if someone can come round.',
      sms: [
        { label: 'Name', value: 'James & Helen Parker' },
        { label: 'Phone', value: '07700 900456' },
        { label: 'Issue', value: 'Whole house tripping when oven is used' },
        { label: 'Details', value: 'Main switch tripping, old rewirable fuse box' },
        { label: 'Urgency', value: 'Ongoing for a few days, wants it sorted' },
        { label: 'Availability', value: 'Most evenings' },
      ],
    },
    featuresHeading: 'Built for electricians. Managed for you.',
    features: [
      {
        title: '24/7 call answering',
        desc: 'Power cuts and tripping circuits don\u2019t wait for office hours. Your agent answers evenings, weekends, and bank holidays.',
        iconPath: ICON_CLOCK,
      },
      {
        title: 'Trained for electrics',
        desc: 'Your agent knows consumer units from fuse boxes, understands RCD tripping, and asks about certification needs. It speaks your trade.',
        iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
      },
      {
        title: 'Structured lead summaries',
        desc: 'Every lead arrives as a clean SMS and email \u2014 name, number, fault description, property type, urgency, and availability.',
        iconPath: ICON_ENVELOPE,
      },
      featureFullyManaged,
      featureLiveIn7Days,
      {
        title: 'Natural conversations',
        desc: 'Callers won\u2019t know it\u2019s AI. Your agent handles curveballs, asks follow-up questions, and sounds like someone who actually knows about electrics.',
        iconPath: ICON_PULSE,
      },
    ],
    pricingSub:
      'Think about what a single lost lead costs you \u2014 a consumer unit upgrade, a full rewire, an emergency call-out. RingCatch makes sure those calls never go unanswered.',
    ctaSub:
      'Book a free 20-minute consultation. We\u2019ll walk through how RingCatch works for electricians, answer your questions, and get you set up if it\u2019s a good fit.',
  },

  /* ────────────────────────────────────
     ROOFER
  ──────────────────────────────────── */
  roofer: {
    meta: {
      title: 'Roofer Agent \u2014 RingCatch AI Phone Receptionist',
      description:
        'RingCatch\u2019s AI phone receptionist for roofers. Answers every missed call, captures roof type, damage details, and urgency \u2014 then sends you a clean lead summary by SMS.',
    },
    hero: {
      eyebrow: 'Roofer Agent',
      headlineLine1: 'Your roofing calls,',
      headlineEm: 'answered 24/7.',
      tagline:
        'While you\u2019re three storeys up replacing tiles, your AI receptionist answers every call, captures the roof type, damage details, and urgency \u2014 then sends you a <strong>clean lead summary</strong> by SMS.',
    },
    painSlides: [
      { text: 'You\u2019re up on the scaffolding.' },
      { text: 'Your phone buzzes below.' },
      { text: 'You can\u2019t exactly climb down.' },
      { text: 'You\u2019ll call them back later.', className: 'dim' },
      { text: 'They\u2019ve already rung someone else.', className: 'dim' },
      { text: 'Another job lost.', className: 'ember' },
    ],
    painFooter: {
      resolveText: 'Your RingCatch roofer agent makes sure this never happens.',
      bridgeLabel: 'of callers won\u2019t leave a voicemail \u2014 they\u2019ll just ring the next roofer',
    },
    howItWorksSub: 'No apps to learn. No tech to manage. Just more roofing leads landing in your pocket.',
    step2: {
      title: 'Your roofer agent has a real conversation',
      desc: 'It answers like a receptionist who knows roofing \u2014 asks about the roof type, whether it\u2019s a leak or storm damage, the property size, and how urgent it is.',
    },
    smsStep3Desc:
      'Within seconds: caller name, number, roof type, what\u2019s wrong, and when they want it looked at. You call back informed, on your terms.',
    demoTimeline: {
      callerText:
        'Hi, we\u2019ve got a leak coming through the bedroom ceiling. It\u2019s been raining all week and there\u2019s a damp patch getting bigger. I think some tiles might have come off in the wind.',
      agentText:
        'Sorry to hear that. Let me take some details so we can get someone out to have a look. Is it a pitched roof with tiles or slates? And is the leak just in the one room, or has it spread?',
      callerText2:
        'It\u2019s a tiled roof \u2014 concrete tiles I think. Just the one room so far, but the patch is spreading. It\u2019s a three-bed semi. Could someone come this week?',
      sms: [
        { label: 'Name', value: 'Dave Thompson' },
        { label: 'Phone', value: '07700 900789' },
        { label: 'Issue', value: 'Roof leak into bedroom ceiling, suspected missing tiles' },
        { label: 'Roof type', value: 'Pitched, concrete tiles' },
        { label: 'Property', value: '3-bed semi-detached' },
        { label: 'Urgency', value: 'Leak spreading, wants someone this week' },
      ],
    },
    featuresHeading: 'Built for roofers. Managed for you.',
    features: [
      {
        title: '24/7 call answering',
        desc: 'Storm damage doesn\u2019t wait for Monday morning. Your agent answers evenings, weekends, and bank holidays \u2014 so you never lose an emergency job.',
        iconPath: ICON_CLOCK,
      },
      {
        title: 'Trained for roofing',
        desc: 'Your agent knows flat roofs from pitched, understands tile types, and asks about access, scaffolding, and chimney work. It speaks your trade.',
        iconPath: 'ROOF',
      },
      {
        title: 'Structured lead summaries',
        desc: 'Every lead arrives as a clean SMS and email \u2014 name, number, roof type, problem, property size, urgency, and availability.',
        iconPath: ICON_ENVELOPE,
      },
      featureFullyManaged,
      featureLiveIn7Days,
      {
        title: 'Natural conversations',
        desc: 'Callers won\u2019t know it\u2019s AI. Your agent handles curveballs, asks follow-up questions, and sounds like someone who actually knows about roofing.',
        iconPath: ICON_PULSE,
      },
    ],
    pricingSub:
      'Think about what a single lost lead costs you \u2014 a full re-roof, storm damage repair, a flat roof conversion. RingCatch makes sure those calls never go unanswered.',
    ctaSub:
      'Book a free 20-minute consultation. We\u2019ll walk through how RingCatch works for roofers, answer your questions, and get you set up if it\u2019s a good fit.',
  },

  /* ────────────────────────────────────
     BUILDER
  ──────────────────────────────────── */
  builder: {
    meta: {
      title: 'Builder Agent \u2014 RingCatch AI Phone Receptionist',
      description:
        'RingCatch\u2019s AI phone receptionist for builders. Answers every missed call, captures project scope and timeline \u2014 then sends you a clean lead summary by SMS.',
    },
    hero: {
      eyebrow: 'Builder Agent',
      headlineLine1: 'Your building calls,',
      headlineEm: 'answered 24/7.',
      tagline:
        'While you\u2019re on site pouring footings or fitting joists, your AI receptionist answers every call, captures the project scope and timeline \u2014 then sends you a <strong>clean lead summary</strong> by SMS.',
    },
    painSlides: [
      { text: 'You\u2019re on site, covered in dust.' },
      { text: 'Your phone buzzes.' },
      { text: 'You\u2019re mid-pour. Can\u2019t stop.' },
      { text: 'You\u2019ll call them back later.', className: 'dim' },
      { text: 'They\u2019ve already rung someone else.', className: 'dim' },
      { text: 'Another job lost.', className: 'ember' },
    ],
    painFooter: {
      resolveText: 'Your RingCatch builder agent makes sure this never happens.',
      bridgeLabel: 'of callers won\u2019t leave a voicemail \u2014 they\u2019ll just ring the next builder',
    },
    howItWorksSub: 'No apps to learn. No tech to manage. Just more building leads landing in your pocket.',
    step2: {
      title: 'Your builder agent has a real conversation',
      desc: 'It answers like a receptionist who knows building \u2014 asks about the project type, scope, whether they have plans, the timeline, and budget expectations.',
    },
    smsStep3Desc:
      'Within seconds: caller name, number, project type, scope, timeline, and when they want to meet. You call back informed, on your terms.',
    demoTimeline: {
      callerText:
        'Hi, we\u2019re looking to get a single-storey extension built on the back of our house. We\u2019ve got some drawings from an architect and we want to start getting quotes.',
      agentText:
        'That sounds like a great project. Let me take some details. Do you know roughly what size the extension will be? And have you got planning permission sorted, or is that still in progress?',
      callerText2:
        'It\u2019s about 4 by 6 metres \u2014 kitchen diner. Planning\u2019s been approved. We\u2019d love to get started in the next couple of months if possible. Happy for someone to come round and have a look.',
      sms: [
        { label: 'Name', value: 'Mark & Lisa Collins' },
        { label: 'Phone', value: '07700 900321' },
        { label: 'Project', value: 'Single-storey rear extension (kitchen diner)' },
        { label: 'Size', value: 'Approx 4m x 6m' },
        { label: 'Planning', value: 'Approved, architect drawings ready' },
        { label: 'Timeline', value: 'Wants to start in next 2 months, happy for site visit' },
      ],
    },
    featuresHeading: 'Built for builders. Managed for you.',
    features: [
      {
        title: '24/7 call answering',
        desc: 'Homeowners browse builders in the evenings and weekends. Your agent answers when you can\u2019t \u2014 so you never lose a quote opportunity.',
        iconPath: ICON_CLOCK,
      },
      {
        title: 'Trained for building',
        desc: 'Your agent understands extensions, loft conversions, renovations, and new builds. It asks about scope, plans, planning permission, and timelines.',
        iconPath: 'BUILDING',
      },
      {
        title: 'Structured lead summaries',
        desc: 'Every lead arrives as a clean SMS and email \u2014 name, number, project type, scope, planning status, timeline, and availability for a site visit.',
        iconPath: ICON_ENVELOPE,
      },
      featureFullyManaged,
      featureLiveIn7Days,
      {
        title: 'Natural conversations',
        desc: 'Callers won\u2019t know it\u2019s AI. Your agent handles curveballs, asks follow-up questions, and sounds like someone who actually knows about building work.',
        iconPath: ICON_PULSE,
      },
    ],
    pricingSub:
      'Think about what a single lost lead costs you \u2014 an extension, a loft conversion, a renovation project. RingCatch makes sure those calls never go unanswered.',
    ctaSub:
      'Book a free 20-minute consultation. We\u2019ll walk through how RingCatch works for builders, answer your questions, and get you set up if it\u2019s a good fit.',
  },
}

export const validTrades = Object.keys(tradeAgents)
