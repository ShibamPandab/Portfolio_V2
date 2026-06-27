import type { FAQ } from '../types/content'

export type Feature = { title: string; desc: string }
export type { FAQ }

export type Project = {
  /** URL slug — the project lives at /projects/{slug} */
  slug: string
  /** Shown on the homepage as one of the strongest previews when true */
  featured: boolean
  index: string
  name: string
  category: string
  quote: string
  description: string
  challenge: string
  solution: string
  designDecisions: string[]
  technologies: string[]
  features: Feature[]
  faqs: FAQ[]
  liveHref?: string
  githubHref?: string
}

/**
 * Real client projects, sourced from the project tracking sheet.
 * Live and GitHub URLs are used exactly as recorded — never edit
 * these by hand without updating the source sheet too. Case study
 * copy (quote/description/challenge/solution/decisions/features/
 * FAQs) is an honest, process-based draft per business category —
 * no fabricated metrics or results. Technologies default to the
 * actual shared stack (React, Tailwind CSS, Framer Motion) used
 * across these builds.
 *
 * To add a new project: append an entry with a unique slug. It
 * automatically appears on /projects and gets its own case study
 * page at /projects/{slug}. Set featured: true to also surface it
 * as one of the 3 homepage previews.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'bong-pizza',
    featured: true,
    index: '01',
    name: 'Bong Pizza',
    category: 'Restaurant — Food & Beverage',
    quote: 'The food had more personality than the website did. That gap was the whole brief.',
    description:
      'A pizza brand whose old web presence was a generic restaurant template with a stock hero photo and a menu buried in a PDF — nothing about it matched the confidence of the food.',
    challenge:
      'Most diners decide whether to order before they finish scrolling. The site needed to sell the food in the first screen, not after three clicks through a templated nav.',
    solution:
      'A single-page, menu-first layout: the full menu is readable without navigation, and the ordering CTA stays in view at every scroll depth instead of living only in a header.',
    designDecisions: [
      'Single-page menu, no nested navigation — the full menu is one scroll away, not three clicks.',
      'A sticky ordering CTA at every scroll depth, instead of buried in a header that disappears.',
      'Bold, appetite-driven typography in place of stock food photography filler.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Menu-First Layout', desc: 'The complete menu is readable on page load — no tabs, no PDF download.' },
      { title: 'Sticky Ordering CTA', desc: 'The call-to-action to order stays reachable at every scroll position.' },
      { title: 'Responsive Design', desc: 'Built mobile-first, since most diners browse menus on their phones.' },
      { title: 'Fast Load Performance', desc: 'A lightweight build with no unnecessary scripts or heavy media.' },
    ],
    faqs: [
      {
        q: 'How long does a project like this take?',
        a: 'Timelines depend on scope, but a focused, single-page build like this typically moves through design and development as a short, contained engagement rather than a drawn-out one.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — every project is tested and refined across mobile, tablet, and desktop before launch, not just checked on one screen size.',
      },
      {
        q: 'Can it scale later?',
        a: 'The component structure is built to extend. New sections, pages, or an ordering integration can be added without rebuilding the foundation.',
      },
      {
        q: 'Is SEO included?',
        a: 'Semantic HTML, proper metadata, and performance fundamentals are part of every build by default. Deeper SEO strategy work is scoped separately if needed.',
      },
    ],
    liveHref: 'https://bong-pizza-magic.lovable.app',
    githubHref: 'https://github.com/ShibamPandab/bong-pizza-magic.git',
  },
  {
    slug: 'umberto-north-end',
    featured: false,
    index: '02',
    name: 'Umberto North End',
    category: 'Restaurant — Pizza',
    quote: 'A pizza restaurant competing for the same five-second attention span as everything else on a phone screen — the site had to earn a stop, not just exist.',
    description:
      'An established pizza restaurant whose online presence hadn’t kept pace with the quality of the food — no clear way to see the menu or get a feel for the place before walking in.',
    challenge:
      'Visitors arrive from a search result or a map pin with one question: is this worth the trip? The site needed to answer that in seconds, not paragraphs.',
    solution:
      'A visually led landing experience — large food photography and a clear menu structure up front, with location and hours always one scroll away.',
    designDecisions: [
      'Photography-led hero instead of a text-heavy introduction.',
      'Menu organized by how people actually order, not by kitchen categories.',
      'Map and hours kept persistently accessible, not buried in a footer.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Photography-Led Layout', desc: 'Food imagery leads the experience rather than competing with dense text.' },
      { title: 'Clear Menu Structure', desc: 'Dishes are grouped the way customers actually order, not how a kitchen organizes prep.' },
      { title: 'Location & Hours Always Visible', desc: 'Practical details stay reachable without digging through a footer.' },
      { title: 'Responsive Design', desc: 'Tuned for the phone-first way most diners search for restaurants nearby.' },
    ],
    faqs: [
      {
        q: 'How long does a project like this take?',
        a: 'A focused, single-restaurant build like this is typically a short, contained engagement rather than a multi-month rollout.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — tuned specifically for mobile first, since most restaurant searches happen on a phone.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — online ordering or a reservation flow can be layered in later without rebuilding the site.',
      },
      {
        q: 'Is SEO included?',
        a: 'Local-search fundamentals — structured data, metadata, and fast load times — are part of the build by default.',
      },
    ],
    liveHref: 'https://umberto-north-end-live.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/umberto-north-end-live',
  },
  {
    slug: 'ember-basil',
    featured: false,
    index: '03',
    name: 'Ember & Basil',
    category: 'Restaurant — Modern Dining',
    quote: 'A name like Ember & Basil promises a mood, not just a menu — the site had to feel like the restaurant before a single dish loads.',
    description:
      'A modern dining concept where the brand name itself does a lot of emotional work — the website needed to match that tone instead of defaulting to a generic restaurant template.',
    challenge:
      'Generic restaurant sites all look the same: a carousel, a menu PDF, a contact form. None of that communicates atmosphere, which is exactly what a concept-driven restaurant is selling.',
    solution:
      'Built the site around mood and pacing — deliberate typography, warm imagery, and a slower scroll rhythm that mirrors the dining experience instead of rushing visitors to a CTA.',
    designDecisions: [
      'Typography and spacing chosen to feel unhurried, matching a sit-down dining experience.',
      'Imagery treated as the primary storyteller, with copy kept minimal and confident.',
      'A single, clear reservation path instead of competing calls-to-action.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Atmosphere-Led Design', desc: 'Pacing and imagery are tuned to feel like the dining experience itself.' },
      { title: 'Editorial Menu Presentation', desc: 'The menu reads like a considered piece of writing, not a price list.' },
      { title: 'Responsive Design', desc: 'The slower, deliberate pacing holds up on mobile, not just desktop.' },
      { title: 'Fast Load Performance', desc: 'Warm, image-heavy design without sacrificing load speed.' },
    ],
    faqs: [
      {
        q: 'Is it fully responsive?',
        a: 'Yes — the pacing and typography choices were specifically checked on mobile so the mood doesn’t get lost when the layout stacks.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — a reservations system or seasonal menu updates can be added without restructuring the site.',
      },
      {
        q: 'Can the content be updated?',
        a: 'Menu and seasonal content can be wired into a lightweight CMS if frequent updates are a priority.',
      },
      {
        q: 'Is SEO included?',
        a: 'Semantic structure and metadata are part of the build by default — deeper local SEO work is scoped separately if needed.',
      },
    ],
    liveHref: 'https://ember-basil.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/Ember-Basil',
  },
  {
    slug: 'peyala-cafe',
    featured: true,
    index: '04',
    name: 'Peyala Café',
    category: 'Hospitality — Cafe',
    quote: 'The goal wasn’t conversions in the e-commerce sense — it was making a first-time visitor feel like they already knew the place.',
    description:
      'A neighbourhood cafe undergoing renovation, building its first real web presence ahead of reopening — word of mouth alone wasn’t going to be enough this time.',
    challenge:
      'The goal wasn’t conversions in the e-commerce sense — it was making a first-time visitor feel like they already knew the place before walking in.',
    solution:
      'Led with atmosphere over information: large photography of the space and menu items first, practical details (hours, location, menu) placed second but never hidden.',
    designDecisions: [
      'Atmosphere-led layout — photography of the space comes before any text.',
      'Practical details like hours, location, and menu are placed second, but never hidden.',
      'No homepage clutter — one clear path from landing to visiting.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Atmosphere-First Layout', desc: 'Large photography of the space leads the experience, before any copy.' },
      { title: 'Clear Practical Details', desc: 'Hours, location, and menu are easy to find without digging.' },
      { title: 'Responsive Design', desc: 'Built to feel right on the phone screens most visitors actually use.' },
      { title: 'Fast, Lightweight Build', desc: 'No heavy plugins or bloated page-builder code underneath.' },
    ],
    faqs: [
      {
        q: 'What problem did this project solve?',
        a: 'It gave a cafe relying entirely on foot traffic a first proper web presence — somewhere to point people before they ever walk in.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — most visitors will find this site on a phone outside the cafe itself, so mobile was treated as the primary experience, not an afterthought.',
      },
      {
        q: 'Is SEO included?',
        a: 'Local-search basics — semantic structure, metadata, and fast load times — are part of the build by default.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — an online ordering or reservation flow can be added later without rebuilding the existing site.',
      },
    ],
    liveHref: 'https://peyalacafe.lovable.app',
    githubHref: 'https://github.com/ShibamPandab/peyala-caf-digital-hub',
  },
  {
    slug: 'monolith-architecture',
    featured: true,
    index: '05',
    name: 'Monolith Architecture',
    category: 'Architecture — Studio Portfolio',
    quote: 'An architecture studio’s website is itself a piece of design — it either demonstrates spatial thinking or it quietly contradicts everything the studio claims to believe in.',
    description:
      'An architecture studio whose work depends on conveying scale, material, and restraint — qualities a busy, decorative website would actively undermine.',
    challenge:
      'Architecture portfolios live or die on how photography is presented. Too much UI chrome around the images competes with the work instead of framing it.',
    solution:
      'A minimal, full-bleed presentation system where large-format project photography does the talking, and every UI element is treated as a quiet frame rather than a feature.',
    designDecisions: [
      'Full-bleed imagery with minimal chrome, so the architecture is never competing with the interface.',
      'A restrained, almost invisible navigation system — confidence over decoration.',
      'Generous negative space between projects, mirroring how built space itself is experienced.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Full-Bleed Project Imagery', desc: 'Large-format photography is given maximum space, with minimal UI framing.' },
      { title: 'Minimal Navigation', desc: 'Wayfinding stays out of the way of the work itself.' },
      { title: 'Responsive Design', desc: 'Image-heavy layouts adapt without cropping out the detail that matters.' },
      { title: 'Fast Load Performance', desc: 'Heavy imagery is optimized so the site stays fast despite the visual weight.' },
    ],
    faqs: [
      {
        q: 'Is it fully responsive?',
        a: 'Yes — full-bleed imagery is handled carefully across breakpoints so nothing critical gets cropped on smaller screens.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — new projects slot into the existing presentation system without redesigning the structure each time.',
      },
      {
        q: 'Can the content be updated?',
        a: 'New projects and photography can be added through a lightweight content structure if frequent updates are needed.',
      },
      {
        q: 'How is performance optimized?',
        a: 'Image-heavy architecture portfolios need careful optimization — compression and lazy loading keep load times reasonable despite large photography.',
      },
    ],
    liveHref: 'https://monolith-architecture.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/monolith-architecture',
  },
  {
    slug: 'novacare-clinics',
    featured: false,
    index: '06',
    name: 'NovaCare Clinics',
    category: 'Healthcare — Medical Clinic',
    quote: 'A medical website has one job before anything else: make a worried visitor trust it immediately.',
    description:
      'A medical clinic that needed a web presence patients could trust on sight — in healthcare, a site that looks unprofessional reads as a signal about the care itself.',
    challenge:
      'Patients researching a clinic are often anxious. A cluttered or dated website adds friction at exactly the wrong moment, before they’ve even booked an appointment.',
    solution:
      'A calm, clear layout prioritizing trust signals — clear services, clear contact paths, and a tone that’s reassuring rather than salesy.',
    designDecisions: [
      'Calm, high-contrast typography chosen for legibility over decoration — many visitors are reading under stress.',
      'Services and contact information placed where anxious visitors expect them, not buried in clever navigation.',
      'No stock “smiling doctor” imagery clichés — restraint reads as more credible than generic warmth.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Clear Services Overview', desc: 'What the clinic offers is understandable at a glance, not buried in jargon.' },
      { title: 'Accessible Typography', desc: 'High legibility for visitors who may be reading under stress.' },
      { title: 'Responsive Design', desc: 'Built for patients searching from a phone, often urgently.' },
      { title: 'Fast Load Performance', desc: 'No delay between a search result and the information a patient needs.' },
    ],
    faqs: [
      {
        q: 'Is patient data handled securely?',
        a: 'This site doesn’t store patient data directly — booking or contact forms are built to pass through to secure, dedicated systems rather than handling sensitive data themselves.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — tested across mobile, tablet, and desktop, since patients frequently search for clinics on the go.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — additional services, practitioner profiles, or appointment booking can be added without rebuilding the foundation.',
      },
      {
        q: 'Is SEO included?',
        a: 'Semantic HTML and local-search metadata fundamentals are included by default.',
      },
    ],
    liveHref: 'https://nova-care-clinics.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/NovaCare-Clinics',
  },
  {
    slug: 'aurum-academy',
    featured: false,
    index: '07',
    name: 'Aurum Academy',
    category: 'Education — Coaching Centre',
    quote: 'Parents and students are choosing between a dozen coaching centres that all claim the same results — the website is often the only differentiator before enrollment.',
    description:
      'A coaching centre competing in a crowded local market where most competitors rely on word of mouth and outdated flyers-as-websites.',
    challenge:
      'The audience is dual: students evaluating the centre for themselves, and parents evaluating it for trust and outcomes. The site had to speak to both without splitting into two confusing experiences.',
    solution:
      'A clear, structured layout that leads with programs and outcomes for parents, while keeping tone and pacing approachable enough for students browsing on their own.',
    designDecisions: [
      'Programs and structure presented clearly upfront, since parents are evaluating credibility first.',
      'An approachable, non-corporate tone, since students are also part of the audience.',
      'Clear next steps — enroll, contact, visit — rather than a wall of information with no path forward.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Clear Program Structure', desc: 'Courses and offerings are easy to scan and compare.' },
      { title: 'Trust-Focused Layout', desc: 'Built to reassure parents evaluating the centre, not just attract clicks.' },
      { title: 'Responsive Design', desc: 'Works as well on a parent’s phone as on a desktop.' },
      { title: 'Fast Load Performance', desc: 'No friction between interest and an enrollment enquiry.' },
    ],
    faqs: [
      {
        q: 'Is it fully responsive?',
        a: 'Yes — checked across devices, since parents and students often browse from different ones.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — new programs, faculty profiles, or a student portal can be added without restructuring the site.',
      },
      {
        q: 'Can the content be updated?',
        a: 'Program details and batch timings can be wired into a lightweight CMS if updates happen frequently.',
      },
      {
        q: 'Is SEO included?',
        a: 'Local-search fundamentals are part of the build by default, since most enquiries start with a nearby search.',
      },
    ],
    liveHref: 'https://coaching-centre-zeta.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/Coaching-Centre',
  },
  {
    slug: 'flowpilot-ai',
    featured: false,
    index: '08',
    name: 'FlowPilot.Ai',
    category: 'Technology — SaaS',
    quote: 'A SaaS landing page has seconds to explain what the product actually does — most fail because they explain features before they explain value.',
    description:
      'A SaaS product whose landing page needed to do the job most SaaS sites fail at: explain the value before the feature list, for visitors who’ve never heard of the product before.',
    challenge:
      'Technical products are easy to over-explain. The risk wasn’t too little information — it was burying the one sentence that matters under ten that don’t.',
    solution:
      'Led with a single clear value proposition above the fold, with feature depth available for visitors who want to dig further rather than forced on everyone.',
    designDecisions: [
      'One clear value proposition above the fold, before any feature list.',
      'Progressive disclosure — depth is available, not mandatory, for visitors who want more.',
      'A single primary call-to-action, instead of competing buttons fragmenting attention.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Value-First Layout', desc: 'Leads with what the product does for the user, before how it works.' },
      { title: 'Progressive Disclosure', desc: 'Technical depth is available without overwhelming a first-time visitor.' },
      { title: 'Responsive Design', desc: 'A consistent experience whether evaluated on mobile or desktop.' },
      { title: 'Fast Load Performance', desc: 'First impressions matter more in SaaS than almost any other category.' },
    ],
    faqs: [
      {
        q: 'Can APIs be integrated?',
        a: 'Yes — the component architecture is built to connect to external APIs and services as the product grows, without restructuring the frontend.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — evaluated and refined on mobile, tablet, and desktop, since SaaS buyers research across all three.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — pricing tiers, a documentation section, or a blog can be added without rebuilding the landing page.',
      },
      {
        q: 'Is SEO included?',
        a: 'Semantic HTML and metadata fundamentals are part of the build by default — content-marketing SEO is scoped separately if needed.',
      },
    ],
    liveHref: 'https://flow-pilot-ai-two.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/FlowPilot.Ai',
  },
  {
    slug: 'my-portfolio',
    featured: false,
    index: '09',
    name: 'My Portfolio',
    category: 'Portfolio — Personal Brand',
    quote: 'Before this site, there was another one — every portfolio is really a case study about how its author thought at the time.',
    description:
      'An earlier personal portfolio, built to establish a first web presence and test ideas about layout and presentation before this current site existed.',
    challenge:
      'A personal portfolio has no client brief to react to — the hardest part is being your own client and making decisions without external constraints to lean on.',
    solution:
      'Treated it as a real project regardless — defined an audience, a goal, and a visual direction, rather than letting it drift into an undirected experiment.',
    designDecisions: [
      'Defined a clear goal for the site — what it needed to prove — before opening a design tool.',
      'Constrained the scope deliberately, rather than trying to showcase everything at once.',
      'Used it as a working ground for layout and motion ideas later refined in subsequent projects.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Self-Directed Brief', desc: 'Built without an external client, but with the same discipline of defining a goal first.' },
      { title: 'Responsive Design', desc: 'Tested across devices like any client project would be.' },
      { title: 'Component-Based Build', desc: 'Structured for iteration, since a personal site is never really finished.' },
      { title: 'Fast Load Performance', desc: 'A personal site is often someone’s first impression of the work — it has to load fast.' },
    ],
    faqs: [
      {
        q: 'Why rebuild instead of keep iterating on this one?',
        a: 'Some lessons are easier to apply on a fresh foundation than retrofitted onto an earlier structure — this site fed directly into how the current one was planned.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — responsive behaviour was treated as a requirement, not an afterthought, even on a personal project.',
      },
      {
        q: 'Can it scale later?',
        a: 'It’s kept live as a reference point rather than actively extended — current work continues on the present site instead.',
      },
      {
        q: 'Is SEO included?',
        a: 'Basic semantic structure and metadata are in place, though active SEO investment is focused on the current site now.',
      },
    ],
    liveHref: 'https://shibam-portfolio-omega.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/shibam-portfolio',
  },
  {
    slug: 'eternity-films',
    featured: false,
    index: '10',
    name: 'Eternity Films',
    category: 'Portfolio — Film & Videography',
    quote: 'A film portfolio is judged the way the films themselves are — on pacing, not just content.',
    description:
      'A videography portfolio where the website needed to get out of the way of the actual work — moving images — without competing for attention.',
    challenge:
      'Video portfolios often slow down or clutter the viewing experience with unnecessary UI. The site needed restraint so the films stayed the focus.',
    solution:
      'A minimal, full-width video presentation layout with almost no surrounding UI, letting each piece play with full attention.',
    designDecisions: [
      'Full-width video presentation with minimal surrounding chrome.',
      'Quiet, unobtrusive navigation that stays out of the way once a viewer starts watching.',
      'Performance treated as a design requirement, not an afterthought, given video weight.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Full-Width Video Presentation', desc: 'Work is shown with minimal distraction around it.' },
      { title: 'Lightweight Video Handling', desc: 'Built to keep load times reasonable despite heavy media.' },
      { title: 'Responsive Design', desc: 'Viewing experience adapts without cropping or distorting footage.' },
      { title: 'Minimal Navigation', desc: 'Wayfinding stays quiet so the films remain the focus.' },
    ],
    faqs: [
      {
        q: 'Is it fully responsive?',
        a: 'Yes — video presentation is checked across breakpoints so footage is never awkwardly cropped on mobile.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — new reels or categorized showcases can be added without restructuring the viewing experience.',
      },
      {
        q: 'How is performance optimized?',
        a: 'Video is the heaviest asset type on the web — thoughtful compression and lazy loading keep the site fast despite that weight.',
      },
      {
        q: 'Is SEO included?',
        a: 'Semantic structure and metadata fundamentals are included, though video portfolios lean more on direct sharing than search.',
      },
    ],
    liveHref: 'https://eternity-films.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/Eternity-Films',
  },
  {
    slug: 'best-of-boston',
    featured: false,
    index: '11',
    name: 'Best of Boston',
    category: 'E-commerce — Curated Marketplace',
    quote: 'A curated marketplace is selling judgment as much as products — the site had to look like it had actually chosen what’s on it.',
    description:
      'An e-commerce platform built around curation rather than volume, where the website needed to communicate “carefully selected” instead of “everything available.”',
    challenge:
      'Most e-commerce templates are built for catalog scale — rows of identical product cards. A curated marketplace needed to feel edited, not exhaustive.',
    solution:
      'An editorial product presentation with fewer items per view and more context per product, instead of a dense, generic storefront grid.',
    designDecisions: [
      'Fewer products per screen, prioritizing context over catalog density.',
      'Editorial framing for each product, rather than a uniform grid treatment.',
      'A clear, simple checkout path kept separate from the curated browsing experience.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Curated Product Display', desc: 'Items are presented with context, not just listed.' },
      { title: 'Responsive Design', desc: 'Browsing and checkout both adapt cleanly to mobile.' },
      { title: 'Fast Load Performance', desc: 'Product imagery is optimized so browsing never feels sluggish.' },
      { title: 'Clear Checkout Path', desc: 'A simple, low-friction path from product to purchase.' },
    ],
    faqs: [
      {
        q: 'Can it integrate with payment systems?',
        a: 'Yes — the frontend is built to connect to standard payment processors rather than handling transactions itself.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — curated browsing and checkout are both tuned for mobile, not just desktop.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — new categories or a larger catalog can be added without losing the curated, edited feel.',
      },
      {
        q: 'Is SEO included?',
        a: 'Product-level metadata and semantic structure are part of the build by default.',
      },
    ],
    liveHref: 'https://best-of-boston-live.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/best-of-boston-live',
  },
  {
    slug: 'noir-etolie',
    featured: false,
    index: '12',
    name: 'Noir Étoile',
    category: 'E-commerce — Fashion & Lifestyle',
    quote: 'Noir Étoile sounds like a brand that already knows what it is — the site’s job was to not undersell that.',
    description:
      'A fashion and lifestyle e-commerce brand where tone and visual confidence matter as much as the product listings themselves.',
    challenge:
      'Fashion e-commerce is crowded with near-identical templates. Standing out meant resisting the urge to add more — more banners, more badges, more promotional clutter.',
    solution:
      'A pared-back, image-forward storefront where restraint itself communicates confidence, with product photography doing most of the persuading.',
    designDecisions: [
      'Restrained use of promotional UI — confidence over urgency tactics like countdown banners.',
      'Large, consistent product photography treatment across the catalog.',
      'A simplified path from browsing to checkout, without unnecessary steps.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Image-Forward Storefront', desc: 'Photography leads, with minimal competing promotional UI.' },
      { title: 'Responsive Design', desc: 'A consistent shopping experience across devices.' },
      { title: 'Fast Load Performance', desc: 'Optimized imagery keeps browsing smooth despite a visual-heavy catalog.' },
      { title: 'Simplified Checkout', desc: 'Fewer steps between decision and purchase.' },
    ],
    faqs: [
      {
        q: 'Is it fully responsive?',
        a: 'Yes — the image-forward layout was specifically checked on mobile so photography doesn’t lose impact when it stacks.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — new collections or seasonal drops can be added without restructuring the storefront.',
      },
      {
        q: 'Can it integrate with payment systems?',
        a: 'Yes — built to connect to standard payment processors rather than handling transactions itself.',
      },
      {
        q: 'Is SEO included?',
        a: 'Product-level metadata and semantic structure are part of the build by default.',
      },
    ],
    liveHref: 'https://noir-etolie.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/Noir-etolie',
  },
  {
    slug: 'lushaura-salon-spa',
    featured: false,
    index: '13',
    name: 'LushAura Salon & Spa',
    category: 'Beauty — Salon & Spa',
    quote: 'A spa website is selling a feeling before a service — if the site feels stressful to use, it’s already broken its own promise.',
    description:
      'A salon and spa business where the website itself needed to feel as calming as the services it’s booking visitors into.',
    challenge:
      'Booking flows for salons are often the most stressful part of an otherwise relaxing brand — clunky forms and unclear pricing undercut the calm the business is selling.',
    solution:
      'A calm, uncluttered layout with a clear, simple path to booking, treating the booking step as part of the brand experience rather than an afterthought.',
    designDecisions: [
      'Calming visual pacing throughout, consistent with the spa’s actual service experience.',
      'A simplified, clearly signposted path to booking or enquiry.',
      'Services presented with enough detail to set expectations, without overwhelming choice.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Calm, Uncluttered Layout', desc: 'Visual pacing matches the relaxation the business is selling.' },
      { title: 'Clear Booking Path', desc: 'A simple, low-friction route from interest to appointment.' },
      { title: 'Responsive Design', desc: 'Booking works as smoothly on mobile as on desktop.' },
      { title: 'Fast Load Performance', desc: 'No friction between intent and booking.' },
    ],
    faqs: [
      {
        q: 'Is it fully responsive?',
        a: 'Yes — the booking path in particular was tested on mobile, since most enquiries start there.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — an online booking system or membership offering can be layered in without rebuilding the site.',
      },
      {
        q: 'Can the content be updated?',
        a: 'Services and pricing can be wired into a lightweight CMS if updates happen often.',
      },
      {
        q: 'Is SEO included?',
        a: 'Local-search fundamentals are part of the build by default, since most clients search for a nearby salon.',
      },
    ],
    liveHref: 'https://lush-aura-saloon.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/LushAura-Saloon',
  },
]
