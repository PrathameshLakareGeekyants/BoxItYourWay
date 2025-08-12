"use server";
import { PRODUCTS_API } from "@/constants";
import { fetchData } from "@/lib/network/fetcher";
import prisma from "@/lib/prisma";

export async function getProductData() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return products;
}

export async function getProductById(id: string) {
  const product = fetchData(`${PRODUCTS_API}/${id}`);

  return await product;
}
