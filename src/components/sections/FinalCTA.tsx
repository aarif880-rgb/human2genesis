import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCT } from "@/lib/data";

export function FinalCTA() {
  return (
    <section className="section-y section-x relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-accent-blue/8 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-grid mask-radial-hero pointer-events-none opacity-50" />

      <div className="relative z-10 container-max text-center">
        <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-gold mb-5">
          {PRODUCT.urgency}
        </span>
        <h2 className="font-display font-extrabold leading-none tracking-tighter mb-5 text-text-primary"
            style={{ fontSize: "clamp(32px, 5vw, 58px)" }}>
          The AI economy is here.<br />
          <span className="text-gradient-accent">Are you operating or observing?</span>
        </h2>
        <p className="text-base md:text-lg text-text-secondary font-light max-w-md mx-auto mb-4">
          Get The AI Creator&apos;s Blueprint today. Four frameworks. One operating system.
        </p>
        <p className="text-sm text-text-tertiary mb-12">
          <span className="text-accent-gold font-semibold text-lg">৳{PRODUCT.price}</span>
          <span className="line-through ml-2">৳{PRODUCT.originalPrice}</span>
          <span className="ml-2">· Launch Special Offer</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/the-ai-creators-blueprint"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-[10px] bg-gradient-accent text-white shadow-glow-blue hover:shadow-glow-blue-lg hover:-translate-y-px transition-all duration-200"
          >
            Get Instant Access
            <ArrowRight size={16} />
          </Link>
          <a
            href={PRODUCT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Questions? WhatsApp us →
          </a>
        </div>
      </div>
    </section>
  );
}
