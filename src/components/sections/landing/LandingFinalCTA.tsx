import { PRODUCT } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { ShieldCheck } from "lucide-react";

export function LandingFinalCTA() {
  return (
    <section className="section-y section-x relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-accent-blue/8 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-grid mask-radial-hero pointer-events-none opacity-40" />

      <div className="relative z-10 container-max text-center max-w-[700px]">
        <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-gold mb-5">{PRODUCT.urgency}</span>
        <h2 className="font-display font-extrabold leading-none tracking-tighter mb-5 text-text-primary text-4xl md:text-[52px]">
          Learn AI Like an Operator.
        </h2>
        <p className="text-base text-text-secondary font-light max-w-md mx-auto mb-10">
          Four frameworks. Thirty prompts. One operating system. ৳{PRODUCT.price} — Launch Special.
        </p>

        <a
          href="#payment"
          className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-[10px] bg-gradient-accent text-white shadow-glow-blue hover:shadow-glow-blue-lg hover:-translate-y-px transition-all duration-200 mb-6"
        >
          Get Instant Access
          <ArrowRight size={16} />
        </a>

        <div className="flex items-center justify-center gap-2 text-sm text-text-tertiary font-light">
          <ShieldCheck size={14} className="text-accent-green" />
          No refunds after delivery. Read our <a href="/refund" className="underline hover:text-text-secondary ml-1">refund policy</a> before purchasing.
        </div>
      </div>
    </section>
  );
}
