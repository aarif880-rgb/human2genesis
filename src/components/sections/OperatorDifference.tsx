export function OperatorDifference() {
  const rows = [
    { beginner: "Types a vague question",           operator: "Sets precise context, role, and mandate"    },
    { beginner: "Accepts first output",              operator: "Iterates with structured follow-up"          },
    { beginner: "Uses AI for one-off tasks",         operator: "Builds repeatable AI systems and workflows"  },
    { beginner: "Generic prompts, generic results",  operator: "Proprietary frameworks, consistent quality" },
    { beginner: "Treats AI as a search engine",      operator: "Deploys AI as a production team"            },
  ];

  return (
    <section className="section-y section-x">
      <div className="container-max">

        <div className="text-center mb-14">
          <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-3.5">The distinction</span>
          <h2 className="font-display font-bold text-text-primary leading-none tracking-tighter text-3xl md:text-[44px]">
            What makes operators different
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-subtle border border-border-subtle rounded-[20px] overflow-hidden">
          {/* Headers */}
          <div className="bg-bg-muted px-8 py-4 border-b border-border-subtle">
            <span className="text-xs font-semibold tracking-wider uppercase text-accent-red/80">Beginner</span>
          </div>
          <div className="bg-bg-muted px-8 py-4 border-b border-border-subtle">
            <span className="text-xs font-semibold tracking-wider uppercase text-accent-cyan">Operator</span>
          </div>

          {rows.map((row, i) => (
            <>
              <div key={`b-${i}`} className="bg-bg-surface px-8 py-5 border-b border-border-subtle last:border-0">
                <p className="text-sm text-text-tertiary font-light">{row.beginner}</p>
              </div>
              <div key={`o-${i}`} className="bg-bg-muted px-8 py-5 border-b border-border-subtle last:border-0">
                <p className="text-sm text-text-primary font-medium">{row.operator}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
