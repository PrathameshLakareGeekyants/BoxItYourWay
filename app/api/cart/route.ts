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
        cartItem: {
          include: {
            combo: { include: { comboItem: { include: { product: true } } } },
            product: true,
          },
          orderBy: { createdAt: "asc" },
        },
      },
    });

    if (cart && cart.cartItem) {
      cart.cartItem = cart.cartItem.map((item) => {
        if (item.combo) {
          const products = item.combo.comboItem.map((ci) => ci.product);
          const total = products.reduce(
            (sum, prod) => sum + (prod?.price || 0),
            0
          );
          let discount = 0;
          if (products.length > 2) {
            discount = total * 0.05;
          }
          const discountedTotal = total - discount;
          const finalComboTotal = discountedTotal * item.quantity;

          return {
            ...item,
            combo: {
              ...item.combo,
              totalPrice: finalComboTotal,
              discountApplied: discount > 0,
              discountAmount: discount * item.quantity,
              perUnitPrice: discountedTotal,
              perUnitDiscount: discount,
            },
          };
        }
        return item;
      });
    }

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
    const { comboId, productId } = body;

    if (!comboId && !productId) {
      return NextResponse.json(
        { error: "Either comboId or productId must be provided." },
        { status: 400 }
      );
    }

    const existingCart = await prisma.cart.findUnique({
      where: { userId },
      include: { cartItem: true },
    });

    if (!existingCart) {
      // Create a new cart
      const newCart = await prisma.cart.create({
        data: {
          userId,
          cartItem: {
            create: comboId
              ? { comboId, quantity: 1 }
              : { productId, quantity: 1 },
          },
        },
        include: { cartItem: true },
      });
      return NextResponse.json(newCart, { status: 201 });
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
      await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: cartItem.quantity + 1 },
      });

      const updatedCart = await prisma.cart.findUnique({
        where: { id: existingCart.id },
        include: { cartItem: true },
      });
      return NextResponse.json(updatedCart, { status: 200 });
    }

    await prisma.cartItem.create({
      data: {
        cartId: existingCart.id,
        comboId: comboId || undefined,
        productId: productId || undefined,
      },
    });

    const updatedCart = await prisma.cart.findUnique({
      where: { id: existingCart.id },
      include: { cartItem: true },
    });
    return NextResponse.json(updatedCart, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
