import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req: Request) {
  const body = await req.json();

  const { amount, currency = "INR", receipt } = body;

  try {
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency,
      receipt: receipt || `rcptid_${Date.now()}`,
    });
    return NextResponse.json(order, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: `Payment Failed ${err}` },
      { status: 500 }
    );
  }
}
