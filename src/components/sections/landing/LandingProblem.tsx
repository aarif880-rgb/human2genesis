export function LandingProblem() {
  return (
    <section className="section-y section-x border-t border-border-subtle bg-bg-subtle">
      <div className="container-max max-w-[800px]">
        <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-4">The real problem</span>
        <h2 className="font-display font-bold text-3xl md:text-[42px] tracking-tighter text-text-primary leading-none mb-8">
          You&apos;re not failing because of the tools.<br />
          <span className="text-text-secondary font-light">You&apos;re failing because of the approach.</span>
        </h2>

        <div className="space-y-6 text-base text-text-secondary font-light leading-relaxed">
          <p>
            Most people use AI the same way they used Google — type a question, accept whatever comes back. The output is generic. The work still feels like work. The results are forgettable.
          </p>
          <p>
            Operators don&apos;t do this. They set context. They define roles. They architect outputs before they prompt. They have systems — not habits.
          </p>
          <p className="text-text-primary font-medium text-lg">
            The AI Creator&apos;s Blueprint installs those systems.
          </p>
        </div>
      </div>
    </section>
  );
}
