import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getAuthSession();
    if (!session) {
      return NextResponse.json(
        { error: "You must be signed in." },
        { status: 401 }
      );
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Order tag ID missing." },
        { status: 400 }
      );
    }

    const orderTag = await prisma.orderTag.findFirst({
      where: {
        id: id,
        OR: [{ isPublic: true }, { userId: session.user.id }],
      },
    });

    if (!orderTag) {
      return NextResponse.json(
        { error: "Order tag not found or access denied." },
        { status: 404 }
      );
    }

    return NextResponse.json(orderTag, { status: 200 });
  } catch (error) {
    console.error("Error fetching order tag by ID:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
