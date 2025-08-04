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

    const orders = await prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        orderItems: {
          include: {
            combo: {
              include: {
                comboItem: {
                  include: { product: true },
                },
              },
            },
            product: true,
          },
        },
        delivery: true,
      },
    });

    return NextResponse.json({
      message: "Orders fetched successfully.",
      orders,
    });
  } catch (error) {
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
    const { deliveryId, orderTagId, wrapId, preferenceId } = body;

    if (!deliveryId || !userId) {
      return NextResponse.json(
        { error: "Missing deliveryId or you are not authenticated" },
        { status: 400 }
      );
    }

    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        cartItem: {
          include: {
            product: true,
            combo: {
              include: { comboItem: { include: { product: true } } },
            },
          },
        },
      },
    });

    if (!cart || cart.cartItem.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    let totalPrice = 0;

    const orderItemsData = cart.cartItem
      .map((item) => {
        if (item.product) {
          totalPrice += item.quantity * item.product.price;
          return {
            product: { connect: { id: item.product.id } },
            quantity: item.quantity,
            price: item.product.price,
          };
        }
        if (item.combo) {
          const comboProducts = item.combo.comboItem.map(
            (cItem) => cItem.product
          );
          const comboTotal = comboProducts.reduce(
            (sum, prod) => sum + (prod?.price || 0),
            0
          );
          totalPrice += item.quantity * comboTotal;
          return {
            combo: { connect: { id: item.combo.id } },
            quantity: item.quantity,
            price: comboTotal,
          };
        }
        return null;
      })
      .filter((item) => item !== null && item !== undefined);

    // Create the order
    const newOrder = await prisma.order.create({
      data: {
        userId,
        deliveryId,
        totalPrice,
        orderTagId,
        wrapId,
        preferenceId,
        orderItems: { create: orderItemsData },
      },
      include: {
        orderItems: {
          include: {
            combo: {
              include: {
                comboItem: { include: { product: true } },
              },
            },
            product: true,
          },
        },
        delivery: true,
      },
    });

    await prisma.cart.delete({ where: { id: cart.id } });

    return NextResponse.json({
      message: "Order placed successfully.",
      order: newOrder,
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
