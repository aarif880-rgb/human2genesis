import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PRODUCT } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy Policy — Human 2.0 Genesis" };

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 section-x">
        <div className="container-max max-w-[720px]">
          <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-text-primary mb-2">Privacy Policy</h1>
          <p className="text-sm text-text-tertiary mb-12">Last updated: {new Date().toLocaleDateString("en-BD", { year: "numeric", month: "long", day: "numeric" })}</p>

          {[
            { title: "1. Information we collect", body: "When you purchase or contact us, we collect your name, WhatsApp number, and bKash transaction details solely for the purpose of verifying payment and delivering your product." },
            { title: "2. How we use your information", body: "Your information is used only to verify payment, deliver your product, and respond to support requests. We do not sell, rent, or share your personal data with third parties." },
            { title: "3. Data retention", body: "Transaction records are retained for a minimum of 1 year for financial compliance purposes. WhatsApp conversations are retained for support and dispute resolution." },
            { title: "4. Cookies", body: "This website may use cookies for analytics purposes. No personally identifiable information is stored in cookies." },
            { title: "5. Contact", body: `For privacy-related questions, reach us via WhatsApp: +88 ${PRODUCT.bkashNumber}. We respond within 24 hours.` },
          ].map((s) => (
            <div key={s.title} className="mb-10">
              <h2 className="font-display font-bold text-xl text-text-primary tracking-tight mb-3">{s.title}</h2>
              <p className="text-base text-text-secondary font-light leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
