import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline" | "nav";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

const variants = {
  primary: cn(
    "bg-gradient-accent text-white font-semibold",
    "shadow-glow-blue hover:shadow-glow-blue-lg",
    "hover:-translate-y-px active:translate-y-0",
    "transition-all duration-200"
  ),
  ghost: cn(
    "bg-transparent text-text-secondary font-normal",
    "border border-border-base",
    "hover:text-text-primary hover:border-border-strong",
    "transition-all duration-200"
  ),
  outline: cn(
    "bg-transparent text-text-primary font-medium",
    "border border-border-base",
    "hover:bg-bg-surface",
    "transition-all duration-200"
  ),
  nav: cn(
    "bg-text-primary text-bg-base font-semibold",
    "hover:bg-text-primary/90",
    "transition-all duration-150"
  ),
};

const sizes = {
  sm: "text-xs  px-3.5 py-2   rounded-[8px]  gap-1.5",
  md: "text-sm  px-5   py-3   rounded-[10px] gap-2",
  lg: "text-base px-7  py-3.5 rounded-[10px] gap-2",
};

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap",
        "leading-none tracking-snug cursor-pointer",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
