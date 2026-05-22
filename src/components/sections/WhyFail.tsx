import { FAILURE_REASONS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyFail() {
  return (
    <section className="section-y section-x border-t border-border-subtle bg-bg-subtle">
      <div className="container-max">
        <SectionHeader
          eyebrow="The problem"
          heading="Why most people fail with AI"
          subtext="It's not the tools. It's the mental model."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle rounded-[20px] overflow-hidden">
          {FAILURE_REASONS.map((r, i) => (
            <div key={i} className="bg-bg-subtle p-8 md:p-10 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <span className="mt-1 w-5 h-5 rounded-full bg-accent-red/15 text-accent-red text-xs font-bold flex items-center justify-center shrink-0">✕</span>
                <p className="text-base font-medium text-text-primary/70 line-through decoration-text-tertiary">
                  {r.problem}
                </p>
              </div>
              <div className="flex items-start gap-4 pl-9">
                <p className="text-sm text-text-secondary font-light leading-relaxed">
                  <span className="text-accent-cyan font-medium">→ </span>
                  {r.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
