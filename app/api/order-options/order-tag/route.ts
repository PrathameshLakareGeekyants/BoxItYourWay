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

    const orderTags = await prisma.orderTag.findMany();
    return NextResponse.json({ orderTags }, { status: 200 });
  } catch (error) {
    console.error("error for wrap route: ", error);
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

    const userId = session.user.id;
    const body = await req.json();

    if (session?.user?.role !== "ADMIN") {
      const { name, isPublic } = body;

      if (isPublic === true) {
        return NextResponse.json(
          { error: "You must be an admin to set isPublic true" },
          { status: 403 }
        );
      }

      const orderTag = await prisma.orderTag.create({
        data: { name, userId, isPublic },
      });

      return NextResponse.json({ orderTag }, { status: 201 });
    }

    const { name } = body;

    const orderTag = await prisma.orderTag.create({
      data: { name, userId },
    });

    return NextResponse.json({ orderTag }, { status: 201 });
  } catch (error) {
    console.error("error for wrap route: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
