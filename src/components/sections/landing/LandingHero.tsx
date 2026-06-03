import { ArrowRight } from "lucide-react";
import { PRODUCT } from "@/lib/data";

export function LandingHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-radial-hero pointer-events-none" />
      <div className="absolute -top-32 -left-40 w-[600px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full px-3.5 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse-dot" />
          <span className="text-2xs font-semibold tracking-widest uppercase text-accent-gold">
            {PRODUCT.urgency} — ৳{PRODUCT.price} (was ৳{PRODUCT.originalPrice})
          </span>
        </div>

        {/* Mirror Tone Headline */}
        <h1
          className="font-display font-extrabold leading-tight tracking-tighter mb-4"
          style={{ fontSize: "clamp(32px, 5.5vw, 62px)" }}
        >
          তুমি AI ব্যবহার করো।
          <br />
          <span className="text-gradient-accent">
            কিন্তু AI তোমার জন্য কাজ করে না।
          </span>
        </h1>

        <p className="text-lg md:text-xl text-text-secondary font-light max-w-xl mx-auto leading-relaxed mb-10">
          The AI Creator&apos;s Blueprint teaches the systems behind professional
          AI results — not just prompts. Used with ChatGPT, Claude &amp; Gemini.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="/the-ai-creators-blueprint#payment"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-[10px] bg-gradient-accent text-white shadow-glow-blue hover:shadow-glow-blue-lg hover:-translate-y-px transition-all duration-200"
          >
            আমি Ready — ৳{PRODUCT.price}
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {[
            "✓ Instant WhatsApp delivery",
            "✓ Bangla + English",
            "✓ Lifetime access",
            "✓ Works with ChatGPT, Claude & Gemini",
            "✓ 7-Day Satisfaction Guarantee",
          ].map((t) => (
            <span
              key={t}
              className="text-xs text-text-tertiary font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
