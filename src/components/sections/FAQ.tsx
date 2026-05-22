import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQS } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="section-y section-x border-t border-border-subtle bg-bg-subtle">
      <div className="container-max">
        <SectionHeader
          eyebrow="FAQ"
          heading="Common questions"
          subtext="Read before purchasing. We believe in transparency."
        />
        <div className="max-w-[760px] mx-auto">
          <FAQAccordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
