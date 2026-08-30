import { useCountdown } from "../../lib/hooks/useCountdown";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

interface CountdownTimerProps {
  target: string;
  prefix: string;
  overLabel: string;
  className?: string;
}

export default function CountdownTimer({ target, prefix, overLabel, className = "" }: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isOver } = useCountdown(target);

  if (isOver) {
    return <span className={`font-mono text-sm text-text-secondary ${className}`}>{overLabel}</span>;
  }

  return (
    <span className={`font-mono text-sm text-text-secondary ${className}`}>
      {prefix} {days > 0 && `${days}d `}
      {pad(hours)}:{pad(minutes)}:{pad(seconds)}
    </span>
  );
}
