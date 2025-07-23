import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  const session = await getAuthSession();

  if (!session || session.user?.role !== "ADMIN") {
    return NextResponse.json(
      { error: "You must be an admin to update data." },
      { status: 403 }
    );
  }

  const body = await req.json();
  const { name } = body;

  if (!name) {
    NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const newCategory = await prisma.category.create({
    data: {
      name,
    },
  });

  return NextResponse.json(
    { message: "Category created successfully.", newCategory },
    { status: 201 }
  );
}
