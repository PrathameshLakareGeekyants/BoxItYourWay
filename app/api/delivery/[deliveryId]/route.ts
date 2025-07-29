import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ deliveryId: string }> }
) {
  try {
    const session = await getAuthSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { deliveryId } = await params;
    const body = await req.json();
    const { addressLine, city, state, postalCode, country, contact } = body;

    const updatedAddress = await prisma.deliveryInfo.update({
      where: {
        id: deliveryId,
        userId: session.user.id,
      },
      data: { addressLine, city, state, postalCode, country, contact },
    });

    return NextResponse.json({
      message: "Delivery address updated successfully.",
      updatedAddress,
    });
  } catch (error) {
    return NextResponse.json({ error: "Update failed." }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ deliveryId: string }> }
) {
  try {
    const session = await getAuthSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { deliveryId } = await params;

    await prisma.deliveryInfo.delete({
      where: {
        id: deliveryId,
        userId: session.user.id,
      },
    });

    return NextResponse.json({
      message: "Delivery address deleted successfully.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Delete failed." }, { status: 500 });
  }
}
