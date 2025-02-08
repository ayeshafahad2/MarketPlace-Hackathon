"use client";

import React, { useState } from "react";

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setPaymentSuccess(true);
      setLoading(false);
    }, 2000); // Simulating payment delay
  };

  return (
    <form onSubmit={handlePayment} className="bg-white p-4 rounded-md shadow-md">
      {paymentSuccess ? (
        <div className="text-green-600 font-bold text-center text-lg">
          ✅ Payment Successful! 🎉
        </div>
      ) : (
        <>
          <button
            disabled={loading}
            className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
          >
            {!loading ? "Pay Now" : "Processing..."}
          </button>
        </>
      )}
    </form>
  );
};

export default CheckoutPage;
