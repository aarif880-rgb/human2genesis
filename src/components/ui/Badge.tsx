import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "gold" | "green" | "muted" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const variants = {
  accent:  "bg-accent-blue/10 text-accent-cyan border border-accent-blue/25",
  gold:    "bg-accent-gold/10  text-accent-gold  border border-accent-gold/25",
  green:   "bg-accent-green/10 text-accent-green border border-accent-green/20",
  muted:   "bg-bg-surface      text-text-secondary border border-border-subtle",
  outline: "bg-transparent     text-text-secondary border border-border-base",
};

const sizes = {
  sm: "text-2xs px-2 py-0.5 tracking-wider",
  md: "text-xs  px-2.5 py-1 tracking-wide",
};

export function Badge({ children, variant = "muted", size = "sm", className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center font-semibold uppercase rounded-[4px]", variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
