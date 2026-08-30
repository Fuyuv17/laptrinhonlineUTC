import { useMemo, useState } from "react";
import ProblemFilters, { type ProblemFilterState } from "../components/problems/ProblemFilters";
import ProblemsTable from "../components/problems/ProblemsTable";
import { problems, tagList } from "../data/problems";

const initialFilters: ProblemFilterState = {
  search: "",
  difficulty: "all",
  tag: "all",
  status: "all",
};

export default function ProblemsPage() {
  const [filters, setFilters] = useState<ProblemFilterState>(initialFilters);

  const filtered = useMemo(() => {
    return problems.filter((p) => {
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (!p.title.toLowerCase().includes(q) && !p.code.toLowerCase().includes(q)) return false;
      }
      if (filters.difficulty !== "all" && p.difficulty !== filters.difficulty) return false;
      if (filters.tag !== "all" && !p.tags.includes(filters.tag)) return false;
      if (filters.status === "solved" && !p.solvedByMe) return false;
      if (filters.status === "attempted" && !p.attemptedByMe) return false;
      if (filters.status === "unsolved" && (p.solvedByMe || p.attemptedByMe)) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-heading text-2xl font-bold text-text">Bài tập</h1>
      <p className="mt-1 text-sm text-text-secondary">{problems.length} bài tập trong hệ thống.</p>

      <div className="mt-6">
        <ProblemFilters filters={filters} onChange={setFilters} tags={tagList} />
      </div>

      <div className="mt-6">
        <ProblemsTable problems={filtered} />
      </div>
    </div>
  );
}
