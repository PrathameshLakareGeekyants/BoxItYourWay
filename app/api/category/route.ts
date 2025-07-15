import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
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

  return NextResponse.json(newCategory, { status: 201 });
}
