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

    const preferences = await prisma.preferencePrice.findMany();
    return NextResponse.json({ preferences }, { status: 200 });
  } catch (error) {
    console.error("error for preference route: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    const body = await req.json();

    if (!session || session?.user?.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin." },
        { status: 403 }
      );
    }

    const { preference: selectedPreference, price } = body;

    const preference = await prisma.preferencePrice.create({
      data: { preference: selectedPreference, price },
    });

    return NextResponse.json({ preference }, { status: 201 });
  } catch (error) {
    console.error("error for preference route: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
