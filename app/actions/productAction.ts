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

export async function getProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });

  return product;
}
