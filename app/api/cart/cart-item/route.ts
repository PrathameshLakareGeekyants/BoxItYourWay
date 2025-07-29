import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
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
    const { cartId, cartItemId } = body;

    if (!cartId && !cartItemId) {
      return NextResponse.json(
        { error: "Cart ID and Cart Item Id is required." },
        { status: 400 }
      );
    }

    const existingCart = await prisma.cart.findUnique({
      where: { id: cartId, userId },
      include: { cartItem: true },
    });

    if (!existingCart) {
      return NextResponse.json(
        { error: "Cart data not found" },
        { status: 404 }
      );
    }

    await prisma.cartItem.delete({
      where: { id: cartItemId, cartId },
    });

    const updatedCart = await prisma.cart.findUnique({
      where: { id: existingCart.id },
      include: { cartItem: { orderBy: { createdAt: "asc" } } },
    });

    return NextResponse.json(updatedCart, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
