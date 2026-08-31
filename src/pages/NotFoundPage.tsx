import { Link } from "react-router-dom";
import { buttonVariants } from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <span className="font-heading text-6xl font-bold text-accent">404</span>
      <h1 className="mt-4 font-heading text-xl font-bold text-text">Không tìm thấy trang</h1>
      <p className="mt-2 text-sm text-text-secondary">Trang bạn tìm không tồn tại hoặc đã bị di chuyển.</p>
      <Link to="/" className={`${buttonVariants({ variant: "default" })} mt-6`}>
        Về trang chủ
      </Link>
    </div>
  );
}