import { Link } from "react-router-dom";
import { Trophy, Users } from "lucide-react";
import type { Contest } from "../../lib/types";
import { contestStatusLabel, contestStatusVariant } from "../../lib/status";
import { formatDateTime, formatDuration } from "../../lib/format";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import CountdownTimer from "../ui/CountdownTimer";
import { buttonClasses } from "../../lib/variants";

interface ContestCardProps {
  contest: Contest;
}

export default function ContestCard({ contest }: ContestCardProps) {
  const endTime = new Date(new Date(contest.startTime).getTime() + contest.durationMinutes * 60000).toISOString();

  const cta =
    contest.status === "upcoming"
      ? { label: "Đăng ký", to: null }
      : { label: contest.status === "live" ? "Vào thi" : "Xem bảng xếp hạng", to: `/contests/${contest.slug}/standings` };

  return (
    <Card className="flex flex-col gap-3" padded>
      <div className="flex items-center justify-between">
        <Badge variant={contestStatusVariant(contest.status)}>
          {contest.status === "live" && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
          {contestStatusLabel(contest.status)}
        </Badge>
        {contest.rated && <Badge variant="outline">Rated</Badge>}
      </div>

      <div className="flex items-center gap-2 text-text-secondary">
        <Trophy className="h-4 w-4 shrink-0 text-accent" />
        <h3 className="font-heading text-base font-bold text-text">{contest.title}</h3>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted">
        <span>{formatDateTime(contest.startTime)}</span>
        <span>{formatDuration(contest.durationMinutes)}</span>
        <span className="inline-flex items-center gap-1">
          <Users className="h-3.5 w-3.5" />
          {contest.participants}
        </span>
      </div>

      {contest.status === "upcoming" && <CountdownTimer target={contest.startTime} prefix="Bắt đầu sau" overLabel="Đang diễn ra" />}
      {contest.status === "live" && <CountdownTimer target={endTime} prefix="Kết thúc sau" overLabel="Đã kết thúc" />}

      {cta.to ? (
        <Link to={cta.to} className={buttonClasses("primary", "sm", "mt-1 self-start shadow-md shadow-gray-500")}>
          {cta.label}
        </Link>
      ) : (
        <button type="button" className={buttonClasses("outline", "sm", "mt-1 self-start shadow-md shadow-gray-500")} disabled>
          {cta.label}
        </button>
      )}
    </Card>
  );
}
