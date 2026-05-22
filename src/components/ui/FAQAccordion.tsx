"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";
import type { FAQItem } from "@/types";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-subtle border border-border-subtle rounded-[16px] overflow-hidden">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "transition-colors duration-200",
            open === i ? "bg-bg-muted" : "bg-bg-subtle hover:bg-bg-surface"
          )}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className={cn(
              "text-base font-medium tracking-snug leading-snug transition-colors",
              open === i ? "text-text-primary" : "text-text-primary/80"
            )}>
              {item.question}
            </span>
            <span className={cn(
              "flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200",
              open === i
                ? "border-accent-cyan/50 text-accent-cyan bg-accent-blue/10"
                : "border-border-base text-text-tertiary"
            )}>
              {open === i ? <Minus size={12} /> : <Plus size={12} />}
            </span>
          </button>

          <div className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          )}>
            <p className="px-7 pb-6 text-sm text-text-secondary font-light leading-relaxed pr-14">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
