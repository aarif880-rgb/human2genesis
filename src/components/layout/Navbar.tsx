"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/the-ai-creators-blueprint", label: "The Blueprint" },
  { href: "/learn",                     label: "Learn"         },
  { href: "/contact",                   label: "Contact"       },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "border-b border-border-subtle bg-bg-base/85 backdrop-blur-xl" : "bg-transparent"
    )}>
      <nav className="container-max section-x flex items-center justify-between h-16">

        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-[7px] bg-gradient-accent flex items-center justify-center text-xs font-extrabold text-white font-display shrink-0">
            H2
          </div>
          <span className="font-display font-bold text-[16px] tracking-tight text-text-primary">
            Human 2.0 Genesis
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors font-light">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/the-ai-creators-blueprint"
            className={cn(
              "inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-[9px]",
              "bg-gradient-accent text-white shadow-glow-blue",
              "hover:shadow-glow-blue-lg hover:-translate-y-px transition-all duration-200"
            )}
          >
            Get Instant Access →
          </Link>
        </div>

        <button className="md:hidden text-text-secondary p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-border-subtle bg-bg-subtle/95 backdrop-blur-xl">
          <div className="section-x py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-base text-text-secondary hover:text-text-primary transition-colors" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/the-ai-creators-blueprint" className="mt-2 w-full text-center inline-flex justify-center items-center gap-2 text-sm font-semibold px-4 py-3 rounded-[9px] bg-gradient-accent text-white">
              Get Instant Access →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
