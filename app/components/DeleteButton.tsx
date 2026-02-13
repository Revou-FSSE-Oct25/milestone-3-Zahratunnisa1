"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: number;
};

export default function DeleteButton({ id }: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm("Yakin mau hapus produk ini?");
    if (!confirmDelete) return;

    try {
      await fetch(`/api/admin/products/${id}`, {
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
