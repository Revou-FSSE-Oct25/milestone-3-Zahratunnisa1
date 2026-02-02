import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        RevoShop
      </Link>

      <div className="flex gap-6 text-sm">
        <Link href="/products" className="hover:text-slate-300">
          Products
        </Link>
        <Link href="#" className="hover:text-slate-300">
          Cart
        </Link>

         <Link href="/faq" className="hover:underline">
          FAQ
        </Link>
      </div>
    </nav>
  );
}
