import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/service/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request, params: Promise<{ orderId: string }>) {
  try {
    const session = await getAuthSession();

    if (!session || session.user?.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to update order status." },
        { status: 403 }
      );
    }

    const { orderId } = await params;
    const { status } = await req.json();

    const allowedStatuses = [
      "PENDING",
      "PROCESSING",
      "SHIPPED",
      "DELIVERED",
      "CANCELLED",
    ];
    if (!allowedStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: { status },
      include: {
        orderItem: true,
        delivery: true,
      },
    });

    return NextResponse.json({
      message: "Order status updated successfully.",
      order: updatedOrder,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
