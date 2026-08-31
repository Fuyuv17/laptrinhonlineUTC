import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useAuth } from "../lib/AuthContext";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    login(handle, password);
    navigate("/profile");
  }

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-16">
      <Card className="w-full" padded>
        <div className="flex items-center gap-2">
          <LogIn className="h-5 w-5 text-accent" />
          <h1 className="font-heading text-xl font-bold text-text">Đăng nhập</h1>
        </div>

        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input label="Tên đăng nhập" required value={handle} onChange={(e) => setHandle(e.target.value)} />
          <Input
            label="Mật khẩu"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="flex items-center gap-2 text-sm text-text-secondary">
            <input type="checkbox" className="accent-accent" />
            Ghi nhớ đăng nhập
          </label>
          <Button type="submit" variant="default" size="lg" className="shadow-md shadow-gray-500">
            Đăng nhập
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-text-secondary">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="font-bold text-accent hover:underline">
            Đăng ký
          </Link>
        </p>
      </Card>
    </div>
  );
}