import { useEffect, useState } from "react";

interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

function computeParts(targetMs: number): CountdownParts {
  const diff = targetMs - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  }
  const seconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
    isOver: false,
  };
}

export function useCountdown(target: string | Date): CountdownParts {
  const targetMs = new Date(target).getTime();
  const [parts, setParts] = useState(() => computeParts(targetMs));

  useEffect(() => {
    const id = setInterval(() => setParts(computeParts(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return parts;
}
