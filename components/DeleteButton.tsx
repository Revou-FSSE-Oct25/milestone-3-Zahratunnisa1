"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: number;
  title: string;
};

export default function DeleteButton({ id, title }: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm(`Yakin mau hapus produk ini "${title}"?`);
    if (!confirmDelete) return;

    try {
      await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "DELETE",
      });

      alert("Produk berhasil dihapus");
      router.refresh(); // refresh halaman admin
    } catch (err) {
      alert("Gagal hapus produk");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 px-3 py-1 rounded text-white"
    >
      Delete
    </button>
  );
}
