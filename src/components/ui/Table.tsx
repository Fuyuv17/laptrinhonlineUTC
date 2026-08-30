import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export function Table({ className = "", ...rest }: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto rounded-[7px] border border-border">
      <table className={`w-full border-collapse text-sm ${className}`} {...rest} />
    </div>
  );
}

export function Thead({ className = "", ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={`bg-surface-alt ${className}`} {...rest} />;
}

export function Tbody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props} />;
}

export function Tr({ className = "", ...rest }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={`border-b border-border last:border-0 hover:bg-surface-alt/30 ${className}`} {...rest} />;
}

export function Th({ className = "", ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`px-3 py-2 text-xs font-heading uppercase tracking-wide text-text ${className}`}
      {...rest}
    />
  );
}

export function Td({ className = "", ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={`px-3 py-2.5 align-middle text-text ${className}`} {...rest} />;
}
