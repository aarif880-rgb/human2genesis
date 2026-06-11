"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlaybookPreview } from "@/components/sections/landing/PlaybookPreview";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { PLAYBOOK } from "@/lib/data";

declare global {
  interface Window {
    fbq: (event: string, name: string, data?: Record<string, unknown>) => void;
  }
}

const WA = PLAYBOOK.whatsapp;

const BEFORE = [
  "ChatGPT randomly use করো — কোনো system নেই",
  "প্রতিবার scratch থেকে শুরু",
  "Nice-to-have, permanent infrastructure নয়",
  "Business operations still manual",
];

const AFTER = [
  "ChatGPT তোমার business-এর permanent operational layer",
  "Documented systems যা বারবার deploy হয়",
  "Marketing, Sales, Ops, Support — সব AI-powered",
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
  "যারা পড়ে রাখবে, deploy করবে না",
  "যারা AI hype চান, system চান না",
];

const FAQS = [
  { q: "আমার business কি এই playbook-এর জন্য?", a: "Fabrication, Construction, Real Estate, Restaurant, Coaching Center, F-Commerce, Marketing Agency, Freelancing — এই ধরনের যেকোনো Bangladesh-based business এই playbook-এর জন্য।" },
  { q: "ChatGPT already use করি। এটা আলাদা কী দেবে?", a: "ChatGPT use করা আর ChatGPT deploy করা আলাদা। এই playbook তোমাকে Consumer থেকে Operator-এ নিয়ে যাবে।" },
  { q: "কতটুকু সময় লাগবে implement করতে?", a: "প্রতি সপ্তাহে একটা system deploy করো। ৮ সপ্তাহে তোমার business fundamentally different হবে।" },
  { q: "Claude বা Gemini দিয়েও কাজ করবে?", a: "হ্যাঁ। Principles এবং frameworks tool-agnostic। ChatGPT, Claude, Gemini — যেকোনো AI-তে apply হয়।" },
  { q: "PDF কীভাবে পাব?", a: "bKash-এ payment করার পর WhatsApp-এ screenshot পাঠাও। ১–৩ ঘণ্টার মধ্যে PDF link পাবে।" },
];

export default function PlaybookPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: "ChatGPT Business Playbook",
        content_type: "product",
        value: 1.99,
        currency: "USD",
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">

        {/* Hero */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid mask-radial-hero pointer-events-none" />
          <div className="absolute -top-32 -left-40 w-[600px] h-[500px] bg-accent-gold/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full px-3.5 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse-dot" />
              <span className="text-2xs font-semibold tracking-widest uppercase text-accent-gold">
                {PLAYBOOK.urgency} — ৳{PLAYBOOK.price} (was ৳{PLAYBOOK.originalPrice})
              </span>
            </div>
            <h1 className="font-display font-extrabold leading-tight tracking-tighter mb-4" style={{ fontSize: "clamp(30px, 5.5vw, 60px)" }}>
              তোমার ব্যবসা ChatGPT
              <br />
              <span className="text-accent-gold">ভুলভাবে ব্যবহার করছে।</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-light max-w-xl mx-auto leading-relaxed mb-10">
              50 real business systems for Bangladesh SMEs. Deploy ChatGPT inside your actual operations — not just content.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-[10px] text-white hover:-translate-y-px transition-all duration-200 mb-10"
              style={{ background: "#25D366", boxShadow: "0 8px 32px rgba(37,211,102,0.35)" }}>
              Order on WhatsApp — ৳{PLAYBOOK.price}
            </a>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {["✓ Instant WhatsApp delivery", "✓ Bangla + English", "✓ 113 pages · 50 systems", "✓ Works with ChatGPT, Claude & Gemini"].map((t) => (
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
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6">
                <p className="font-display font-bold text-base text-red-400 uppercase tracking-wide mb-5">✗ ChatGPT Consumer</p>
                <ul className="space-y-3">
                  {BEFORE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-red-500/60 mt-0.5 shrink-0">✗</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent-gold/5 border border-accent-gold/20 rounded-2xl p-6">
                <p className="font-display font-bold text-base text-accent-gold uppercase tracking-wide mb-5">✓ ChatGPT Operator</p>
                <ul className="space-y-3">
                  {AFTER.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-accent-gold mt-0.5 shrink-0">✓</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Preview */}
        <PlaybookPreview />

        {/* Who it's for / not for */}
        <section className="px-6 py-20 border-t border-border-subtle">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-5 text-accent-gold">✓ এটা তোমার জন্য যদি —</h3>
              <ul className="space-y-3">
                {WHO_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-accent-gold shrink-0 mt-0.5">✓</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-5 text-text-tertiary">✗ এটা তোমার জন্য না যদি —</h3>
              <ul className="space-y-3">
                {WHO_NOT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-text-tertiary shrink-0 mt-0.5">✗</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 border-t border-border-subtle">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-2xs font-semibold tracking-widest uppercase text-accent-gold mb-3 block">FAQ</span>
              <h2 className="font-display font-extrabold tracking-tight" style={{ fontSize: "clamp(24px, 4vw, 38px)" }}>Common Questions</h2>
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
              <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-gold mb-4">{PLAYBOOK.urgency}</span>
              <div className="flex items-end justify-center gap-4 mb-4">
                <span className="font-display font-extrabold text-6xl md:text-7xl text-text-primary tracking-tighter leading-none">৳{PLAYBOOK.price}</span>
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
                <p className="text-sm text-text-secondary font-light mt-4">Amount: <span className="text-text-primary font-semibold">৳{PLAYBOOK.price}</span></p>
              </div>
              <div className="text-center">
                <p className="text-2xs font-semibold tracking-widest uppercase text-text-tertiary mb-4">Step 2 — Send screenshot via WhatsApp</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 text-base font-semibold px-6 py-4 rounded-[12px] transition-all duration-200 hover:-translate-y-px"
                  style={{ background: "#25D366", color: "#fff" }}>
                  Open WhatsApp to Send Screenshot
                </a>
                <p className="text-xs text-text-tertiary mt-3 font-light">Send your bKash screenshot. We deliver your PDF within 1–3 hours.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <FloatingWhatsApp href={WA} productName="ChatGPT Business Playbook" />
      <StickyMobileCTA href={WA} label="Order on WhatsApp" price={PLAYBOOK.price} productName="ChatGPT Business Playbook" />
      <Footer />
    </>
  );
}
