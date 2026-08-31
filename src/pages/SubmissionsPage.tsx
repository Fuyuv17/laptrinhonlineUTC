import { Link } from "react-router-dom";
import { submissions } from "../data/submissions";
import { verdictLabel, verdictVariant } from "../lib/status";
import { formatDateTime, formatMemory, formatRuntime } from "../lib/format";
import Badge from "../components/ui/Badge";
import { Table, Thead, Tbody, Tr, Th, Td } from "../components/ui/Table";
import { ListChecks } from "lucide-react";

export default function SubmissionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="flex items-center gap-2 font-heading text-2xl font-bold text-text">
        <ListChecks className="h-7.5 w-7.5 text-accent" />
        Bài nộp</h1>
      <p className="mt-1 text-sm text-text-secondary">{submissions.length} bài nộp gần đây trên toàn hệ thống.</p>

      <div className="mt-6 overflow-x-auto">
        <Table>
          <Thead className="font-heading">
            <Tr>
              <Th className="text-left whitespace-nowrap">Người nộp</Th>
              <Th className="text-center min-w-[220px]">Bài tập</Th>
              <Th className="text-left whitespace-nowrap">Ngôn ngữ</Th>
              <Th className="text-center whitespace-nowrap">Kết quả</Th>
              <Th className="text-center whitespace-nowrap">Điểm</Th>
              <Th className="text-center whitespace-nowrap">Thời gian chạy</Th>
              <Th className="text-center whitespace-nowrap">Bộ nhớ</Th>
              <Th className="text-center whitespace-nowrap">Nộp lúc</Th>
            </Tr>
          </Thead>
          <Tbody>
            {submissions.map((s) => (
              <Tr key={s.id}>
                <Td className="whitespace-nowrap">
                  <Link to={`/users/${s.user}`} className="font-mono text-center text-text-secondary hover:text-accent">
                    {s.user}
                  </Link>
                </Td>
                <Td>
                  <Link to={`/problems/${s.problemCode}`} className="font-medium text-text hover:text-accent">
                    {s.problemTitle}
                  </Link>
                </Td>
                <Td className="whitespace-nowrap">{s.language}</Td>
                <Td className="text-center whitespace-nowrap">
                  <Badge variant={verdictVariant(s.verdict)}>{verdictLabel(s.verdict)}</Badge>
                </Td>
                <Td className="text-center font-mono whitespace-nowrap">{s.score}</Td>
                <Td className="text-center font-mono whitespace-nowrap">{formatRuntime(s.runtimeMs)}</Td>
                <Td className="text-center font-mono whitespace-nowrap">{formatMemory(s.memoryKb)}</Td>
                <Td className="text-center text-text-muted whitespace-nowrap">{formatDateTime(s.submittedAt)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}