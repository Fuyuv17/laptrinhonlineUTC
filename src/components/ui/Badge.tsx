import type { ReactNode } from "react";

export type BadgeVariant = "accent" | "success" | "danger" | "warning" | "info" | "neutral" | "outline";

const variants: Record<BadgeVariant, string> = {
  accent: "bg-accent-soft text-accent-hover",
  success: "bg-success-soft text-green-700",
  danger: "bg-danger-soft text-red-700",
  warning: "bg-warning-soft text-amber-600",
  info: "bg-info-soft text-info",
  neutral: "bg-surface-alt text-text-secondary",
  outline: "bg-transparent text-text-secondary border border-border-strong",
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export default function Badge({ variant = "neutral", children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium leading-none ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
