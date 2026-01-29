'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
              />
              <h3 className="mt-4 font-semibold">{product.title}</h3>
              <p className="mt-2 text-gray-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
