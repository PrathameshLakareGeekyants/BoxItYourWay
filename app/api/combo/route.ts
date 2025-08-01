import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getAuthSession();
    const userId = session?.user?.id;

    const usersCombos = userId
      ? await prisma.combo.findMany({
          where: { userId },
          include: {
            comboItem: {
              include: { product: true },
            },
          },
        })
      : [];

    const publicCombos = await prisma.combo.findMany({
      where: { userId: null },
      include: {
        comboItem: {
          include: { product: true },
        },
      },
    });

    return NextResponse.json({
      message: "Combos fetched successfully..",
      usersCombos,
      publicCombos,
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

    const body = await req.json();
    const { name, productIds, isPublic } = body;
    const productIdsArray = Array.isArray(productIds) ? productIds : [];

    const isAdmin = session.user?.role === "ADMIN" || false;
    let userId: string | null;
    if (isPublic && isAdmin) {
      userId = null;
    } else {
      userId = session.user?.id;
      if (!userId) {
        return NextResponse.json(
          { error: "Could not determine userId." },
          { status: 400 }
        );
      }
    }

    if (!name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    let totalPrice: number | undefined = undefined;

    let discountAmount: number | undefined = undefined;
    let perUnitPrice: number | undefined = undefined;
    let perUnitDiscount: number | undefined = undefined;

    if (productIdsArray.length > 0) {
      const products = await prisma.product.findMany({
        where: { id: { in: productIdsArray } },
        select: { price: true },
      });
      const unitTotal = products.reduce(
        (sum, prod) => sum + (prod.price || 0),
        0
      );

      let discount = 0;
      if (products.length > 2) {
        discount = unitTotal * 0.05;
      }
      perUnitDiscount = discount;
      perUnitPrice = unitTotal - discount;
      totalPrice = perUnitPrice;
      discountAmount = discount;
    }

    const createdCombo = await prisma.combo.create({
      data: {
        name,
        userId,
        totalPrice,
        discountAmount,
        perUnitPrice,
        perUnitDiscount,
        comboItem: productIdsArray.length
          ? {
              create: productIdsArray.map((productId: string) => ({
                product: { connect: { id: productId } },
              })),
            }
          : undefined,
      },
      include: {
        comboItem: { include: { product: true } },
      },
    });

    return NextResponse.json({
      message: "New combo created successfully.",
      combo: createdCombo,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
