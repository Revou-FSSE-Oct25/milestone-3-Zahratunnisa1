import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const BASE_URL = "https://api.escuelajs.co/api/v1/products";

// GET - public
export async function GET() {
  const res = await fetch(BASE_URL, {
    next: { revalidate: 60 }, // ISR 60 detik
  });

  const data = await res.json();
  return NextResponse.json(data);
}

// POST - admin only
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "admin") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const body = await request.json();

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}


