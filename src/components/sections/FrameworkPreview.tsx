import { FRAMEWORKS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FrameworkPreview() {
  return (
    <section className="section-y section-x">
      <div className="container-max">
        <SectionHeader
          eyebrow="Inside the Blueprint"
          heading="Four proprietary frameworks"
          subtext="Each framework is a complete system — not a tip, not a template. A methodology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FRAMEWORKS.map((f, i) => (
            <div
              key={f.id}
              className="relative bg-bg-surface border border-border-subtle rounded-[16px] p-8 overflow-hidden group hover:border-border-base hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number watermark */}
              <div className="absolute top-5 right-6 font-display font-extrabold text-6xl text-text-primary/[0.04] leading-none select-none">
                0{i + 1}
              </div>

              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-3xl mb-5">{f.icon}</div>
              <h3 className="font-display font-bold text-xl text-text-primary tracking-tight mb-3">
                {f.name}
              </h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
