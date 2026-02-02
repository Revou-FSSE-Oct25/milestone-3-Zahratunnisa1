import { NextResponse, NextRequest } from 'next/server'

type Product = {
  id: string
  title: string
  price: number
  description: string
  image: string
}

const products: Product[] = [
  {
    id: '1',
    title: 'Tas Keren',
    price: 100,
    description: 'Tas kece buat ngoding',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: '2',
    title: 'Sepatu Mantap',
    price: 200,
    description: 'Sepatu buat jalan jauh',
    image: 'https://via.placeholder.com/200',
  },
]

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params   // 🔥 INI KUNCI UTAMANYA

  const product = products.find((p) => p.id === id)

  if (!product) {
    return NextResponse.json(
      { message: 'Product not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(product)
}

