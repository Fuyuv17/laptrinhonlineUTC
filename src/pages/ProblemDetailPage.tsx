import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Clock, MemoryStick } from "lucide-react";
import { problems } from "../data/problems";
import { getProblemDetail } from "../data/problemDetails";
import { submissions as allSubmissions, currentUser } from "../data/submissions";
import type { Submission } from "../lib/types";
import { difficultyVariant, verdictLabel, verdictVariant } from "../lib/status";
import { formatDateTime, formatMemory, formatRuntime } from "../lib/format";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Tabs from "../components/ui/Tabs";
import Select from "../components/ui/Select";
import Textarea from "../components/ui/Textarea";
import {Button} from "../components/ui/Button";
import { Table, Thead, Tbody, Tr, Th, Td } from "../components/ui/Table";

const languages = Array.from(new Set(allSubmissions.map((s) => s.language))).sort();

function createLocalSubmission(problemCode: string, problemTitle: string, language: string): Submission {
  return {
    id: `local-${Date.now()}`,
    problemCode,
    problemTitle,
    user: currentUser.handle,
    language,
    verdict: "PENDING",
    score: 0,
    runtimeMs: 0,
    memoryKb: 0,
    submittedAt: new Date().toISOString(),
  };
}

export default function ProblemDetailPage() {
  const { code = "" } = useParams();
  const problem = problems.find((p) => p.code === code);
  const detail = getProblemDetail(code);

  const [tab, setTab] = useState("statement");
  const [language, setLanguage] = useState(languages[0]);
  const [sourceCode, setCode] = useState("");
  const [localSubmissions, setLocalSubmissions] = useState<Submission[]>([]);

  const problemSubmissions = useMemo(
    () => [...localSubmissions, ...allSubmissions.filter((s) => s.problemCode === code)],
    [localSubmissions, code],
  );

  if (!problem) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="font-heading text-2xl font-bold text-text">Không tìm thấy bài tập</h1>
        <Link to="/problems" className="mt-4 inline-block text-accent hover:underline">
          Quay lại danh sách bài tập
        </Link>
      </div>
    );
  }

  function handleSubmit() {
    const submission = createLocalSubmission(problem!.code, problem!.title, language);
    setLocalSubmissions((prev) => [submission, ...prev]);
    setTab("submissions");
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 overflow-hidden">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-sm text-text-secondary">{problem.code}</span>
        <h1 className="font-heading text-2xl font-bold text-text">{problem.title}</h1>
        <Badge variant={difficultyVariant(problem.difficulty)}>{problem.difficulty}</Badge>
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-muted">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" /> {detail.timeLimitMs} ms
        </span>
        <span className="inline-flex items-center gap-1">
          <MemoryStick className="h-3.5 w-3.5" /> {detail.memoryLimitMb} MB
        </span>
        <span>{problem.points}điểm</span>
        <span>{problem.acRate}% AC</span>
      </div>

      <div className="mt-6">
        <Tabs
          tabs={[
            { id: "statement", label: "Đề bài" },
            { id: "submit", label: "Nộp bài" },
            { id: "submissions", label: "Bài nộp" },
          ]}
          active={tab}
          onChange={setTab}
        />
      </div>

      {tab === "statement" && (
        <Card className="mt-4 space-y-5" padded>
          <p className="font-info font-medium text-semibold text-lg leading-relaxed text-text">{detail.statement}</p>
          <hr className="my-4 border-border-strong" />
          <div>
            <h3 className="text-md font-medium font-mono text-base text-text">Dữ liệu vào</h3>
            <p className="mt-1 font-medium font-info text-sm text-text-secondary">{detail.inputFormat}</p>
          </div>

          <div>
            <h3 className="text-md font-medium  font-mono text-base font-bold text-text">Dữ liệu ra</h3>
            <p className="mt-1 font-medium font-info text-sm text-text-secondary">{detail.outputFormat}</p>
          </div>

          <div>
            <h3 className="text-md font-medium  font-mono text-base font-bold text-text">Giới hạn</h3>
            <p className="mt-1 font-medium font-info text-sm text-text-secondary">{detail.constraints}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-md font-medium font-mono text-base font-bold text-text">Ví dụ</h3>
            {detail.examples.map((ex, i) => (
              <div key={i} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <div className="mb-1 text-xs font-medium uppercase text-text-secondary">Input</div>
                  <pre className="whitespace-pre-wrap rounded-[7px] bg-surface-alt p-3 font-mono text-sm text-text overflow-x-auto">{ex.input}</pre>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium uppercase text-text-secondary">Output</div>
                  <pre className="whitespace-pre-wrap rounded-[7px] bg-surface-alt p-3 font-mono text-sm text-text overflow-x-auto">{ex.output}</pre>
                </div>
                {ex.explanation && <p className="sm:col-span-2 font-medium font-info text-text-secondary">{ex.explanation}</p>}
              </div>
            ))}
          </div>
        </Card>
      )}

      {tab === "submit" && (
        <Card className="mt-4 space-y-4 w-full" padded>
          <div className="w-full">
            <Select label="Ngôn ngữ" value={language} onChange={(e) => setLanguage(e.target.value)}>
              {languages.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </Select>
          </div>
          <div className="w-full">
            <Textarea
              label="Mã nguồn"
              rows={14}
              placeholder="Dán mã nguồn của bạn tại đây..."
              value={sourceCode}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Button onClick={handleSubmit} className="bg-accent text-white shadow-md hover:shadow-gray-500 w-full sm:w-auto">Nộp bài</Button>
            <span className="text-xs text-text-muted">Bản demo giao diện — bài nộp không được chấm thật.</span>
          </div>
        </Card>
      )}

      {tab === "submissions" && (
        <div className="mt-4 overflow-x-auto">
          {problemSubmissions.length === 0 ? (
            <div className="rounded-[7px] border border-dashed border-border-strong py-12 text-center text-sm text-text-muted">
              Chưa có bài nộp nào cho bài này.
            </div>
          ) : (
            <Table>
              <Thead>
                <Tr>
                  <Th className="text-left whitespace-nowrap">Người nộp</Th>
                  <Th className="text-left whitespace-nowrap">Ngôn ngữ</Th>
                  <Th className="text-center whitespace-nowrap">Kết quả</Th>
                  <Th className="text-center whitespace-nowrap">Điểm</Th>
                  <Th className="text-center whitespace-nowrap">Thời gian chạy</Th>
                  <Th className="text-center whitespace-nowrap">Bộ nhớ</Th>
                  <Th className="text-center whitespace-nowrap">Nộp lúc</Th>
                </Tr>
              </Thead>
              <Tbody>
                {problemSubmissions.map((s) => (
                  <Tr key={s.id}>
                    <Td className="whitespace-nowrap">
                      <Link to={`/users/${s.user}`} className="font-mono text-text hover:text-accent">
                        {s.user}
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
          )}
        </div>
      )}
    </div>
  );
}