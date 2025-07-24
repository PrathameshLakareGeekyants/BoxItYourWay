"use server";
import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { revalidatePath } from "next/cache";

export async function getComboData() {
  const session = await getAuthSession();
  const userId = session?.user?.id;

  const userCombos = userId
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

  const combos = { userCombos, publicCombos };

  return combos;
}

export async function deleteCombo(comboId: string) {
  const session = await getAuthSession();
  if (!session) {
    throw new Error("You must be signed in to delete a combo.");
  }

  const combo = await prisma.combo.findUnique({
    where: { id: comboId },
  });
  if (!combo) {
    throw new Error("Combo not found.");
  }

  const orderItem = await prisma.orderItem.findFirst({
    where: { comboId },
  });
  if (orderItem) {
    throw new Error("This combo has been ordered and cannot be deleted.");
  }

  const cartItem = await prisma.cartItem.findFirst({ where: { comboId } });
  if (cartItem) {
    throw new Error("This combo is present in a cart and cannot be deleted.");
  }

  if (combo.userId !== session.user.id) {
    throw new Error("You are not authorized to delete this combo.");
  }

  const deletedCombo = await prisma.combo.delete({
    where: { id: comboId },
  });

  revalidatePath("/combos");
  return { message: "Combo deleted successfully.", deletedCombo };
}
