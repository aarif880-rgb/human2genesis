import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCT } from "@/lib/data";

export function ProductTeaser() {
  return (
    <section className="section-y section-x border-t border-border-subtle bg-bg-subtle">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Book visual */}
          <div className="shrink-0 w-full lg:w-auto flex justify-center">
            <div className="relative">
              {/* Glow behind book */}
              <div className="absolute inset-0 bg-accent-blue/20 blur-[60px] rounded-full" />

              {/* Book mockup */}
              <div className="relative w-64 h-80 rounded-[12px] overflow-hidden border border-border-base shadow-card-hover"
                   style={{ background: "linear-gradient(135deg, #0D1117 0%, #141B24 40%, #0070F3 100%)" }}>

                {/* Grid lines overlay */}
                <div className="absolute inset-0 bg-grid opacity-20" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-7">
                  <div>
                    <div className="text-2xs font-semibold tracking-widest uppercase text-accent-cyan/70 mb-3">Human 2.0 Genesis</div>
                    <div className="font-display font-bold text-white text-xl leading-tight tracking-tight">
                      The AI Creator&apos;s Blueprint
                    </div>
                  </div>

                  <div className="space-y-2">
                    {["Director Model", "PRISM Framework", "AI Specialist System", "Bangla AI Workflow"].map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent-cyan rounded-full" />
                        <span className="text-2xs text-white/60 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-2xl text-white tracking-tight">৳{PRODUCT.price}</span>
                    <span className="text-2xs text-white/40 line-through">৳{PRODUCT.originalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-4">Introducing</span>
            <h2 className="font-display font-bold text-3xl md:text-[42px] tracking-tighter text-text-primary leading-none mb-5">
              The AI Creator&apos;s Blueprint
            </h2>
            <p className="text-lg text-text-secondary font-light leading-relaxed mb-4 max-w-xl">
              Not an ebook. Not a PDF of tips. A structured AI operating system — four proprietary frameworks that install a new way of thinking, prompting, and producing.
            </p>
            <p className="text-base text-text-secondary font-light leading-relaxed mb-8 max-w-xl">
              Designed specifically for Bangladeshi freelancers, creators, and professionals who are done with generic AI advice and ready to operate at a professional level.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
              <Link
                href="/the-ai-creators-blueprint"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-[10px] bg-gradient-accent text-white shadow-glow-blue hover:-translate-y-px transition-all duration-200"
              >
                See What&apos;s Inside
                <ArrowRight size={16} />
              </Link>
              <div className="text-sm text-text-tertiary font-light">
                <span className="text-accent-gold font-semibold text-base">৳{PRODUCT.price}</span>
                <span className="line-through ml-2 text-text-tertiary">৳{PRODUCT.originalPrice}</span>
                <span className="ml-2">Eid Special</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
