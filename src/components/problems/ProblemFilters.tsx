import { useState } from "react";
import { Search } from "lucide-react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import type { Difficulty } from "../../lib/types";

export type ProblemStatusFilter = "all" | "solved" | "attempted" | "unsolved";

export interface ProblemFilterState {
  search: string;
  difficulty: Difficulty | "all";
  tag: string | "all";
  status: ProblemStatusFilter;
}

interface ProblemFiltersProps {
  filters: ProblemFilterState;
  onChange: (filters: ProblemFilterState) => void;
  tags: string[];
}

const difficulties: Difficulty[] = ["Easy", "Medium", "Hard", "Insane"];

export default function ProblemFilters({ filters, onChange, tags }: ProblemFiltersProps) {
  const [isFocused, setIsFocused] = useState(false);

  // Kính lúp sẽ đậm lên khi đang focus vào ô input HOẶC khi người dùng đã gõ chữ tìm kiếm
  const isHighlight = isFocused || filters.search.length > 0;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <div className="relative">
        <Search 
          className={`pointer-events-none absolute left-3 top-[40px] h-4 w-4 -translate-y-1/2 transition-colors ${
            isHighlight ? "text-text" : "text-text-secondary"
          }`} 
        />
        <Input
          label="Tìm kiếm"
          placeholder="Tên hoặc mã bài..."
          className="pl-9"
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>

      <Select
        label="Độ khó"
        value={filters.difficulty}
        onChange={(e) => onChange({ ...filters, difficulty: e.target.value as Difficulty | "all" })}
      >
        <option value="all">Tất cả</option>
        {difficulties.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </Select>

      <Select label="Chủ đề" value={filters.tag} onChange={(e) => onChange({ ...filters, tag: e.target.value })}>
        <option value="all">Tất cả</option>
        {tags.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </Select>

      <Select
        label="Trạng thái"
        value={filters.status}
        onChange={(e) => onChange({ ...filters, status: e.target.value as ProblemStatusFilter })}
      >
        <option value="all">Tất cả</option>
        <option value="solved">Đã giải</option>
        <option value="attempted">Đã thử</option>
        <option value="unsolved">Chưa giải</option>
      </Select>
    </div>
  );
}