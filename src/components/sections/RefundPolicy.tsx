import { ShieldCheck } from "lucide-react";
import { PRODUCT } from "@/lib/data";
const terms = [
  { ok: true,  text: "Immediate file replacement if your delivered file is corrupted or incomplete" },
  { ok: true,  text: "Full resolution for technical issues preventing access — resolved within 24 hours" },
  { ok: false, text: "No refunds after the product has been delivered via WhatsApp" },
  { ok: false, text: "No refunds for change-of-mind after delivery" },
  { ok: false, text: "No partial refunds under any circumstances" },
];

export function RefundPolicy() {
  return (
    <section className="section-x py-14 border-t border-border-subtle">
      <div className="container-max">
        <div className="relative overflow-hidden bg-bg-surface border border-border-base rounded-[16px] p-8 md:p-12">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-[12px] bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green">
                <ShieldCheck size={22} />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary tracking-tight mb-2">
                Refund Policy
              </h3>
              <p className="text-sm text-text-secondary font-light mb-7 max-w-xl leading-relaxed">
                This is a digital product delivered manually via WhatsApp. Because delivery is confirmed by screenshot verification, refunds are not available after delivery. Please read the product description fully before purchasing.
              </p>

              <div className="flex flex-col gap-3">
                {terms.map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`mt-0.5 text-xs font-bold shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      t.ok ? "bg-accent-green/15 text-accent-green" : "bg-accent-red/15 text-accent-red"
                    }`}>
                      {t.ok ? "✓" : "✕"}
                    </span>
                    <span className="text-sm text-text-secondary font-light leading-snug">{t.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-2 items-start md:items-end">
              <a href={PRODUCT.support} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent-green hover:underline">
                WhatsApp Support →
              </a>
              <span className="text-xs text-text-tertiary">We respond within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
