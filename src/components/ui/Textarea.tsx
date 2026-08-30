import { useId, type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({ label, id, className = "", ...rest }: TextareaProps) {
  const generatedId = useId();
  const areaId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={areaId} className="text-xs font-medium uppercase tracking-wide text-text-secondary">
          {label}
        </label>
      )}
      <textarea
        id={areaId}
        className={`rounded-[7px] border border-border-strong bg-bg px-3 py-2 font-mono text-sm text-text placeholder:text-text-muted outline-none transition-colors focus:border-accent ${className}`}
        {...rest}
      />
    </div>
  );
}
