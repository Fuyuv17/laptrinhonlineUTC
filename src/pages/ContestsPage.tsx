import { useMemo, useState } from "react";
import ContestCard from "../components/contests/ContestCard";
import { contests } from "../data/contests";
import type { ContestStatus } from "../lib/types";
import { contestStatusLabel } from "../lib/status";

type StatusFilter = ContestStatus | "all";

const filters: StatusFilter[] = ["all", "live", "upcoming", "finished"];

export default function ContestsPage() {
  const [status, setStatus] = useState<StatusFilter>("all");

  const filtered = useMemo(
    () => (status === "all" ? contests : contests.filter((c) => c.status === status)),
    [status],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-heading text-2xl font-bold text-text">Kỳ thi</h1>
      <p className="mt-1 text-sm text-text-secondary">{contests.length} kỳ thi trong hệ thống.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setStatus(f)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
              status === f ? "bg-accent text-white" : "bg-surface-alt text-text-secondary hover:text-text"
            }`}
          >
            {f === "all" ? "Tất cả" : contestStatusLabel(f)}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <ContestCard key={c.id} contest={c} />
        ))}
      </div>
    </div>
  );
}
