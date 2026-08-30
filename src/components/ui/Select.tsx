import { useId, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export default function Select({ label, id, className = "", children, ...rest }: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="text-xs font-medium uppercase tracking-wide text-text">
          {label}
        </label>
      )}
      <div className="relative group">
        <select
          id={selectId}
          className={`w-full appearance-none rounded-[7px] border border-border-strong bg-bg px-3 pr-10 py-2 text-sm text-text outline-none transition-colors focus:border-navbar ${className}`}
          {...rest}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary transition-colors group-focus-within:text-navbar" />
      </div>
    </div>
  );
}