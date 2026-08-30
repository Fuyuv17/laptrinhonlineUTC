import { Link } from "react-router-dom";
import { standings } from "../data/contests";
import { ratingTierColor } from "../lib/status";
import Badge from "../components/ui/Badge";
import { Table, Thead, Tbody, Tr, Th, Td } from "../components/ui/Table";

export default function UsersPage() {
  const ranked = [...standings].sort((a, b) => b.rating - a.rating);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="font-heading text-2xl font-bold text-text">Bảng xếp hạng người dùng</h1>
      <p className="mt-1 text-sm text-text-secondary">Xếp theo rating cao nhất.</p>

      <div className="mt-6">
        <Table>
          <Thead>
            <Tr>
              <Th className="text-left">#</Th>
              <Th className="text-left">Người dùng</Th>
              <Th className="text-center">Rating</Th>
              <Th className="lg:text-center">Số bài đã giải</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ranked.map((u, i) => (
              <Tr key={u.handle}>
                <Td className="font-mono text-text-secondary">{i + 1}</Td>
                <Td>
                  <Link to={`/users/${u.handle}`} className="font-mono font-medium text-text hover:text-accent">
                    {u.handle}
                  </Link>
                </Td>
                <Td className="text-center">
                  <Badge variant={ratingTierColor(u.rating)}>{u.rating}</Badge>
                </Td>
                <Td className="lg:text-center font-mono">{u.solved}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
