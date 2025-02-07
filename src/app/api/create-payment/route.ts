import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY ?? "";

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is missing.");
}

// Create Stripe instance
const stripe = new Stripe(stripeSecretKey); // No apiVersion to avoid conflicts

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    console.error("Payment Intent Error:", error.message || error);
    return NextResponse.json(
      { error: error?.message || "Payment failed. Please try again later." },
      { status: 500 }
    );
  }
}
