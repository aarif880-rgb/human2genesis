import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PRODUCT } from "@/lib/data";

export const metadata: Metadata = { title: "Contact — Human 2.0 Genesis" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 section-x">
        <div className="container-max max-w-[600px]">
          <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-text-primary mb-4">Get in touch</h1>
          <p className="text-base text-text-secondary font-light leading-relaxed mb-12">
            For product questions, payment verification, or support — reach us on WhatsApp. We respond within 24 hours.
          </p>

          <a
            href={PRODUCT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-7 bg-bg-surface border border-border-base rounded-[16px] hover:border-border-strong hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center shrink-0" style={{ background: "#25D36615", border: "1px solid #25D36640" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
            </div>
            <div>
              <p className="text-base font-semibold text-text-primary mb-0.5">WhatsApp</p>
              <p className="text-sm text-text-secondary font-light">+88 {PRODUCT.bkashNumber}</p>
              <p className="text-xs text-text-tertiary mt-1">We respond within 24 hours</p>
            </div>
          </a>

          <p className="text-sm text-text-tertiary font-light mt-8">
            Business hours: 9am – 9pm Bangladesh Standard Time (BST), 7 days a week.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
