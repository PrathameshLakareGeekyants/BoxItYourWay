import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const productId = params.productId;
    const productDetails = await prisma.product.findUnique({
      where: { id: productId },
      include: { category: true },
    });

    return NextResponse.json({
      message: "Product details fetch successfully.",
      product: productDetails,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
