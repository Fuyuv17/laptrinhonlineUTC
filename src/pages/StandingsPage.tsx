import { Link, useParams } from "react-router-dom";
import { contests, standings } from "../data/contests";
import { formatDateTime } from "../lib/format";
import { contestStatusLabel, contestStatusVariant } from "../lib/status";
import Badge from "../components/ui/Badge";
import { Table, Thead, Tbody, Tr, Th, Td } from "../components/ui/Table";
import { ratingTierColor } from "../lib/status";

const STANDINGS_SLUG = "hprevoi27_03";

export default function StandingsPage() {
  const { slug = "" } = useParams();
  const contest = contests.find((c) => c.slug === slug);

  if (!contest) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="font-heading text-2xl font-bold text-text">Không tìm thấy kỳ thi</h1>
        <Link to="/contests" className="mt-4 inline-block text-accent hover:underline">
          Quay lại danh sách kỳ thi
        </Link>
      </div>
    );
  }

  const problemCodes = standings[0]?.perProblem.map((p) => p.code) ?? [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="font-heading text-2xl font-bold text-text">{contest.title}</h1>
        <Badge variant={contestStatusVariant(contest.status)}>{contestStatusLabel(contest.status)}</Badge>
      </div>
      <p className="mt-1 text-sm text-text-secondary">{formatDateTime(contest.startTime)} · Bảng xếp hạng</p>

      <div className="mt-6">
        {slug === STANDINGS_SLUG ? (
          <Table>
            <Thead>
              <Tr>
                <Th className="text-left">#</Th>
                <Th className="text-left">Thí sinh</Th>
                <Th className="text-center">Rating</Th>
                <Th className="text-center">Giải</Th>
                <Th className="text-center">Penalty</Th>
                {problemCodes.map((c) => (
                  <Th key={c} className="text-center">
                    {c}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {standings.map((row) => (
                <Tr key={row.handle}>
                  <Td className="font-mono text-text-secondary">{row.rank}</Td>
                  <Td>
                    <Link to={`/users/${row.handle}`} className="font-mono font-medium text-text hover:text-accent">
                      {row.handle}
                    </Link>
                  </Td>
                  <Td className="text-center font-mono">
                    <Badge variant={ratingTierColor(row.rating)}>{row.rating}</Badge>
                  </Td>
                  <Td className="text-center font-mono font-semibold">{row.solved}</Td>
                  <Td className="text-center font-mono text-text">{row.penalty}</Td>
                  {row.perProblem.map((p) => (
                    <Td key={p.code} className="text-center">
                      <div
                        className={`mx-auto flex h-10 w-14 flex-col items-center justify-center rounded-[5px] text-xs font-mono font-semibold ${
                          p.status === "ac"
                            ? "bg-success-soft text-success"
                            : p.status === "wa"
                              ? "bg-danger-soft text-danger"
                              : "text-text-muted"
                        }`}
                      >
                        {p.status !== "none" && (
                          <>
                            <span>{p.status === "ac" ? p.time : `-${p.attempts}`}</span>
                          </>
                        )}
                      </div>
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <div className="rounded-[7px] border border-dashed border-border-strong py-16 text-center text-sm text-text-">
            Chưa có dữ liệu bảng xếp hạng cho kỳ thi này.
          </div>
        )}
      </div>
    </div>
  );
}
