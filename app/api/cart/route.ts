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

    const userId = session.user.id;
    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        cartItem: { include: { combo: { include: { comboItem: true } } } },
      },
    });

    return NextResponse.json({
      message: "Cart data fetch successfully.",
      cart,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
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
    const { comboIds } = body;

    if (!userId || !Array.isArray(comboIds) || comboIds.length === 0) {
      return NextResponse.json(
        { error: "Missing or invalid comboIds." },
        { status: 400 }
      );
    }

    const cart = await prisma.cart.create({
      data: {
        userId,
        cartItem: {
          create: comboIds.map((comboId: string) => ({
            comboId,
          })),
        },
      },
      include: {
        cartItem: true,
      },
    });

    return NextResponse.json(cart, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
