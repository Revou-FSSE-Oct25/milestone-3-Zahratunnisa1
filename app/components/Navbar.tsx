"use client";

import Link from "next/link";
import { useAuth } from "./context/AuthContext";
import { useCart } from "./context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const { cart } = useCart();

const totalItems = cart.reduce(
  (acc, item) => acc + item.quantity,
  0
);

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

       <Link href="/cart" className="relative">
      🛒 Cart

        {totalItems > 0 && (
         <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
        {totalItems}
        </span>
        )}
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

