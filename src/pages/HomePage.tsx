import { Link } from "react-router-dom";
import { Code2, Trophy } from "lucide-react";
import { buttonClasses } from "../lib/variants";
import StatCard from "../components/ui/StatCard";
import ContestCard from "../components/contests/ContestCard";
import { problems } from "../data/problems";
import { contests } from "../data/contests";
import { submissions } from "../data/submissions";
import { illustrativeUserCount } from "../data/stats";

export default function HomePage() {
  const activeContests = contests.filter((c) => c.status !== "finished");

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <section className="relative overflow-hidden rounded-xl border border-border bg-linear-to-br from-accent via-accent-hover to-navbar px-6 py-12 sm:px-10 sm:py-16">
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-10" aria-hidden="true">
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative max-w-2xl border-none">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">UTCOJ: UTC Online Judge</h1>
          <p className="mt-4 text-base text-white/85 sm:text-lg">
            Nền tảng luyện tập lập trình thi đấu của Khoa Công nghệ Thông tin, Trường Đại học Giao thông Vận tải.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/problems" className={`${buttonClasses("surface", "lg")} group`}>
              <Code2 className="h-4.5 w-4.5 transition-transform duration-200 group-hover:scale-125" />
               Giải bài
            </Link>
            <Link to="/contests" className={`${buttonClasses("outline", "lg", "border-white/40 text-white hover:border-white hover:text-white")} group`}>
              <Trophy className="h-4 w-4 transition-transform duration-200 group-hover:scale-125 group-hover:-rotate-12" />
              <span>Tham gia kỳ thi</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            <StatCard value={illustrativeUserCount} label="Người dùng" className="bg-white/10 **:text-white" />
            <StatCard value={problems.length} label="Bài tập" className="bg-white/10 **:text-white" />
            <StatCard value={submissions.length} label="Bài nộp" className="bg-white/10 **:text-white" />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-text">
          <Trophy className="h-5 w-5 text-accent" />
          Kỳ thi
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeContests.map((c) => (
            <ContestCard key={c.id} contest={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
