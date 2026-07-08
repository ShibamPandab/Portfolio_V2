import type { FAQ, Feature } from '../types/content'

export type { FAQ, Feature }

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
  {
    slug: 'finca-coffee',
    featured: false,
    index: '14',
    name: 'Finca Coffee',
    category: 'Hospitality — Specialty Coffee',
    quote: 'A brand that grows its own coffee on a four-generation family farm doesn’t need marketing spin — it needs a site that gets out of the way and lets that story do the work.',
    description:
      'A specialty coffee roaster with an unusually direct supply chain — a family-run farm in Honduras feeding a single retail café in Miami — needed a site that could carry that story from crop to cup without turning into a brochure.',
    challenge:
      'Most coffee sites either lean entirely on lifestyle photography or bury the sourcing story in an About page nobody reads. The provenance — one family, one farm, four generations — is the actual differentiator, and it needed to be structural, not decorative.',
    solution:
      'A vanilla JS build organized around the supply chain itself: a farm timeline and story section leads the page, followed by the menu, a retail shop for take-home bags, and a persistent path to order ahead — each section handled by its own small, focused script rather than one framework doing everything.',
    designDecisions: [
      'A dedicated farm-timeline section ahead of the menu, so provenance is read before price.',
      'Signature drinks and wellness offerings given their own visual treatment, instead of folding into one long menu list.',
      'A light/dark theme switcher, since a coffee shop’s site gets browsed at very different times of day than it’s open.',
    ],
    technologies: ['JavaScript', 'CSS', 'Vite'],
    features: [
      { title: 'Farm-to-Cup Story', desc: 'A dedicated timeline section walks through the family farm’s history ahead of any product.' },
      { title: 'Menu & Signature Drinks', desc: 'Espresso, pour-over, cold brew, and standout drinks like the Matcha Oat Latte each get their own presentation.' },
      { title: 'Retail Shop Section', desc: 'Single-origin bags are sold for take-home brewing, not just in-café drinks.' },
      { title: 'Theme Switcher', desc: 'A light/dark toggle keeps the site comfortable to browse regardless of time of day.' },
    ],
    faqs: [
      {
        q: 'Why build this without a framework like React?',
        a: 'A single-café marketing site doesn’t need the overhead of a component framework — vanilla JS with Vite keeps the build lightweight and the load time fast, which matters more here than reusability.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — tested across mobile, tablet, and desktop, since most visitors are checking hours or the menu from a phone before walking in.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — the section-based structure (story, menu, shop, visit, order) can take a new section or a real ordering integration without a rebuild.',
      },
      {
        q: 'Is SEO included?',
        a: 'Semantic HTML and metadata fundamentals are part of the build by default — deeper local-search work is scoped separately if needed.',
      },
    ],
    liveHref: 'https://finca-coffee.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/Finca-Coffee',
  },
  {
    slug: 'bong-pizza-keshapat',
    featured: false,
    index: '15',
    name: 'Bong Pizza Keshapat',
    category: 'Restaurant — Pizza & Fast Food',
    quote: 'In a town with no delivery aggregators, the ordering system had to run through WhatsApp instead of pretending an app store solves an infrastructure problem.',
    description:
      'A pizza and fast-food restaurant in a rural West Bengal town outside the reach of Swiggy or Zomato, needing a real ordering channel that didn’t depend on an aggregator’s commission or a backend the restaurant would have to maintain.',
    challenge:
      'Aggregator commissions run 20–30%, and building a full ordering backend for a single-location restaurant is disproportionate to the problem. The site needed to feel like a real ordering app while the actual checkout stayed as simple as a WhatsApp message.',
    solution:
      'A cart-first ordering flow — browse a 61-item menu across 10 categories, build a persistent cart, then hand off a formatted order summary straight to WhatsApp, where staff confirm availability and delivery details directly.',
    designDecisions: [
      'Cart state persisted in localStorage, so a customer’s order survives a closed tab or a spotty rural connection.',
      'Checkout ends at a WhatsApp handoff instead of a payment form, matching how the restaurant actually confirms and fulfills orders.',
      'Delivery areas listed by village with charges and estimated times, instead of a generic delivery-radius map.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    features: [
      { title: 'Category-Based Menu', desc: '61 items across 10 categories, with live search and category navigation.' },
      { title: 'Persistent Cart', desc: 'Cart contents are saved to localStorage and survive a closed tab.' },
      { title: 'WhatsApp Checkout', desc: 'Orders hand off as a formatted summary via wa.me, with no payment gateway required.' },
      { title: 'Village Delivery Listings', desc: 'Delivery areas, charges, and estimated times are listed by village, not a generic radius.' },
    ],
    faqs: [
      {
        q: 'Why WhatsApp instead of a payment gateway?',
        a: 'For a single-location restaurant in an area aggregators don’t cover, a payment gateway adds cost and complexity without changing how orders actually get fulfilled — a direct WhatsApp handoff matches how the kitchen already operates.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — built mobile-first, since nearly every order originates from a phone.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — the modular structure has room for an owner dashboard, live order status, and UPI payments without rebuilding the ordering flow.',
      },
      {
        q: 'Is SEO included?',
        a: 'Semantic HTML and metadata fundamentals are part of the build by default.',
      },
    ],
    liveHref: 'https://bong-pizza-renew.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/Bong-Pizza-Renew',
  },
  {
    slug: 'cafe-elio',
    featured: false,
    index: '16',
    name: 'Cafe Elio',
    category: 'Hospitality — Cafe & Lounge',
    quote: 'Cafe Elio isn’t selling food first — it’s selling a hangout, and the site had to read like one before a single menu item shows up.',
    description:
      'A quirky, pool-table-and-graffiti-wall hangout in Jadavpur, Kolkata, where the actual draw is the space and the vibe as much as the menu — chicken lollipop and a strawberry mojito, but also blue lighting, wall art, and a room built for staying a while.',
    challenge:
      'Cafe websites default to food photography and a hero banner. That undersells a place whose reviews talk about the room — the pool table, the lighting, the music — as much as the food.',
    solution:
      'A multi-page site (About, Menu, Gallery, Events, Reservation, Journal, FAQ) that treats the space itself as content — a gallery of the room’s actual character — with the menu and booking kept just as reachable, not competing for the same screen.',
    designDecisions: [
      'A dedicated Gallery page for the room’s visual identity — pool table, graffiti wall, lounge seating — instead of folding it into a hero carousel.',
      'Signature items (Chicken Lollipop, Peri Peri Fries, Strawberry Mojito) called out specifically, since reviews already lead with them.',
      'Reservation and Contact kept as their own pages, not a shared form buried under Events.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Room-First Gallery', desc: 'A dedicated gallery page captures the pool table, graffiti wall, and lounge seating that define the space.' },
      { title: 'Signature Menu Highlights', desc: 'Standout items like the Chicken Lollipop and Strawberry Mojito get called out, not buried in a full menu list.' },
      { title: 'Reservation & Events Pages', desc: 'Booking a table or checking upcoming events each get a dedicated page.' },
      { title: 'Responsive Design', desc: 'Built mobile-first, since most visitors are checking hours or vibe from a phone.' },
    ],
    faqs: [
      {
        q: 'Is it fully responsive?',
        a: 'Yes — tested across mobile, tablet, and desktop, since most first impressions happen on a phone.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — additional pages like Journal and Events already show the structure can take more content without a redesign.',
      },
      {
        q: 'Can the content be updated?',
        a: 'Menu items, gallery photos, and event listings are held in typed data files, so updates don’t require touching page components.',
      },
      {
        q: 'Is SEO included?',
        a: 'Semantic structure and metadata fundamentals are part of the build by default.',
      },
    ],
    liveHref: 'https://cafe-elio.vercel.app/',
    githubHref: 'https://github.com/ShibamPandab/Cafe-Elio',
  },
  {
    slug: 'lnj-billing',
    featured: false,
    index: '17',
    name: 'LNJ Billing',
    category: 'Business Software — Jewellery Billing & Inventory',
    quote: 'A jewellery counter runs on a register book, a calculator, and a rate card taped to the wall — the brief was to replace all three without asking anyone to learn a new system.',
    description:
      'A billing and inventory system for small jewellery retailers, built to replace the manual register-and-spreadsheet workflow most independent shops still run on — one where stock and billing live on two different pieces of paper and slowly drift apart.',
    challenge:
      'Manual billing means every making charge and GST split gets hand-calculated per sale, and inventory is a separate, often-skipped step — so stock counts silently diverge from what’s actually on the showcase, discovered only at audit time.',
    solution:
      'A product-ID-centric system where every invoice line, stock movement, and barcode resolves back to one canonical product record. Billing looks a product up by ID, prices it from the live gold rate plus making charge, and deducts real stock atomically — the invoice and the stock change either both happen or neither does.',
    designDecisions: [
      'Selling price computed live from the day’s rate rather than stored, so a product’s listed price and what an invoice actually charges can never disagree.',
      'Inventory driven by an append-only stock-movement ledger instead of an editable counter, so every stock change is traceable to a reason.',
      'Barcode and SKU derived automatically from the Product ID rather than typed by hand, removing an entire category of mismatched-identifier errors.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    features: [
      { title: 'Automated Invoice Generation', desc: 'Product lines are priced automatically from the live gold rate, making charge, and GST — not calculated by hand.' },
      { title: 'Atomic Stock Deduction', desc: 'Invoice creation and inventory stock-out happen as one operation — a bill is never saved without the matching stock change.' },
      { title: 'Product & Inventory Management', desc: 'Full product catalogue with auto-generated Product ID, barcode, and SKU, backed by a stock-movement history.' },
      { title: 'PDF & Print Invoices', desc: 'Every invoice exports to a branded, GST-compliant PDF or print-ready sheet on demand.' },
    ],
    faqs: [
      {
        q: 'Does this require a backend or database?',
        a: 'Not for this build — it runs fully offline on local storage, with the architecture already structured so a real backend can be swapped in later without rewriting the app.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — the layout collapses to a mobile-friendly sidebar and drawer navigation, since a shop counter is as likely to run a tablet as a desktop.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — role-based logins, cloud sync, and supplier/purchase-order management are all designed to sit on top of the existing structure without a rebuild.',
      },
      {
        q: 'How does it prevent billing and stock from getting out of sync?',
        a: 'Every invoice line references a product by its ID rather than its name, and stock is only ever changed through a recorded movement — so an invoice and its stock deduction happen together or not at all.',
      },
    ],
    liveHref: 'https://implement-of-login-page.vercel.app/',
  },
]
