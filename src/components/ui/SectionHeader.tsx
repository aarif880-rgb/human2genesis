import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow:   string;
  heading:   string;
  subtext?:  string;
  align?:    "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, heading, subtext, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", align === "center" ? "text-center" : "text-left", className)}>
      <span className="inline-block text-2xs font-semibold tracking-widest uppercase text-accent-cyan mb-3.5">
        {eyebrow}
      </span>
      <h2 className={cn(
        "font-display font-bold text-text-primary leading-none",
        "text-3xl md:text-4xl lg:text-[44px]"
      )}>
        {heading}
      </h2>
      {subtext && (
        <p className={cn(
          "mt-4 text-base text-text-secondary font-light leading-relaxed",
          align === "center" && "max-w-xl mx-auto"
        )}>
          {subtext}
        </p>
      )}
    </div>
  );
}
