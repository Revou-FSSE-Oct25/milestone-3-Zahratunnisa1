import { NextResponse } from "next/server";
import { db, Product } from "lib/fake-db";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const productId = Number(params.id);

    db.products = db.products.filter(
      (p: Product) => p.id !== productId
    );

    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete product" },
      { status: 500 }
    );
  }
}
