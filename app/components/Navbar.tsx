"use client";

import Link from "next/link";
import { useAuth } from "@/components/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold tracking-wide">
        RevoShop
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/products" className="hover:text-gray-200 transition">
          Products
        </Link>

        <Link href="/cart" className="hover:text-gray-200 transition">
          Cart
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-100">
              Hello, <span className="font-semibold">{user.name}</span>
            </span>

            <button
              onClick={logout}
              className="bg-white text-purple-700 hover:bg-gray-200 px-4 py-2 rounded-md font-semibold transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-white text-purple-700 hover:bg-gray-200 px-4 py-2 rounded-md font-semibold transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

