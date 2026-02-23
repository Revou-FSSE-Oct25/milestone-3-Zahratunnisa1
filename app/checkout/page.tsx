"use client";

import { useCart } from "context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const router = useRouter();

const handleCheckout = () => {
  clearCart();
  router.push("/success");
};

if (cart.length === 0) {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Cart kosong 😢</h1>
    </div>
  );
}

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="space-y-4 mb-8">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between border-b pb-2">
            <span>
              {item.title} x {item.quantity}
            </span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">
        Total: ${totalPrice.toFixed(2)}
      </h2>

      <button
        onClick={handleCheckout}
        className="w-full bg-green-600 text-white py-4 rounded-lg text-lg"
      >
        Pay Now 💳
      </button>
    </div>
  );
}
