import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getAuthSession();

  // if (!session) {
  //   return NextResponse.json(
  //     { error: "You must be signed in to create a product." },
  //     { status: 401 }
  //   );
  // }

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
}

export async function POST(req: Request) {
  const session = await getAuthSession();

  // if (!session) {
  //   return NextResponse.json(
  //     { error: "You must be signed in to create a product." },
  //     { status: 401 }
  //   );
  // }

  const userId = session?.user?.id;

  const body = await req.json();
  const { name } = body;

  if (!name || !userId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const newCombo = prisma.combo.create({
    data: {
      name,
      userId,
    },
  });

  return NextResponse.json({
    message: "New combo created successfully.",
    newCombo,
    status: 201,
  });
}
