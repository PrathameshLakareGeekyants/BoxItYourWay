import crypto from "crypto";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/service/auth";

export async function POST(req: Request) {
  try {
    // Get authenticated user session
    const session = await getAuthSession();
    if (!session) {
      return NextResponse.json(
        { error: "You must be signed in." },
        { status: 401 }
      );
    }
    const userId = session.user.id;

    // Parse request body
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      deliveryId,
    } = await req.json();

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !deliveryId
    ) {
      return NextResponse.json(
        { error: "Missing required parameters." },
        { status: 400 }
      );
    }

    // Verify Razorpay signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, error: "Invalid signature" },
        { status: 400 }
      );
    }

    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        cartItem: {
          include: {
            product: true,
            combo: {
              include: {
                comboItem: { include: { product: true } },
              },
            },
          },
        },
      },
    });

    if (!cart || cart.cartItem.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty or already ordered." },
        { status: 400 }
      );
    }

    let totalPrice = 0;
    const orderItemsData = cart.cartItem
      .map((item) => {
        if (item.product) {
          totalPrice += item.quantity * item.product.price;
          return {
            product: { connect: { id: item.product.id } },
            quantity: item.quantity,
            price: item.product.price,
          };
        }
        if (item.combo) {
          totalPrice += (item.combo.totalPrice ?? 0) * item.quantity;
          return {
            combo: { connect: { id: item.combo.id } },
            quantity: item.quantity,
            price: item?.combo?.totalPrice ?? 0,
          };
        }
        return null;
      })
      .filter((item) => item !== null && item !== undefined);

    const newOrder = await prisma.order.create({
      data: {
        userId,
        deliveryId,
        totalPrice,
        paymentStatus: "paid",
        razorpayOrderId: razorpay_order_id,
        orderItem: { create: orderItemsData },
      },
      include: {
        orderItem: {
          include: {
            combo: {
              include: {
                comboItem: { include: { product: true } },
              },
            },
            product: true,
          },
        },
        delivery: true,
      },
    });

    for (const orderItem of newOrder.orderItem) {
      if (orderItem.product) {
        await prisma.product.update({
          where: { id: orderItem.product.id },
          data: { stock: { decrement: orderItem.quantity } },
        });
      }

      if (orderItem.combo) {
        const singleComboItem = orderItem.combo.comboItem[0];
        if (singleComboItem) {
          await prisma.product.update({
            where: { id: singleComboItem.product.id },
            data: { stock: { decrement: orderItem.quantity } },
          });
        }
      }
    }

    await prisma.cart.delete({ where: { id: cart.id } });

    return NextResponse.json(
      { success: true, order: newOrder },
      { status: 201 }
    );
  } catch (error) {
    console.error("Razorpay payment verification error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
