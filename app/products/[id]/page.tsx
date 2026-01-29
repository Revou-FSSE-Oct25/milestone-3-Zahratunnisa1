'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function ProductDetailPage() {
  const params = useParams()
  const id = params.id as string

  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Loading...</p>
  if (!product) return <p>Product not found</p>

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

           {/* Gambar */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-72 object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-10000">{product.description}</p>
        <p className="text-xl font-semibold text-green-500">
          ${product.price}
        </p>

      <button className="mt-4 bg-slate-900 text-white px-6 py-3 rounded hover:bg-slate-700">
          Add to Cart
      </button>
      </div>
    </div>
    </div>
  )
}
