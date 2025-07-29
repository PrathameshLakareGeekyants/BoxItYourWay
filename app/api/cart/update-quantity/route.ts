import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

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
    const { cartId, comboId, productId, delta } = body;

    if (!cartId) {
      return NextResponse.json(
        { error: "Cart ID is required." },
        { status: 400 }
      );
    }

    if (!comboId && !productId) {
      return NextResponse.json(
        { error: "Either comboId or productId must be provided." },
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

    let cartItem;
    if (comboId) {
      cartItem = existingCart.cartItem.find((item) => item.comboId === comboId);
    } else if (productId) {
      cartItem = existingCart.cartItem.find(
        (item) => item.productId === productId
      );
    }

    if (cartItem) {
      let newQuantity = cartItem.quantity + delta;
      if (newQuantity < 1) newQuantity = 1;
      await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: newQuantity },
      });
      const updatedCart = await prisma.cart.findUnique({
        where: { id: existingCart.id },
        include: { cartItem: { orderBy: { createdAt: "asc" } } },
      });
      return NextResponse.json(updatedCart, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Cart item not found in cart" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
