import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { useAuth } from "../lib/AuthContext";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [fields, setFields] = useState({ fullName: "", handle: "", email: "", password: "", confirm: "", school: "" });
  const error = fields.confirm && fields.password !== fields.confirm ? "Mật khẩu xác nhận không khớp" : undefined;

  function set(key: keyof typeof fields) {
    return (e: ChangeEvent<HTMLInputElement>) => setFields((f) => ({ ...f, [key]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (error) return;
    register(fields);
    navigate("/profile");
  }

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-16">
      <Card className="w-full" padded>
        <div className="flex items-center gap-2">
          <UserPlus className="h-5 w-5 text-accent" />
          <h1 className="font-heading text-xl font-bold text-text">Đăng ký</h1>
        </div>

        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input label="Họ và tên" required value={fields.fullName} onChange={set("fullName")} />
          <Input label="Tên đăng nhập" required value={fields.handle} onChange={set("handle")} />
          <Input label="Email" type="email" required value={fields.email} onChange={set("email")} />
          <Input label="Trường học" value={fields.school} onChange={set("school")} />
          <Input label="Mật khẩu" type="password" required value={fields.password} onChange={set("password")} />
          <Input
            label="Xác nhận mật khẩu"
            type="password"
            required
            value={fields.confirm}
            onChange={set("confirm")}
            error={error}
          />
          <Button type="submit" variant="default" size="lg" className="shadow-md shadow-gray-500">
            Tạo tài khoản
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-text-secondary">
          Đã có tài khoản?{" "}
          <Link to="/login" className="font-bold text-accent hover:underline">
            Đăng nhập
          </Link>
        </p>
      </Card>
    </div>
  );
}