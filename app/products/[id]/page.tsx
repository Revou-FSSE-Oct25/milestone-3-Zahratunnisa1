type Product = {
  id: number
  title: string
  price: number
  description: string
  images: string[]
}

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params   // ⬅️ WAJIB di Next.js terbaru

  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch product')
  }

  const product: Product = await res.json()

  return (
    <div className="max-w-4xl mx-auto p-8 grid md:grid-cols-2 gap-8">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-96 object-contain rounded"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-blue-600 font-semibold mb-4">
          ${product.price}
        </p>
        <p className="text-white-700 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  )
}


