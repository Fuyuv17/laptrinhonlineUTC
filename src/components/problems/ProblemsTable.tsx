import { Link } from "react-router-dom";
import { CheckCircle2, Circle, MinusCircle } from "lucide-react";
import type { Problem } from "../../lib/types";
import { difficultyVariant } from "../../lib/status";
import Badge from "../ui/Badge";
import { Table, Thead, Tbody, Tr, Th, Td } from "../ui/Table";

interface ProblemsTableProps {
  problems: Problem[];
}

export default function ProblemsTable({ problems }: ProblemsTableProps) {
  if (problems.length === 0) {
    return (
      <div className="rounded-[7px] border border-dashed border-border-strong py-12 text-center text-sm text-text-secondary">
        Không tìm thấy bài tập phù hợp với bộ lọc.
      </div>
    );
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <Th className="w-8"></Th>
          <Th>Mã bài</Th>
          <Th>Tên bài</Th>
          <Th>Độ khó</Th>
          <Th className="hidden md:table-cell">Chủ đề</Th>
          <Th className="md:text-center">Điểm</Th>
          <Th className="md:text-center">Tỉ lệ AC</Th>
        </Tr>
      </Thead>
      <Tbody>
        {problems.map((p) => (
          <Tr key={p.id}>
            <Td>
              {p.solvedByMe ? (
                <CheckCircle2 className="h-4 w-4 text-success" aria-label="Đã giải" />
              ) : p.attemptedByMe ? (
                <Circle className="h-4 w-4 text-warning" aria-label="Đã thử" />
              ) : (
                <MinusCircle className="h-4 w-4 text-danger" aria-label="Chưa giải" />
              )}
            </Td>
            <Td className="font-mono text-text-secondary">{p.code}</Td>
            <Td>
              <Link to={`/problems/${p.code}`} className="font-medium text-text hover:text-accent">
                {p.title}
              </Link>
            </Td>
            <Td>
              <Badge variant={difficultyVariant(p.difficulty)}>{p.difficulty}</Badge>
            </Td>
            <Td className="hidden md:table-cell">
              <div className="flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <Badge key={t} variant="neutral">
                    {t}
                  </Badge>
                ))}
              </div>
            </Td>
            <Td className="md:text-center font-mono">{p.points}</Td>
            <Td className="md:text-center font-mono">{p.acRate}%</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
