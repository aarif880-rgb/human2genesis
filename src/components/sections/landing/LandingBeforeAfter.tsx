const BEFORE = [
  "Random prompting — generic results",
  "Starting from zero every single time",
  "Watching tutorials, still confused",
  "3 tools open, no system connecting them",
  "No idea how to earn from AI",
  "\"Let me try this...\" every session",
];

const AFTER = [
  "Structured direction — professional output",
  "Prompt library that grows with every session",
  "Clear mental model for any AI tool",
  "Text AI + Image AI + Video AI as one team",
  "Freelance & content monetization direction",
  "\"I know exactly what to prompt.\"",
];

export function LandingBeforeAfter() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/3 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-3 block">
            The Difference
          </span>
          <h2
            className="font-display font-extrabold tracking-tight leading-tight"
            style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
          >
            একটা System-এর পার্থক্য
          </h2>
          <p className="text-text-secondary text-sm mt-3 font-light">
            Same tools. Same free accounts. Completely different results.
          </p>
        </div>

        {/* Before / After Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* BEFORE */}
          <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-red-400 text-lg font-bold">✗</span>
              <span className="font-display font-bold text-base text-red-400 uppercase tracking-wide">
                AI User
              </span>
            </div>
            <ul className="space-y-3">
              {BEFORE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-red-500/60 mt-0.5 shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AFTER */}
          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-accent-cyan text-lg font-bold">✓</span>
              <span className="font-display font-bold text-base text-accent-cyan uppercase tracking-wide">
                AI Operator
              </span>
            </div>
            <ul className="space-y-3">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-accent-cyan mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <p className="text-center text-text-tertiary text-sm mt-8 font-light">
          The only variable is the system.{" "}
          <a
            href="/the-ai-creators-blueprint#payment"
            className="text-accent-cyan underline underline-offset-2 hover:text-white transition-colors"
          >
            Get the system →
          </a>
        </p>
      </div>
    </section>
  );
}
