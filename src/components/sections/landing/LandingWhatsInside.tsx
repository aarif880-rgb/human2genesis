import { WHATS_INSIDE } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export function LandingWhatsInside() {
  return (
    <section className="section-y section-x">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — what's inside list */}
          <div className="flex-1">
            <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-4">What&apos;s inside</span>
            <h2 className="font-display font-bold text-3xl md:text-[38px] tracking-tighter text-text-primary leading-none mb-8">
              Everything in the Blueprint
            </h2>

            <div className="space-y-4">
              {WHATS_INSIDE.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-bg-surface border border-border-subtle rounded-[12px] hover:border-border-base transition-colors">
                  <CheckCircle size={18} className="text-accent-cyan mt-0.5 shrink-0" />
                  <div className="flex-1 flex items-center justify-between gap-4 flex-wrap">
                    <span className="text-sm font-medium text-text-primary">{item.item}</span>
                    <span className="text-2xs text-text-tertiary font-medium tracking-wide shrink-0">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — chapter breakdown visual */}
          <div className="shrink-0 w-full lg:w-72">
            <div className="bg-bg-surface border border-border-base rounded-[16px] overflow-hidden">
              <div className="bg-bg-muted border-b border-border-subtle px-6 py-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-text-tertiary">Chapter structure</span>
              </div>
              {[
                { num: "01", title: "The Operator Mindset",         sub: "Director Model" },
                { num: "02", title: "Structured Prompt Engineering", sub: "PRISM Framework" },
                { num: "03", title: "Building Your AI Team",        sub: "AI Specialist System" },
                { num: "04", title: "Bangla Content at Scale",      sub: "Bangla AI Workflow" },
                { num: "05", title: "30+ Operator Prompts",         sub: "Applied reference" },
                { num: "06", title: "Platform Deployment Guides",   sub: "ChatGPT · Claude · Gemini" },
              ].map((ch) => (
                <div key={ch.num} className="flex items-start gap-4 px-6 py-4 border-b border-border-subtle last:border-0 hover:bg-bg-muted transition-colors">
                  <span className="font-display font-bold text-xs text-text-tertiary mt-0.5 shrink-0">{ch.num}</span>
                  <div>
                    <p className="text-sm font-medium text-text-primary leading-tight">{ch.title}</p>
                    <p className="text-2xs text-accent-cyan mt-0.5 font-medium">{ch.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
