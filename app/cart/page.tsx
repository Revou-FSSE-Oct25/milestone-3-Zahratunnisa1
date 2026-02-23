"use client";

import { useCart } from "context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Cart is empty 🛒</h1>
        <Link href="/products" className="text-blue-500 underline">
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border p-4 rounded-lg"
          >
            <img src={item.image} className="w-24 h-24 object-contain" />

            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p>Qty: {item.quantity}</p>
              <p className="text-blue-600 font-bold">
                ${item.price * item.quantity}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">
          Total: ${totalPrice.toFixed(2)}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-gray-400 text-white px-6 py-3 rounded"
          >
            Clear Cart
          </button>

          <Link href="/checkout">
            <button className="bg-green-600 text-white px-6 py-3 rounded">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
