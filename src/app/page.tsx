import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PRODUCT, PLAYBOOK, BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Human 2.0 Genesis — AI Ebooks for Bangladesh",
  description:
    "Two operator-grade AI systems for Bangladesh professionals, freelancers and business owners. Bangla + English. Instant delivery.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — Product Selection */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid mask-radial-hero pointer-events-none" />
          <div className="absolute -top-32 -left-40 w-[600px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto w-full">
            <div className="inline-flex items-center gap-2.5 bg-accent-blue/10 border border-accent-blue/30 rounded-full px-3.5 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse-dot" />
              <span className="text-2xs font-semibold tracking-widest uppercase text-accent-cyan">
                Bangladesh&apos;s AI-Native Ebook Series
              </span>
            </div>

            <h1
              className="font-display font-extrabold leading-tight tracking-tighter mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
            >
              Choose Your Shortcut.
            </h1>
            <p className="text-lg text-text-secondary font-light max-w-lg mx-auto mb-14 leading-relaxed">
              Two operator-grade systems.
              One teaches AI creation.
              One teaches AI business.
            </p>

            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

              {/* Blueprint Card */}
              <div className="bg-bg-surface border border-border-base rounded-2xl p-7 text-left flex flex-col hover:border-accent-blue/40 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />
                <div className="mb-4">
                  <span className="text-2xs font-semibold tracking-widest uppercase text-accent-cyan">
                    Ebook 01
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-xl leading-tight mb-2">
                  The AI Creator&apos;s Blueprint
                </h2>
                <p className="text-sm text-text-secondary font-light leading-relaxed mb-4 flex-1">
                  The systems behind professional AI results — for creators, freelancers, and content operators.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["341 pages", "Bangla + EN", "4 frameworks", "30+ prompts"].map((t) => (
                    <span key={t} className="text-2xs bg-white/5 border border-white/8 rounded-full px-3 py-1 text-text-tertiary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display font-extrabold text-2xl text-text-primary">
                      ৳{PRODUCT.price}
                    </span>
                    <span className="text-text-tertiary line-through text-sm ml-2">
                      ৳{PRODUCT.originalPrice}
                    </span>
                  </div>
                  <Link
                    href="/the-ai-creators-blueprint"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-[8px] bg-gradient-accent text-white hover:-translate-y-px transition-all duration-200"
                  >
                    Preview Free →
                  </Link>
                </div>
              </div>

              {/* Playbook Card */}
              <div className="bg-bg-surface border border-border-base rounded-2xl p-7 text-left flex flex-col hover:border-accent-gold/40 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
                <div className="mb-4">
                  <span className="text-2xs font-semibold tracking-widest uppercase text-accent-gold">
                    Ebook 02
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-xl leading-tight mb-2">
                  ChatGPT Business Playbook
                </h2>
                <p className="text-sm text-text-secondary font-light leading-relaxed mb-4 flex-1">
                  50 real business systems for Bangladesh SMEs — deploy ChatGPT inside your actual operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["113 pages", "Bangla + EN", "4 frameworks", "50 systems"].map((t) => (
                    <span key={t} className="text-2xs bg-white/5 border border-white/8 rounded-full px-3 py-1 text-text-tertiary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display font-extrabold text-2xl text-text-primary">
                      ৳{PLAYBOOK.price}
                    </span>
                    <span className="text-text-tertiary line-through text-sm ml-2">
                      ৳{PLAYBOOK.originalPrice}
                    </span>
                  </div>
                  <Link
                    href="/chatgpt-business-playbook"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-[8px] bg-accent-gold/10 border border-accent-gold/30 text-accent-gold hover:bg-accent-gold/20 hover:-translate-y-px transition-all duration-200"
                  >
                    Preview Free →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-t border-border-subtle px-6 py-8">
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "✓ Bangla + English",
              "✓ Instant WhatsApp delivery",
              "✓ Lifetime access",
              "✓ Works with ChatGPT, Claude & Gemini",
              "✓ No subscription",
            ].map((t) => (
              <span key={t} className="text-sm text-text-tertiary font-medium">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 py-20 border-t border-border-subtle">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-4 block">
              Why Human 2.0 Genesis Exists
            </span>
            <h2
              className="font-display font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontSize: "clamp(22px, 3.5vw, 36px)" }}
            >
              বেশিরভাগ মানুষ AI ব্যবহার করে।
              <br />
              <span className="text-gradient-accent">খুব কম মানুষ AI deploy করে।</span>
            </h2>
            <p className="text-text-secondary font-light leading-relaxed text-base">
              {BRAND.name} exists to close that gap — for professionals, freelancers,
              and business owners in Bangladesh. Not hype. Not predictions.
              Practical systems that work today.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
