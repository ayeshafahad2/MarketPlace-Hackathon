// app/wishlist/page.tsx

"use client";
import { useCart } from "@/app/context/Cart";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((item, index) => (
            <li
              key={item.id ?? index} // Ensure each item has a unique key
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                {/* Displaying the image */}
                {item.productImage && (
      <Image
        src={urlForImage(item.productImage, 100, 100)}  // Pass image object
        alt={item.title}
        width={100}
        height={100}
        className="object-cover"
      />
)}
                <span className="text-lg">{item.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="text-selfcolors-darkBrown hover:text-blue-800"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart 🛒
                </button>
                <button
                  className="text-selfcolors-darkBrown hover:text-red-800"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
          <Link href="/shop" className="block text-center mt-4 text-blue-600 hover:underline">
          ← Back to Shop
        </Link>
    </div>
    
  );
}
