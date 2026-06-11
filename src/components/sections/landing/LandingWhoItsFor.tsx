import { WHO_ITS_FOR } from "@/lib/data";

export function LandingWhoItsFor() {
  return (
    <section className="section-y section-x">
      <div className="container-max max-w-[800px]">
        <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-4">Who it&apos;s for</span>
        <h2 className="font-display font-bold text-3xl md:text-[38px] tracking-tighter text-text-primary leading-none mb-10">
          This is for you if you&apos;re done<br />with generic AI advice.
        </h2>

        <div className="space-y-3">
          {WHO_ITS_FOR.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-bg-surface border border-border-subtle rounded-[12px]">
              <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full shrink-0" />
              <p className="text-base text-text-primary font-light">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-bg-surface border border-accent-red/20 rounded-[12px]">
          <p className="text-sm text-text-secondary font-light leading-relaxed">
            <span className="text-accent-red font-medium">This is NOT for you</span> if you are looking for a quick shortcut, a list of prompts to copy without understanding, or a magic tool that does the thinking for you. The Blueprint requires engagement and application.
          </p>
        </div>
      </div>
    </section>
  );
}
