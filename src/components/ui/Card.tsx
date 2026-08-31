import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

export default function Card({ padded = true, className = "", children, ...rest }: CardProps) {
  return (
    <div 
      className={`bg-surface border border-border rounded-[7px] shadow-raised ${padded ? "p-6" : ""} ${className}`.trim()} 
      {...rest}
    >
      {children}
    </div>
  );
}