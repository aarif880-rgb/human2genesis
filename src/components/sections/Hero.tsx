import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCT } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden">

      <div className="absolute inset-0 bg-grid mask-radial-hero pointer-events-none" />
      <div className="absolute -top-32 -left-40 w-[600px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 -right-20 w-[500px] h-[350px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full px-3.5 py-1.5 mb-10 animate-fade-up">
          <span className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse-dot" />
          <span className="text-2xs font-semibold tracking-widest uppercase text-accent-gold">
            {PRODUCT.urgency} — ৳{PRODUCT.price} only
          </span>
        </div>

        <h1 className="font-display font-extrabold leading-none tracking-tighter mb-6 animate-fade-up delay-100"
            style={{ fontSize: "clamp(40px, 6.5vw, 76px)" }}>
          Stop Using AI<br />
          Like a Beginner.
        </h1>

        <p className="text-xl md:text-2xl font-display font-semibold tracking-tight text-gradient-accent mb-6 animate-fade-up delay-200">
          Learn how operators actually use it.
        </p>

        <p className="text-base md:text-lg text-text-secondary font-light max-w-[540px] mx-auto leading-relaxed mb-12 animate-fade-up delay-300">
          The AI Creator&apos;s Blueprint is a structured AI operating system — four proprietary frameworks that transform how you think, prompt, and produce with AI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-400">
          <Link
            href="/the-ai-creators-blueprint#payment"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-[10px] bg-gradient-accent text-white shadow-glow-blue hover:shadow-glow-blue-lg hover:-translate-y-px transition-all duration-200"
          >
            Get Instant Access
            <ArrowRight size={18} />
          </Link>
          <div className="flex items-center gap-2.5 text-sm text-text-secondary font-light">
            <span className="line-through text-text-tertiary">৳{PRODUCT.originalPrice}</span>
            <span className="text-accent-gold font-semibold text-base">৳{PRODUCT.price}</span>
            <span>· via bKash</span>
          </div>
        </div>

        <div className="animate-fade-up delay-500">
          <div className="w-full max-w-[680px] mx-auto h-px bg-gradient-to-r from-transparent via-border-base to-transparent mb-8" />
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { value: "4",          label: "Proprietary frameworks"  },
              { value: "30+",        label: "Operator-grade prompts"  },
              { value: "English",    label: "English-first, Bangla-aware" },
              { value: "Instant",    label: "WhatsApp delivery"       },
            ].map((item) => (
              <div key={item.value} className="text-center">
                <div className="font-display font-bold text-xl text-text-primary tracking-tight leading-none mb-1">{item.value}</div>
                <div className="text-2xs text-text-tertiary tracking-widest uppercase font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
