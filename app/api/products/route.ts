import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  // if (!session) {
  //   return NextResponse.json(
  //     { error: "You must be signed in to view products." },
  //     { status: 401 }
  //   );
  // }
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   return NextResponse.json(
  //     { error: "You must be signed in to create a product." },
  //     { status: 401 }
  //   );
  // }

  const body = await req.json();
  const { name, description, price, imageUrl, stock, categoryId } = body;

  if (!name || !price) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const newProduct = await prisma.product.create({
    data: {
      name,
      description,
      price: parseInt(price),
      imageUrl,
      stock: parseInt(stock),
      categoryId,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
