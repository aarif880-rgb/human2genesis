import { ArrowRight } from "lucide-react";

const services = [
  {
    tag:   "Consulting",
    title: "AI Strategy Session",
    desc:  "90-minute deep-dive. We map exactly which AI tools and automations will generate ROI for your specific business.",
    cta:   "Apply for a session",
  },
  {
    tag:   "Done-for-you",
    title: "Automation Build",
    desc:  "We design and deploy your AI workflows in n8n or Make.com — WhatsApp, email, CRM, reporting. You approve, we build.",
    cta:   "Request a quote",
  },
  {
    tag:   "Corporate Training",
    title: "Team AI Workshop",
    desc:  "Half-day or full-day workshops for SME teams and corporate departments. Available in Bangla or English.",
    cta:   "Book for your team",
  },
];

export function ServiceTeaser() {
  return (
    <section id="services" className="section-y section-x">
      <div className="container-max">

        {/* Minimal header */}
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <span className="block text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-3">
              Services
            </span>
            <h2 className="font-display font-bold text-3xl md:text-[38px] tracking-tighter text-text-primary">
              Done-for-you AI implementation
            </h2>
          </div>
          <p className="text-sm text-text-secondary font-light max-w-sm">
            For businesses who need results faster than self-study allows. Limited availability.
          </p>
        </div>

        {/* Compact service row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle rounded-[16px] overflow-hidden">
          {services.map((s) => (
            <div key={s.tag} className="bg-bg-surface p-8 flex flex-col gap-4 hover:bg-bg-muted transition-colors group">
              <span className="text-2xs font-semibold tracking-widest uppercase text-text-tertiary">
                {s.tag}
              </span>
              <h3 className="font-display font-bold text-xl text-text-primary tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed flex-1">
                {s.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:gap-3 transition-all duration-200 mt-2"
              >
                {s.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
