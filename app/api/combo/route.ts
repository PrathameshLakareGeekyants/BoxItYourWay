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

    const createdCombo = await prisma.combo.create({
      data: {
        name,
        userId,
        comboItem: {
          create: productIdsArray.map((productId: string) => ({
            product: { connect: { id: productId } },
          })),
        },
      },
      include: {
        comboItem: {
          include: {
            product: true,
          },
        },
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
