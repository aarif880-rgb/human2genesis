import { FRAMEWORKS } from "@/lib/data";

export function LandingFrameworks() {
  return (
    <section className="section-y section-x border-t border-border-subtle bg-bg-subtle">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-4">Proprietary systems</span>
          <h2 className="font-display font-bold text-3xl md:text-[42px] tracking-tighter text-text-primary leading-none mb-4">
            Four frameworks. One operating system.
          </h2>
          <p className="text-base text-text-secondary font-light max-w-xl mx-auto">
            Each framework is a complete methodology — named, structured, and designed for immediate deployment.
          </p>
        </div>

        <div className="space-y-4">
          {FRAMEWORKS.map((f, i) => (
            <div key={f.id} className="group relative bg-bg-surface border border-border-subtle rounded-[16px] p-8 md:p-10 overflow-hidden hover:border-border-base transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-[12px] bg-bg-muted border border-border-subtle flex items-center justify-center text-2xl">
                    {f.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xs font-bold tracking-widest uppercase text-text-tertiary">Framework 0{i + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary tracking-tight mb-3">{f.name}</h3>
                  <p className="text-base text-text-secondary font-light leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
