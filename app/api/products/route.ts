import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session || session.user?.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin." },
        { status: 403 }
      );
    }

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

    return NextResponse.json(
      { message: "Product created successfully.", newProduct },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
