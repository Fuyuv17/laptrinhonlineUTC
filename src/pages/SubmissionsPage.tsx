import { Link } from "react-router-dom";
import { submissions } from "../data/submissions";
import { verdictLabel, verdictVariant } from "../lib/status";
import { formatDateTime, formatMemory, formatRuntime } from "../lib/format";
import Badge from "../components/ui/Badge";
import { Table, Thead, Tbody, Tr, Th, Td } from "../components/ui/Table";

export default function SubmissionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-heading text-2xl font-bold text-text">Bài nộp</h1>
      <p className="mt-1 text-sm text-text-secondary">{submissions.length} bài nộp gần đây trên toàn hệ thống.</p>

      <div className="mt-6">
        <Table>
          <Thead className="font-heading">
            <Tr>
              <Th>Người nộp</Th>
              <Th>Bài tập</Th>
              <Th>Ngôn ngữ</Th>
              <Th className="text-center">Kết quả</Th>
              <Th className="text-center">Điểm</Th>
              <Th className="hidden text-center md:table-cell">Thời gian chạy</Th>
              <Th className="hidden text-right md:table-cell">Bộ nhớ</Th>
              <Th className="hidden text-right lg:table-cell">Nộp lúc</Th>
            </Tr>
          </Thead>
          <Tbody>
            {submissions.map((s) => (
              <Tr key={s.id}>
                <Td>
                  <Link to={`/users/${s.user}`} className="font-mono text-text-secondary hover:text-accent">
                    {s.user}
                  </Link>
                </Td>
                <Td>
                  <Link to={`/problems/${s.problemCode}`} className="font-medium text-text hover:text-accent">
                    {s.problemTitle}
                  </Link>
                </Td>
                <Td>{s.language}</Td>
                <Td>
                  <Badge variant={verdictVariant(s.verdict)}>{verdictLabel(s.verdict)}</Badge>
                </Td>
                <Td className="text-center font-mono">{s.score}</Td>
                <Td className="hidden text-center font-mono md:table-cell">{formatRuntime(s.runtimeMs)}</Td>
                <Td className="hidden text-right font-mono md:table-cell">{formatMemory(s.memoryKb)}</Td>
                <Td className="hidden text-right text-text-muted lg:table-cell">{formatDateTime(s.submittedAt)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
