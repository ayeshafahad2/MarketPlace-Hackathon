"use client"; 
import { useCart } from "@/app/context/Cart";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import ReviewPage from "../Reviews/page";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  const subtotal = calculateTotal();
  const shipping = 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-8">
          <div className="w-full md:w-2/3 bg-gray-100 px-2 py-4 rounded-lg shadow-md">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Product</th>
                  <th className="border px-4 py-2">Price</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Total</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.id || index} className="border-b hover:bg-gray-200">
                    <td className="px-4 py-2 flex items-center gap-4">
                      {item.productImage && (
                        <Image
                          src={urlForImage(item.productImage, 100, 100)}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      )}
                      <span className="text-lg">{item.title}</span>
                    </td>
                    <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-2 flex items-center gap-2">
                    <button
  className="bg-gray-300 px-2 py-1 rounded"
  onClick={() => updateQuantity(item.id, (item.quantity ?? 1) > 1 ? -1 : 0)}
  disabled={(item.quantity ?? 1) <= 1} // Default to 1 if quantity is undefined
>
  -
</button>

                      <span className="text-lg">{item.quantity || 1}</span>
                      <button
                        className="bg-gray-300 px-2 py-1 rounded"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </td>
                    <td className="px-4 py-2">${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full md:w-1/3 bg-gray-100 shadow-md p-6 border rounded-md">
            <h2 className="text-2xl font-bold text-center mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-800"
            >
              Checkout
            </button>
            <Link href="/shop" className="block text-center mt-4 text-blue-600 hover:underline">
              ← Back to Shop
            </Link>
          </div>
        </div>
      )}
                <ReviewPage/>

    </div>
  );
}
