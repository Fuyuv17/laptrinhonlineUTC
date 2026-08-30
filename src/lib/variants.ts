export type ButtonVariant = "primary" | "outline" | "ghost" | "surface";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[7px] font-medium transition-colors duration-150 ease-out disabled:opacity-50 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  outline: "border border-border-strong text-text bg-transparent hover:border-accent hover:text-accent",
  ghost: "text-text-secondary hover:text-text hover:bg-surface-alt",
  surface: "bg-surface text-accent shadow-raised hover:shadow-floating",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-[13px] px-3 py-1.5",
  md: "text-[14px] px-4 py-2",
  lg: "text-[15px] px-5 py-2.5",
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className = "") {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");
}

export function cardClasses(className = "") {
  return `bg-surface border border-border rounded-[7px] shadow-raised ${className}`;
}
