interface StatCardProps {
  value: number;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div className={`rounded-[7px] bg-surface-alt/70 px-5 py-4 ${className}`}>
      {/* <div className="font-mono text-2xl font-bold text-text sm:text-3xl">{value}</div> */}
      <div className="font-mono text-2xl font-bold text-text sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-text-secondary">{label}</div>
    </div>
  );
}
