import { ArrowRight } from "lucide-react";
import { PRODUCT } from "@/lib/data";

const MIRROR_ITEMS = [
  "ChatGPT account আছে — কিন্তু কী করব ঠিক বুঝি না।",
  "YouTube-এ AI tutorial দেখি। পরের দিন ভুলে যাই।",
  "Prompt করি। Result আসে। কিন্তু কোনোভাবে... generic লাগে।",
  "বন্ধুকে দেখি AI দিয়ে এগিয়ে যাচ্ছে। আমিও তো same tool use করি।",
  "\"AI শিখব\" — মাসে কতবার এই কথা মনে হয়েছে। শুরু হয় না।",
];

export function LandingMirror() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-gold/2 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-2xs font-semibold tracking-widest uppercase text-accent-gold mb-3 block">
            Mirror Tone
          </span>
          <h2
            className="font-display font-extrabold tracking-tight leading-tight"
            style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
          >
            এটা কি তোমার গল্প?
          </h2>
        </div>

        {/* Mirror items */}
        <div className="space-y-3 mb-10">
          {MIRROR_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/[0.03] border border-white/8 rounded-xl px-5 py-4 hover:border-accent-gold/20 transition-colors"
            >
              <span className="text-accent-gold text-sm mt-0.5 shrink-0 font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Resolution */}
        <div className="text-center bg-accent-blue/5 border border-accent-blue/20 rounded-2xl px-6 py-8">
          <p className="text-text-secondary text-sm leading-relaxed mb-2">
            যদি এর কোনো একটাও তোমার সাথে মিলে —
          </p>
          <p className="font-display font-bold text-lg mb-6">
            তুমি ঠিক জায়গায় এসেছ।
          </p>
          <a
            href="/the-ai-creators-blueprint#payment"
            className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-[10px] bg-gradient-accent text-white shadow-glow-blue hover:-translate-y-px transition-all duration-200"
          >
            Blueprint নাও — ৳{PRODUCT.price}
            <ArrowRight size={16} />
          </a>
          <p className="text-xs text-text-tertiary mt-3"
          </p>
        </div>
      </div>
    </section>
  );
}
