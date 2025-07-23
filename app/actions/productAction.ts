"use server";
import prisma from "@/lib/prisma";

export async function getProductData() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  return products;
}
