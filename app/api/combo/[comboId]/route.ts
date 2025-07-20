import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { comboId: string } }
) {
  try {
    const session = await getAuthSession();
    if (!session) {
      return NextResponse.json(
        { error: "You must be signed in to update a combo." },
        { status: 401 }
      );
    }
    const { comboId } = await params;
    const combo = await prisma.combo.findUnique({
      where: { id: comboId },
    });

    if (!combo) {
      return NextResponse.json({ error: "Combo not found." }, { status: 404 });
    }

    if (combo.userId !== session.user.id) {
      return NextResponse.json(
        { error: "You are not authorized to update this combo." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { name, productIds } = body;

    const updatedCombo = await prisma.combo.update({
      where: { id: comboId },
      data: {
        name,
        comboItem: {
          deleteMany: {},
          create: productIds.map((productId: string) => ({
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
      message: "Combo updated successfully.",
      updatedCombo,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", serverError: error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { comboId: string } }
) {
  try {
    const session = await getAuthSession();
    if (!session) {
      return NextResponse.json(
        { error: "You must be signed in to update a combo." },
        { status: 401 }
      );
    }

    const comboId = params.comboId;

    const combo = await prisma.combo.findUnique({
      where: { id: comboId },
    });

    if (!combo) {
      return NextResponse.json({ error: "Combo not found." }, { status: 404 });
    }

    const orderItem = await prisma.orderItem.findFirst({
      where: { comboId },
    });

    if (orderItem) {
      return NextResponse.json(
        { error: "This combo has been ordered and cannot be deleted." },
        { status: 400 }
      );
    }

    if (combo.userId !== session.user.id) {
      return NextResponse.json(
        { error: "You are not authorized to delete this combo." },
        { status: 403 }
      );
    }

    const deletedCombo = await prisma.combo.delete({
      where: { id: comboId },
      include: {
        comboItem: {
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json({
      message: "Combo deleted successfully.",
      deletedCombo,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
