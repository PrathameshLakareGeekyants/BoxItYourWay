import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getAuthSession();
    if (!session) {
      return NextResponse.json(
        { error: "You must be signed in." },
        { status: 401 }
      );
    }

    const wraps = await prisma.wrap.findMany();
    return NextResponse.json({ wraps }, { status: 200 });
  } catch (error) {
    console.error("error for wrap route: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if (!session || session?.user?.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { name, isPremium, imageUrl } = body;

    if (!name || !imageUrl) {
      return NextResponse.json(
        { error: "Invalid or missing name or imageUrl" },
        { status: 400 }
      );
    }

    const finalPrice = isPremium ? 50 : 0;

    const wrap = await prisma.wrap.create({
      data: { name, isPremium, imageUrl, price: finalPrice },
    });

    return NextResponse.json({ wrap }, { status: 201 });
  } catch (error) {
    console.error("error for wrap route: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
