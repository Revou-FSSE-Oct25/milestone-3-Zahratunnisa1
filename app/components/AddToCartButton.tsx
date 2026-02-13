"use client";

import { useCart } from "./context/CartContext";


type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function AddToCartButton(props: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(props)}
      className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
    >
      Add to Cart 🛒
    </button>
  );
}
