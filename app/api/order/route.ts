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

    const userId = session?.user?.id;

    const orders = await prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        orderItem: {
          include: {
            combo: {
              include: {
                comboItem: {
                  include: { product: true },
                },
              },
            },
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

    const userId = session?.user?.id;
    const body = await req.json();
    const { deliveryId, comboIds, totalPrice } = body;
    const totalPriceInt = parseInt(totalPrice, 10);

    if (
      !deliveryId ||
      !userId ||
      !Array.isArray(comboIds) ||
      !comboIds.length ||
      typeof totalPriceInt !== "number"
    ) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    const combos = await prisma.combo.findMany({
      where: { id: { in: comboIds } },
      include: {
        comboItem: {
          include: { product: true },
        },
      },
    });

    // snapshot of combo items
    const comboSnapshot = combos.map((combo) => ({
      id: combo.id,
      name: combo.name,
      comboItems: combo.comboItem.map((item) => ({
        id: item.id,
        product: {
          id: item.product.id,
          name: item.product.name,
          description: item.product.description,
          price: item.product.price,
          imageUrl: item.product.imageUrl,
        },
      })),
    }));

    const order = await prisma.order.create({
      data: {
        userId,
        deliveryId,
        totalPrice: totalPriceInt,
        comboSnapshot,
        orderItem: {
          create: comboIds.map((comboId: string) => ({
            combo: { connect: { id: comboId } },
          })),
        },
      },
      include: {
        orderItem: {
          include: {
            combo: {
              include: {
                comboItem: {
                  include: { product: true },
                },
              },
            },
          },
        },
        delivery: true,
      },
    });

    return NextResponse.json({
      message: "Order placed successfully.",
      order,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
