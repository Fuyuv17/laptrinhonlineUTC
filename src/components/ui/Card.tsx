import type { HTMLAttributes } from "react";
import { cardClasses } from "../../lib/variants";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

export default function Card({ padded = true, className = "", children, ...rest }: CardProps) {
  return (
    <div className={cardClasses(`${padded ? "p-6" : ""} ${className}`)} {...rest}>
      {children}
    </div>
  );
}
