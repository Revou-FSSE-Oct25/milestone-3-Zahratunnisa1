import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

const BASE_URL = "https://api.escuelajs.co/api/v1/products";

// ✅ GET PRODUCT BY ID (Public)
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const res = await fetch(`${BASE_URL}/${params.id}`);

    if (!res.ok) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

// ✅ UPDATE PRODUCT (Admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Forbidden - Admin only" },
        { status: 403 }
      );
    }

    const body = await request.json();

    // ✅ Basic validation
    if (
      !body.title ||
      typeof body.title !== "string" ||
      !body.price ||
      body.price <= 0
    ) {
      return NextResponse.json(
        { message: "Invalid input data" },
        { status: 400 }
      );
    }

    const res = await fetch(`${BASE_URL}/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: "Failed to update product" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

// ✅ DELETE PRODUCT (Admin only)
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Forbidden - Admin only" },
        { status: 403 }
      );
    }

    const res = await fetch(`${BASE_URL}/${params.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: "Failed to delete product" },
        { status: res.status }
      );
    }

    return NextResponse.json({
      message: "Deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}





