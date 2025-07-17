import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getAuthSession();

    if (!session) {
      return NextResponse.json(
        { error: "You must be signed in to create a product." },
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
        { error: "You must be signed in to create a product." },
        { status: 401 }
      );
    }

    const userId = session?.user?.id;

    const body = await req.json();
    const { name, productIds } = body;

    if (!name || !userId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newCombo = await prisma.combo.create({
      data: {
        name,
        userId: session.user.id,
        comboItem: {
          create: productIds.map((productId: string) => ({
            product: { connect: { id: productId } },
          })),
        },
      },
    });

    return NextResponse.json({
      message: "New combo created successfully.",
      newCombo,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
