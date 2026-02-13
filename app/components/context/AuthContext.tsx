"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/* ================= COOKIE HELPERS ================= */
function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; path=/`;
}

/* ================= TYPES ================= */
type User = {
  email: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

/* ================= CONTEXT ================= */
const AuthContext = createContext<AuthContextType | null>(null);

/* ================= PROVIDER ================= */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  // load dari localStorage saat refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /* ================= LOGIN ================= */
  const login = (email: string, password: string) => {
    if (email === "admin@mail.com" && password === "admin123"){
      const loggedUser: User = {
        email : "admin@mail.com",
        name : "Admin",
      };

    setUser(loggedUser);
    localStorage.setItem("user", JSON.stringify(loggedUser));
    
    // penting untuk middleware
    setCookie("token", "loggedin");

    router.push("/");
  } else {
    alert("Invalid credentials")
  }
};

/* ================= LOGOUT ================= */
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");

// hapus cookie middleware
    deleteCookie("token");

    router.push("/login");
};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/* ================= HOOK ================= */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};

