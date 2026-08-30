import { Link, useParams } from "react-router-dom";
import { getUserProfile } from "../lib/users";
import { submissions } from "../data/submissions";
import { ratingTierColor, verdictLabel, verdictVariant } from "../lib/status";
import { formatDateTime } from "../lib/format";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import StatCard from "../components/ui/StatCard";
import { Table, Thead, Tbody, Tr, Th, Td } from "../components/ui/Table";

export default function UserProfilePage() {
  const { handle = "" } = useParams();
  const profile = getUserProfile(handle);

  if (!profile) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="font-heading text-2xl font-bold text-text">Không tìm thấy người dùng</h1>
        <Link to="/users" className="mt-4 inline-block text-accent hover:underline">
          Xem bảng xếp hạng người dùng
        </Link>
      </div>
    );
  }

  const userSubmissions = submissions.filter((s) => s.user === handle);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Card padded>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-mono text-2xl font-bold text-text">{profile.handle}</h1>
          <Badge variant={ratingTierColor(profile.rating)}>{profile.rank}</Badge>
        </div>
        {profile.fullName !== "—" && <p className="mt-1 text-sm text-text-secondary">{profile.fullName}</p>}
        <div className="mt-1 text-sm text-text-muted">{profile.school}</div>
      </Card>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard value={profile.rating} label="Rating" />
        <StatCard value={profile.maxRating} label="Rating cao nhất" />
        <StatCard value={profile.solved} label="Bài đã giải" />
        <StatCard value={profile.submissions} label="Bài nộp" />
      </div>

      <section className="mt-8">
        <h2 className="font-heading text-lg font-bold text-text">Bài nộp gần đây</h2>
        <div className="mt-4">
          {userSubmissions.length === 0 ? (
            <div className="rounded-[7px] border border-dashed border-border-strong py-10 text-center text-sm text-text-muted">
              Chưa có dữ liệu bài nộp.
            </div>
          ) : (
            <Table>
              <Thead>
                <Tr>
                  <Th className="text-left">Bài tập</Th>
                  <Th className="text-left">Ngôn ngữ</Th>
                  <Th className="text-center">Kết quả</Th>
                  <Th className="text-center">Nộp lúc</Th>
                </Tr>
              </Thead>
              <Tbody>
                {userSubmissions.map((s) => (
                  <Tr key={s.id}>
                    <Td>
                      <Link to={`/problems/${s.problemCode}`} className="text-text hover:text-accent">
                        {s.problemTitle}
                      </Link>
                    </Td>
                    <Td>{s.language}</Td>
                    <Td className="text-text-muted text-center">
                      <Badge variant={verdictVariant(s.verdict)}>{verdictLabel(s.verdict)}</Badge>
                    </Td>
                    <Td className="text-text-muted text-center">{formatDateTime(s.submittedAt)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </div>
      </section>
    </div>
  );
}
