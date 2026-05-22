import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PRODUCT } from "@/lib/data";

export const metadata: Metadata = { title: "Refund Policy — Human 2.0 Genesis" };

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 section-x">
        <div className="container-max max-w-[720px]">
          <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-text-primary mb-2">Refund Policy</h1>
          <p className="text-sm text-text-tertiary mb-12">Last updated: {new Date().toLocaleDateString("en-BD", { year: "numeric", month: "long", day: "numeric" })}</p>

          {[
            { title: "1. Nature of the product", body: "The AI Creator's Blueprint is a digital product delivered manually via WhatsApp upon payment verification. Because digital goods cannot be returned once accessed, our refund policy is strict but clearly defined below." },
            { title: "2. No refunds after delivery", body: "Once your product has been delivered — that is, once the download link or file has been sent via WhatsApp — no refund will be issued under any circumstances, including change-of-mind, dissatisfaction, or failure to use the product." },
            { title: "3. Technical issues", body: "If your delivered file is corrupted, incomplete, or inaccessible due to a technical error on our part, we will replace the file immediately at no additional cost. Contact us via WhatsApp with a description of the issue." },
            { title: "4. Non-delivery", body: "If you have sent payment and not received your product within 6 hours of a verified WhatsApp message, contact us immediately. We will investigate and either deliver or issue a full refund." },
            { title: "5. How to contact us", body: `WhatsApp: +88 ${PRODUCT.bkashNumber} · We respond within 24 hours.` },
          ].map((s) => (
            <div key={s.title} className="mb-10">
              <h2 className="font-display font-bold text-xl text-text-primary tracking-tight mb-3">{s.title}</h2>
              <p className="text-base text-text-secondary font-light leading-relaxed">{s.body}</p>
            </div>
          ))}

          <a
            href={PRODUCT.support}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-green hover:underline"
          >
            Contact via WhatsApp →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
