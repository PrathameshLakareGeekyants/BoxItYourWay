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

    const userId = session?.user?.id;
    const body = await req.json();
    const { name, productIds } = body;

    if (!name || !userId || !Array.isArray(productIds)) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const createdCombo = await prisma.combo.create({
      data: {
        name,
        userId,
        comboItem: {
          create: productIds.map((productId: string) => ({
            product: { connect: { id: productId } },
          })),
        },
      },
    });

    const fullCombo = await prisma.combo.findUnique({
      where: { id: createdCombo.id },
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
      combo: fullCombo,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
