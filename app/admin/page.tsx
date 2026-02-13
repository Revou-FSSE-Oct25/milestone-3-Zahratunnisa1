import Link from "next/link";
import DeleteButton from "../components/DeleteButton";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function AdminPage() {
  const products = await getProducts();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <Link
          href="/admin/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Product
        </Link>
      </div>

      {/* TABLE */}
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="text-center">
              <td className="border p-2">
                <img
                  src={p.images[0]}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>

              <td className="border p-2">{p.title}</td>
              <td className="border p-2">${p.price}</td>

              <td className="border p-2 flex gap-2 justify-center">
                <Link
                  href={`/admin/edit/${p.id}`}
                  className="bg-yellow-500 px-3 py-1 rounded text-white"
                >
                  Edit
                </Link>

                {/* 🔥 Client Component */}
                <DeleteButton id={p.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

