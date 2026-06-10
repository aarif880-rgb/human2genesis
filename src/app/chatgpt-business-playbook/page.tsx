import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlaybookPreview } from "@/components/sections/landing/PlaybookPreview";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { PLAYBOOK } from "@/lib/data";

export const metadata: Metadata = {
  title: "ChatGPT Business Playbook — Human 2.0 Genesis",
  description:
    "50 Real Business Systems for Bangladesh SMEs. Deploy ChatGPT inside your actual operations — Marketing, Sales, Operations, Support. Bangla + English. ৳199.",
};

const WA_LINK = PLAYBOOK.whatsapp;

const BEFORE = [
  "ChatGPT randomly use করো — কোনো system নেই",
  "প্রতিবার scratch থেকে শুরু",
  "Nice-to-have, permanent infrastructure নয়",
  "Hundreds of prompts saved — কোনো deployment নেই",
  "Business operations still manual",
];

const AFTER = [
  "ChatGPT তোমার business-এর permanent operational layer",
  "Documented systems যা বারবার deploy হয়",
  "Marketing, Sales, Ops, Support — সব automated",
  "H2G Operator Loop™ চলছে পুরো business-এ",
  "প্রতি সপ্তাহে একটা নতুন system deploy",
];

const WHO_FOR = [
  "Bangladesh-এ ব্যবসা করছ এমন যে কেউ",
  "SME owners যারা operations streamline করতে চান",
  "Marketing agencies এবং freelancers",
  "Coaching centers, restaurants, real estate — যেকোনো business",
  "যারা ChatGPT ব্যবহার করছ কিন্তু results পাচ্ছ না",
];

const WHO_NOT = [
  "যারা শুধু prompts copy-paste করতে চান",
  "Silicon Valley startup বা SaaS company",
  "যারা পড়ে রাখবে, deploy করবে না",
  "যারা AI hype চান, system চান না",
];

const FAQS = [
  {
    q: "আমার business কি এই playbook-এর জন্য?",
    a: "Fabrication, Construction, Real Estate, Interior Design, Restaurant, Coaching Center, F-Commerce, Marketing Agency, Printing, Garments, Freelancing, Local Service — এই ধরনের যেকোনো Bangladesh-based business এই playbook-এর জন্য।",
  },
  {
    q: "ChatGPT already use করি। এটা আলাদা কী দেবে?",
    a: "ChatGPT use করা আর ChatGPT deploy করা আলাদা। এই playbook তোমাকে Consumer থেকে Operator-এ নিয়ে যাবে — specific business functions-এ documented systems তৈরি করতে শেখাবে।",
  },
  {
    q: "কতটুকু সময় লাগবে implement করতে?",
    a: "প্রতি সপ্তাহে একটা system deploy করো। ৮ সপ্তাহে তোমার business fundamentally different হবে।",
  },
  {
    q: "Claude বা Gemini দিয়েও কাজ করবে?",
    a: "হ্যাঁ। Principles এবং frameworks tool-agnostic। ChatGPT, Claude, Gemini — যেকোনো AI-তে apply হয়।",
  },
  {
    q: "PDF কীভাবে পাব?",
    a: "bKash-এ payment করার পর WhatsApp-এ screenshot পাঠাও। ১–৩ ঘণ্টার মধ্যে PDF link পাবে। Business hours: 9AM–9PM.",
  },
];

