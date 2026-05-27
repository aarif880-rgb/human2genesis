// ─── The AI Creator's Blueprint — single source of truth ──────

export const PRODUCT = {
  name:          "The AI Creator's Blueprint",
  tagline:       "Stop using AI like a beginner. Learn how operators actually use it.",
  price:         199,
  originalPrice: 299,
  currency:      "BDT",
  urgency:       "Launch Offer",
  whatsapp:      "https://wa.me/8801303570330?text=Hi%20Human%202.0%20Genesis%2C%20I%20completed%20payment%20for%20The%20AI%20Creator%27s%20Blueprint.",
  bkashNumber:   "01303570330",
  support:       "https://wa.me/8801303570330",
};

export const BRAND = {
  name:    "Human 2.0 Genesis",
  handle:  "@human2genesis",
  tagline: "AI-native education for the next generation of operators.",
  location:"Dhaka, Bangladesh",
};

// ─── Proprietary frameworks inside the product ─────────────────
export const FRAMEWORKS = [
  {
    id:    "director",
    name:  "The Director Model",
    desc:  "Stop being a passenger in AI conversations. The Director Model teaches you to set context, control output quality, and extract professional-grade results — every time.",
    icon:  "🎬",
  },
  {
    id:    "prism",
    name:  "The PRISM Framework",
    desc:  "A 5-step prompt architecture that eliminates vague, generic AI output. Purpose · Role · Instructions · Style · Mandate. Used by operators who can't afford amateur results.",
    icon:  "🔷",
  },
  {
    id:    "specialist",
    name:  "AI Specialist System",
    desc:  "How to build specialised AI agents for writing, research, strategy, and content — configured to your voice, your market, and your output standards.",
    icon:  "⚙️",
  },
  {
    id:    "bangla",
    name:  "Bangla AI Content Workflow",
    desc:  "The only structured workflow for producing premium Bangla content at scale using AI — without losing cultural authenticity or tonal quality.",
    icon:  "✍️",
  },
];

// ─── What's inside the Blueprint ──────────────────────────────
export const WHATS_INSIDE = [
  { item: "The Director Model — AI control system",         detail: "Chapter 1" },
  { item: "The PRISM Framework — 5-step prompt system",     detail: "Chapter 2" },
  { item: "AI Specialist System — build your AI team",      detail: "Chapter 3" },
  { item: "Bangla AI Content Workflow",                     detail: "Chapter 4" },
  { item: "30+ real operator-grade prompts",                detail: "Included" },
  { item: "Platform-specific deployment guides",            detail: "ChatGPT · Claude · Gemini" },
  { item: "Content calendar + production system",           detail: "Bonus" },
];

// ─── Who it's for ─────────────────────────────────────────────
export const WHO_ITS_FOR = [
  "Freelancers tired of generic AI output that clients reject",
  "Content creators who want to produce more — without losing voice",
  "Entrepreneurs who use AI daily but feel they're underusing it",
  "Professionals building a personal brand with AI assistance",
  "Students preparing for an AI-first job market",
];

// ─── Why most people fail with AI ─────────────────────────────
export const FAILURE_REASONS = [
  {
    problem: "They prompt like they're Googling",
    solution: "Operators write structured instructions — not search queries.",
  },
  {
    problem: "They accept the first output",
    solution: "The Director Model teaches iteration, context-setting, and output control.",
  },
  {
    problem: "They use generic tools generically",
    solution: "The AI Specialist System builds purpose-built agents for your exact work.",
  },
  {
    problem: "They copy English workflows for Bangla content",
    solution: "The Bangla AI Content Workflow is built from scratch for our language and market.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────
export const FAQS = [
  {
    question: "What exactly is The AI Creator's Blueprint?",
    answer: "It is a structured AI operating system — not a collection of tips. It contains four proprietary frameworks, 30+ production-grade prompts, and workflow systems designed to take you from casual AI user to deliberate AI operator. It is delivered as a premium digital PDF.",
  },
  {
    question: "What language is it in?",
    answer: "The Blueprint is written in English with Bangla-specific examples, cultural context, and a dedicated Bangla AI Content Workflow chapter. It is designed for the Bangladeshi professional who operates in both languages.",
  },
  {
    question: "How do I receive it after payment?",
    answer: "After sending payment via bKash to 01303570330, send your transaction screenshot to our WhatsApp. We verify and deliver your download link manually — typically within 1–3 hours during business hours.",
  },
  {
    question: "Do I need prior AI experience?",
    answer: "No. The Blueprint starts from the operator mindset and builds from there. If you have used ChatGPT before, you will immediately recognise what you have been doing wrong — and how to fix it.",
  },
  {
    question: "Is this just a prompt list?",
    answer: "No. The Blueprint contains 4 named frameworks, operator workflows, platform deployment guides, and a content production system. The prompts are included as applied examples — not as the product itself.",
  },
  {
    question: "What is the refund policy?",
    answer: "We offer no refunds after the product has been delivered. Given the manual delivery process, please read the product description in full before purchasing. If there is a technical issue with your file, we will replace it immediately.",
  },
];

// ─── How payment works ────────────────────────────────────────
export const PAYMENT_STEPS = [
  { step: "01", title: "Send bKash payment", desc: `Send ৳199 to bKash number ${PRODUCT.bkashNumber}. Personal payment only — not merchant.` },
  { step: "02", title: "Open WhatsApp",      desc: "Tap the WhatsApp button below. A prefilled message will open automatically." },
  { step: "03", title: "Send your screenshot", desc: "After payment, send your transaction screenshot through WhatsApp for verification and product delivery." },
  { step: "04", title: "Receive your Blueprint", desc: "We verify and send your download link — typically within 1–3 hours during business hours." },
];
