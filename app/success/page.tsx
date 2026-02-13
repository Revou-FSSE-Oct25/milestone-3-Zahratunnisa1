"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
      
      <div className="text-6xl mb-6">🎉</div>

      <h1 className="text-4xl font-bold mb-4">
        Payment Successful!
      </h1>

      <p className="text-gray-600 mb-8">
        Thank you for shopping at RevoShop ❤️
      </p>

      <Link href="/products">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}
