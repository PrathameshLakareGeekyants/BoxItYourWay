import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const awaitedParams = await params;
    const productId = awaitedParams.productId;
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
