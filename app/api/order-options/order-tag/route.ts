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

    const myOrderTags = await prisma.orderTag.findMany({
      where: { userId: session.user.id, isPublic: false },
    });
    const publicTags = await prisma.orderTag.findMany({
      where: { isPublic: true },
    });
    return NextResponse.json({ myOrderTags, publicTags }, { status: 200 });
  } catch (error) {
    console.error("error for order tag route: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if (!session) {
      return NextResponse.json(
        { error: "You must be signed in." },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const body = await req.json();
    const { name, isPublic, price } = body;

    if (session.user.role !== "ADMIN") {
      if (isPublic === true) {
        return NextResponse.json(
          { error: "You must be an admin to set isPublic true" },
          { status: 403 }
        );
      }

      const finalPrice = typeof price === "number" ? price : 10;
      const orderTag = await prisma.orderTag.create({
        data: { name, userId, isPublic, price: finalPrice },
      });
      return NextResponse.json({ orderTag }, { status: 201 });
    }

    const orderTag = await prisma.orderTag.create({
      data: { name, userId, isPublic, price: 10 },
    });

    return NextResponse.json({ orderTag }, { status: 201 });
  } catch (error) {
    console.error("error for order tag route: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
