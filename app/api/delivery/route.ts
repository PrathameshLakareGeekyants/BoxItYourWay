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

    const userId = session?.user.id;

    const deliveryInfos = await prisma.deliveryInfo.findMany({
      where: { userId },
    });
    return NextResponse.json({
      message: "Delivery addresses fetch successfully.",
      deliveryInfos,
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
    const { name, addressLine, city, state, postalCode, country, contact } =
      body;

    const address = await prisma.deliveryInfo.create({
      data: {
        userId,
        name,
        addressLine,
        city,
        state,
        postalCode,
        country,
        contact,
      },
    });

    return NextResponse.json(address, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
