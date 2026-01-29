import { NextResponse } from 'next/server'

const products = [
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
  _req: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return NextResponse.json(
      { message: 'Product not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(product)
}
