"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Unknown Customer"; 
  const amount = searchParams.get("amount") || "0"; 

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you, {name}!</h1>
        <h2 className="text-2xl">You successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          {`$${amount}`} 
        </div>
      </div>
      <Link href="/shop" className="block text-center mt-4 text-blue-600 hover:underline">
              ← Back to Shop
            </Link>
    </main>
  );
}
