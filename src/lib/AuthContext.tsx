import { createContext, useContext, useState, type ReactNode } from "react";
import { currentUser } from "../data/submissions";
import type { UserProfile } from "./types";

interface AuthContextValue {
  user: UserProfile | null;
  login: (handle: string, password: string) => void;
  register: (fields: { handle: string; fullName: string; email: string; password: string; school: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);

  function login(handle: string, password: string) {
    void handle;
    void password;
    setUser(currentUser);
  }

  function register(fields: { handle: string; fullName: string; email: string; password: string; school: string }) {
    void fields;
    setUser(currentUser);
  }

  function logout() {
    setUser(null);
  }

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- context hook lives alongside its provider
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
