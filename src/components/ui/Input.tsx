import { useId, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, id, className = "", ...rest }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-xs font-medium uppercase tracking-wide text-text">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`rounded-[7px] border bg-bg px-3 py-2 text-sm text-text placeholder:text-text-secondary outline-none transition-colors focus:border-navbar ${
          error ? "border-danger" : "border-border-strong"
        } ${className}`}
        {...rest}
      />
      {error && <span className="text-xs text-danger">{error}</span>}
    </div>
  );
}
