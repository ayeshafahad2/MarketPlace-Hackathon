"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // ✅ Correct usage of useParams
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/app/context/Cart";

// Define Types
interface ProductImage {
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Product {
  title: string;
  price: number;
  description: string;
  productImage?: ProductImage;
}

// Notification Component
const Notification = ({ message }: { message: string }) => (
  <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg transition-opacity">
    {message}
  </div>
);

const ProductPage = () => {
  const { slug } = useParams(); // ✅ Extract slug properly
  const { addToCart, addToWishlist } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const fetchedProduct: Product | null = await client.fetch(
          `*[_type == "product" && slug.current == $slug][0]`,
          { slug }
        );
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [slug]); // ✅ Ensure slug is in dependencies

  // Function to show notification
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  };

  // Handlers for cart and wishlist
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      showNotification("Added to Cart ✅");
    }
  };

  const handleAddToWishlist = () => {
    if (product) {
      addToWishlist(product);
      showNotification("Added to Wishlist ❤️");
    }
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-bold">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-4">
      {notification && <Notification message={notification} />}

      {/* Breadcrumb */}
      <div className="bg-gray-100 w-full py-3 px-4 rounded-md">
        <h2 className="text-sm md:text-base font-medium text-gray-700">
          Home &gt; Shop &gt; {product.title}
        </h2>
      </div>

      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-6">
        {/* Side Images */}
        <div className="col-span-12 md:col-span-2 flex md:flex-col gap-3 overflow-auto">
          {product.productImage ? (
            <Image
              src={urlForImage(product.productImage)?.url() || "/placeholder.jpg"}
              alt={product.title}
              width={80}
              height={80}
              className="w-20 h-20 md:w-24 md:h-24 object-cover border rounded-md cursor-pointer hover:opacity-75"
            />
          ) : (
            <p className="text-gray-500">No image available</p>
          )}
        </div>

        {/* Main Product Image */}
        <div className="col-span-12 md:col-span-5 flex justify-center items-center">
          {product.productImage ? (
            <Image
              src={urlForImage(product.productImage)?.url() || "/placeholder.jpg"}
              alt={product.title}
              width={400}
              height={400}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-md shadow-md"
            />
          ) : (
            <p className="text-gray-500">No main image available</p>
          )}
        </div>

        {/* Product Details */}
        <div className="col-span-12 md:col-span-5 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <h2 className="text-xl font-semibold text-gray-600">Rp. {product.price}</h2>

          {/* Star Ratings */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 4 }, (_, index) => (
                <FaStar key={index} />
              ))}
              <FaStarHalfAlt />
            </div>
            <span className="text-gray-500 text-sm">(3457 Reviews)</span>
            <span className="text-blue-600 text-sm font-semibold">| In Stock</span>
          </div>

          {/* Product Description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition"
            >
              <FaShoppingCart />
              Add to Cart
            </button>

            <button
              onClick={handleAddToWishlist}
              className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition"
            >
              <FaHeart />
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
