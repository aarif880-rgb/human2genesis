import { FAQS } from "@/lib/data";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LandingFAQ() {
  return (
    <section className="section-y section-x border-t border-border-subtle bg-bg-subtle">
      <div className="container-max">
        <SectionHeader eyebrow="FAQ" heading="Before you purchase" subtext="Read these. We believe informed buyers make better customers." />
        <div className="max-w-[760px] mx-auto">
          <FAQAccordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
