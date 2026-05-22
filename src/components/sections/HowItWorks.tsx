import { SectionHeader } from "@/components/ui/SectionHeader";
import { PAYMENT_STEPS } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y section-x border-t border-b border-border-subtle bg-bg-subtle">
      <div className="container-max">
        <SectionHeader
          eyebrow="How to get it"
          heading="Simple. Manual. Verified."
          subtext="No checkout complexity. Pay via bKash, send your screenshot, receive your Blueprint."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle border border-border-subtle rounded-[20px] overflow-hidden">
          {PAYMENT_STEPS.map((step) => (
            <div key={step.step} className="bg-bg-subtle p-9 flex flex-col gap-5">
              <div className="flex items-center gap-2.5 text-2xs font-bold tracking-widest uppercase text-accent-cyan">
                <span className="w-5 h-px bg-accent-cyan/50" />
                Step {step.step}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-text-primary tracking-tight mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
