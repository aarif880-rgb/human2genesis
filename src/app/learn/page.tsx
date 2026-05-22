import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = { title: "Learn — Human 2.0 Genesis" };

export default function LearnPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 section-x">
        <div className="container-max max-w-[800px]">
          <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-4">Knowledge base</span>
          <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-text-primary mb-4">Learn</h1>
          <p className="text-base text-text-secondary font-light leading-relaxed mb-16 max-w-xl">
            Articles, frameworks, and operator insights on AI. Published by Human 2.0 Genesis.
          </p>

          {/* Coming soon state */}
          <div className="border border-border-subtle rounded-[16px] p-12 text-center bg-bg-surface">
            <div className="w-12 h-12 rounded-full bg-bg-muted border border-border-subtle flex items-center justify-center mx-auto mb-4 text-xl">✍️</div>
            <h3 className="font-display font-bold text-xl text-text-primary tracking-tight mb-2">Articles launching soon</h3>
            <p className="text-sm text-text-secondary font-light">
              Subscribe to be notified when we publish. No spam — only operator-grade content.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