export default function PlaybookPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">

        {/* Hero */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid mask-radial-hero pointer-events-none" />
          <div className="absolute -top-32 -left-40 w-[600px] h-[500px] bg-accent-gold/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full px-3.5 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse-dot" />
              <span className="text-2xs font-semibold tracking-widest uppercase text-accent-gold">
                {PLAYBOOK.urgency} — ৳{PLAYBOOK.price} (was ৳{PLAYBOOK.originalPrice})
              </span>
            </div>

            <h1
              className="font-display font-extrabold leading-tight tracking-tighter mb-4"
              style={{ fontSize: "clamp(30px, 5.5vw, 60px)" }}
            >
              তোমার ব্যবসা ChatGPT
              <br />
              <span className="text-accent-gold">ভুলভাবে ব্যবহার করছে।</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary font-light max-w-xl mx-auto leading-relaxed mb-10">
              ChatGPT Business Playbook — 50 real business systems for Bangladesh SMEs.
              Deploy ChatGPT inside your actual operations, not just content.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-[10px] text-white hover:-translate-y-px transition-all duration-200"
                style={{ background: "#25D366", boxShadow: "0 8px 32px rgba(37,211,102,0.35)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order on WhatsApp — ৳{PLAYBOOK.price}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {[
                "✓ Instant WhatsApp delivery",
                "✓ Bangla + English",
                "✓ 113 pages · 50 systems",
                "✓ Works with ChatGPT, Claude & Gemini",
              ].map((t) => (
                <span key={t} className="text-xs text-text-tertiary font-medium">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="relative px-6 py-20 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-2xs font-semibold tracking-widest uppercase text-accent-gold mb-3 block">The Difference</span>
              <h2 className="font-display font-extrabold tracking-tight leading-tight" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
                একটা System-এর পার্থক্য
              </h2>
              <p className="text-text-secondary text-sm mt-3 font-light">Same tool. Completely different business outcomes.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="font-display font-bold text-base text-red-400 uppercase tracking-wide">✗ ChatGPT Consumer</span>
                </div>
                <ul className="space-y-3">
                  {BEFORE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-red-500/60 mt-0.5 shrink-0">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent-gold/5 border border-accent-gold/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="font-display font-bold text-base text-accent-gold uppercase tracking-wide">✓ ChatGPT Operator</span>
                </div>
                <ul className="space-y-3">
                  {AFTER.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-accent-gold mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Preview */}
        <PlaybookPreview />

        {/* What's Inside */}
        <section className="px-6 py-20 border-t border-border-subtle">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-2xs font-semibold tracking-widest uppercase text-accent-gold mb-3 block">Contents</span>
              <h2 className="font-display font-extrabold tracking-tight" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
                What&apos;s Inside
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { part: "Introduction", desc: "Consumer vs Operator mindset · H2G AI Stack Framework™" },
                { part: "Part 1 — Quick Start", desc: "Deploy your first system this week" },
                { part: "Part 2 — Marketing", desc: "Content, ads, social media — AI-powered" },
                { part: "Part 3 — Sales", desc: "Lead handling, follow-up, proposals" },
                { part: "Part 4 — Operations", desc: "Workflows, SOPs, team management" },
                { part: "Part 5 — Support", desc: "Customer service systems at scale" },
                { part: "Part 6 — Leadership", desc: "Decision-making and strategic planning" },
                { part: "4 Proprietary Frameworks", desc: "H2G Operator Loop™ · Deployment Matrix™ · TLS™ · AI Stack™" },
              ].map((item) => (
                <div key={item.part} className="flex gap-4 p-4 bg-bg-surface border border-border-subtle rounded-xl">
                  <div>
                    <p className="text-sm font-semibold text-text-primary mb-1">{item.part}</p>
                    <p className="text-xs text-text-secondary font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for / not for */}
        <section className="px-6 py-20 border-t border-border-subtle">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-5 text-accent-gold">✓ এটা তোমার জন্য যদি —</h3>
              <ul className="space-y-3">
                {WHO_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-accent-gold shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-5 text-text-tertiary">✗ এটা তোমার জন্য না যদি —</h3>
              <ul className="space-y-3">
                {WHO_NOT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-text-tertiary shrink-0 mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-6 py-20 border-t border-border-subtle">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-2xs font-semibold tracking-widest uppercase text-accent-gold mb-3 block">FAQ</span>
              <h2 className="font-display font-extrabold tracking-tight" style={{ fontSize: "clamp(24px, 4vw, 38px)" }}>
                Common Questions
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-bg-surface border border-border-subtle rounded-xl p-5">
                  <p className="font-semibold text-sm text-text-primary mb-2">{faq.q}</p>
                  <p className="text-sm text-text-secondary font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment */}
        <section id="payment" className="section-y section-x border-t border-border-subtle bg-bg-subtle">
          <div className="container-max max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-gold mb-4">
                {PLAYBOOK.urgency}
              </span>
              <div className="flex items-end justify-center gap-4 mb-4">
                <span className="font-display font-extrabold text-6xl md:text-7xl text-text-primary tracking-tighter leading-none">
                  ৳{PLAYBOOK.price}
                </span>
                <div className="mb-3">
                  <span className="block text-2xl text-text-tertiary line-through font-light">৳{PLAYBOOK.originalPrice}</span>
                  <span className="block text-sm text-accent-gold font-medium">Save ৳{PLAYBOOK.originalPrice - PLAYBOOK.price}</span>
                </div>
              </div>
              <p className="text-sm text-text-secondary font-light">One-time payment · Delivered via WhatsApp · No subscription</p>
            </div>

            <div className="bg-bg-surface border border-border-base rounded-[20px] p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
              <div className="text-center mb-8">
                <p className="text-2xs font-semibold tracking-widest uppercase text-text-tertiary mb-3">Step 1 — bKash payment</p>
                <div className="inline-flex flex-col items-center gap-1 bg-bg-muted border border-border-base rounded-[12px] px-8 py-5">
                  <span className="text-2xs text-text-tertiary font-medium tracking-wide">bKash Number</span>
                  <span className="font-display font-bold text-3xl text-text-primary tracking-tight">{PLAYBOOK.bkashNumber}</span>
                  <span className="text-xs text-text-tertiary">(Personal)</span>
                </div>
                <p className="text-sm text-text-secondary font-light mt-4">
                  Amount: <span className="text-text-primary font-semibold">৳{PLAYBOOK.price}</span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xs font-semibold tracking-widest uppercase text-text-tertiary mb-4">Step 2 — Send screenshot via WhatsApp</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 text-base font-semibold px-6 py-4 rounded-[12px] transition-all duration-200 hover:-translate-y-px"
                  style={{ background: "#25D366", color: "#fff" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order on WhatsApp
                </a>
                <p className="text-xs text-text-tertiary mt-3 font-light">
                  Send your bKash screenshot. We deliver your PDF within 1–3 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <FloatingWhatsApp href={WA_LINK} productName="ChatGPT Business Playbook" />
      <StickyMobileCTA
        href={WA_LINK}
        label="Order on WhatsApp"
        price={PLAYBOOK.price}
        productName="ChatGPT Business Playbook"
      />
      <Footer />
    </>
  );
