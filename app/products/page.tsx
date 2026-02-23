import Link from "next/link";

export const revalidate = 60; // ISR 60 detik

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
              <img
                src={product.images?.[0]}
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


