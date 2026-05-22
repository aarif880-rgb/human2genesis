import Link from "next/link";
import { PRODUCT, BRAND } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-subtle">
      <div className="container-max section-x py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-[7px] bg-gradient-accent flex items-center justify-center text-xs font-extrabold text-white font-display">H2</div>
              <span className="font-display font-bold text-base tracking-tight text-text-primary">{BRAND.name}</span>
            </div>
            <p className="text-sm text-text-secondary font-light leading-relaxed max-w-[220px]">
              {BRAND.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-2xs font-semibold tracking-widest uppercase text-text-tertiary mb-4">Product</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link href="/the-ai-creators-blueprint" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-light">The AI Creator&apos;s Blueprint</Link></li>
              <li><Link href="/learn" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-light">Learn</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xs font-semibold tracking-widest uppercase text-text-tertiary mb-4">Support</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link href="/contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-light">Contact</Link></li>
              <li>
                <a href={PRODUCT.support} className="text-sm text-text-secondary hover:text-text-primary transition-colors font-light" target="_blank" rel="noopener noreferrer">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xs font-semibold tracking-widest uppercase text-text-tertiary mb-4">Legal</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link href="/privacy" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-light">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-light">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-border-subtle">
          <p className="text-xs text-text-tertiary font-light">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Dhaka, Bangladesh.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-tertiary mr-1">Payment via</span>
            {["bKash", "Nagad"].map((p) => (
              <span key={p} className="text-2xs font-semibold text-text-tertiary bg-bg-surface border border-border-subtle px-2.5 py-1 rounded-[5px]">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
