import { PRODUCT, PAYMENT_STEPS } from "@/lib/data";

const GUMROAD_URL = "https://aarifster.gumroad.com/l/ydwsjs";

export function LandingPayment() {
  const waLink = PRODUCT.whatsapp;

  return (
    <section id="payment" className="section-y section-x border-t border-border-subtle bg-bg-subtle">
      <div className="container-max">

        {/* Price block */}
        <div className="text-center mb-12">
          <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-gold mb-4">
            {PRODUCT.urgency}
          </span>
          <div className="flex items-end justify-center gap-4 mb-4">
            <span className="font-display font-extrabold text-6xl md:text-7xl text-text-primary tracking-tighter leading-none">
              ৳{PRODUCT.price}
            </span>
            <div className="mb-3">
              <span className="block text-2xl text-text-tertiary line-through font-light">
                ৳{PRODUCT.originalPrice}
              </span>
              <span className="block text-sm text-accent-gold font-medium">
                Save ৳{PRODUCT.originalPrice - PRODUCT.price}
              </span>
            </div>
          </div>
          <p className="text-sm text-text-secondary font-light">
            One-time payment · Lifetime access · No subscription
          </p>
        </div>

        {/* Payment Method Chooser */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-center text-2xs font-semibold tracking-widest uppercase text-text-tertiary mb-5">
            Choose your payment method
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* bKash option */}
            <a
              href="#bkash-steps"
              className="flex flex-col items-center gap-3 bg-bg-surface border-2 border-accent-cyan/30 hover:border-accent-cyan/60 rounded-2xl px-6 py-6 transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#E2136E]/10 flex items-center justify-center text-2xl">
                📱
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-base text-text-primary mb-1">
                  Pay with bKash
                </p>
                <p className="text-xs text-text-secondary font-light">
                  Bangladesh · Personal payment
                </p>
                <p className="text-xs text-text-tertiary mt-1">
                  Delivery via WhatsApp in 1–3 hrs
                </p>
              </div>
              <span className="text-xs text-accent-cyan font-semibold group-hover:underline">
                See steps below ↓
              </span>
            </a>

            {/* Gumroad / Card option */}
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 bg-bg-surface border-2 border-accent-blue/30 hover:border-accent-blue/60 rounded-2xl px-6 py-6 transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-2xl">
                💳
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-base text-text-primary mb-1">
                  Pay with Card
                </p>
                <p className="text-xs text-text-secondary font-light">
                  Visa · Mastercard · International
                </p>
                <p className="text-xs text-text-tertiary mt-1">
                  Instant delivery · Powered by Gumroad
                </p>
              </div>
              <span className="text-xs text-accent-blue font-semibold group-hover:underline">
                Go to checkout →
              </span>
            </a>

          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6">
            {[
              "✓ Instant delivery",
              "✓ Bangla + English",
              "✓ Lifetime access",
              "✓ 7-Day Guarantee",
            ].map((t) => (
              <span key={t} className="text-xs text-text-tertiary font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-2xl mx-auto mb-12" id="bkash-steps">
          <div className="flex-1 h-px bg-border-subtle" />
          <span className="text-2xs text-text-tertiary font-semibold tracking-widest uppercase">
            bKash Payment Steps
          </span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-[900px] mx-auto">

          {/* Payment steps */}
          <div>
            <h3 className="font-display font-bold text-xl text-text-primary tracking-tight mb-6">
              How to get your Blueprint
            </h3>
            <div className="space-y-4">
              {PAYMENT_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-5 p-5 bg-bg-surface border border-border-subtle rounded-[12px]"
                >
                  <span className="font-display font-bold text-sm text-accent-cyan shrink-0 mt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text-primary mb-1">{step.title}</p>
                    <p className="text-sm text-text-secondary font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bKash action box */}
          <div className="bg-bg-surface border border-border-base rounded-[20px] p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

            <div className="text-center mb-8">
              <p className="text-2xs font-semibold tracking-widest uppercase text-text-tertiary mb-3">
                Step 1 — bKash payment
              </p>
              <div className="inline-flex flex-col items-center gap-1 bg-bg-muted border border-border-base rounded-[12px] px-8 py-5">
                <span className="text-2xs text-text-tertiary font-medium tracking-wide">bKash Number</span>
                <span className="font-display font-bold text-3xl text-text-primary tracking-tight">
                  {PRODUCT.bkashNumber}
                </span>
                <span className="text-xs text-text-tertiary">(Personal)</span>
              </div>
              <p className="text-sm text-text-secondary font-light mt-4">
                Amount:{" "}
                <span className="text-text-primary font-semibold">৳{PRODUCT.price}</span>
              </p>
            </div>

            <div className="text-center">
              <p className="text-2xs font-semibold tracking-widest uppercase text-text-tertiary mb-4">
                Step 2 — Send screenshot via WhatsApp
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 text-base font-semibold px-6 py-4 rounded-[12px] transition-all duration-200 hover:-translate-y-px"
                style={{ background: "#25D366", color: "#fff" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Open WhatsApp to Send Screenshot
              </a>
              <p className="text-xs text-text-tertiary mt-3 font-light">
                After payment, send your transaction screenshot through WhatsApp for verification and product delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery note */}
        <div className="text-center mt-10">
          <p className="text-sm text-text-tertiary font-light">
            bKash delivery within{" "}
            <span className="text-text-secondary font-medium">1–3 hours</span>{" "}
            during business hours (9am–9pm BST). Card payments via Gumroad are instant.{" "}
            Questions?{" "}
            <a
              href={PRODUCT.support}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              WhatsApp us
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

