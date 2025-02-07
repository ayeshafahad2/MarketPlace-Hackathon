"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CheckOut = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    amount: "", // Keeping the amount field consistent
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.zip || !formData.amount) {
      setError("All fields are required");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Redirect with `name` and `amount` in the URL
      router.push(`/payment?name=${encodeURIComponent(formData.name)}&amount=${encodeURIComponent(formData.amount)}`);
    }, 2000);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="amount" placeholder="Enter Amount" value={formData.amount} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" disabled={isLoading}>
          {isLoading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
