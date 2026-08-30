import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { buttonClasses } from "../../lib/variants";
import { useAuth } from "../../lib/AuthContext";

const navLinks = [
  { to: "/problems", label: "PROBLEMS" },
  { to: "/submissions", label: "SUBMISSIONS" },
  { to: "/users", label: "USERS" },
  { to: "/contests", label: "CONTESTS" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-100 flex h-16 w-full items-center justify-between bg-navbar px-4 shadow-raised">
      <Link to="/" className="flex items-center gap-2.5 font-heading text-lg font-bold text-white">
        <img 
          src="/UTClogo.svg" 
          alt="Logo UTC" 
          className="h-12.5 w-12.5 object-contain" 
        />
        <span>UTCOJ</span>
      </Link>

      <nav className="hidden items-center gap-7 md:flex absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `border-b-2 px-3 py-5 text-sm font-sans font-semibold tracking-wide transition-colors ${
                isActive ? "border-accent-2 text-accent-2" : "border-transparent text-white/67 hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="hidden items-center gap-2 md:flex">
        {user ? (
          <>
            <Link to={`/users/${user.handle}`} className="px-2 font-mono text-sm text-white/90 hover:text-white">
              {user.handle}
            </Link>
            <button onClick={logout} className={buttonClasses("outline", "sm", "border-white/30 text-white hover:border-accent-2 hover:text-accent-2")}>
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className={buttonClasses("outline", "sm", "border-white/30 text-white hover:border-accent-2 hover:text-accent-2")}>
              Đăng nhập
            </Link>
            <Link to="/register" className={buttonClasses("surface", "sm")}>
              Đăng ký  
            </Link>
          </>
        )}
      </div>

      <button
        className="text-white md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Đóng menu" : "Mở menu"}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full border-t border-white/10 bg-navbar px-4 pb-4 md:hidden shadow-lg">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-[7px] px-3 py-2.5 text-sm font-semibold ${
                    isActive ? "bg-white/10 text-accent-2" : "text-white/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-3 flex gap-2">
            {user ? (
              <button onClick={logout} className={buttonClasses("outline", "sm", "flex-1 border-white/30 text-white")}>
                Đăng xuất ({user.handle})
              </button>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className={buttonClasses("outline", "sm", "flex-1 border-white/30 text-white")}>
                  Đăng nhập
                </Link>
                <Link to="/register" onClick={() => setOpen(false)} className={buttonClasses("surface", "sm", "flex-1")}>
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}