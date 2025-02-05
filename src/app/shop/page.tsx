"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaSlidersH, FaThLarge } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link"; // Import Link component

// Define a type for Product
interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  productImage?: string; // Replace with an actual type if possible
  price: number;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [show, setShow] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("Default");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = await client.fetch(`
        *[_type == "product"]{
          _id,
          title,
          slug,
          productImage,
          price,
          tags,
          discountPercentage,
          isNew
        }
      `);

      const uniqueProducts = Array.from(
        new Set(data.map((a) => a.slug?.current).filter(Boolean))
      ).map((slug) => data.find((a) => a.slug?.current === slug)!);

      // Filter out undefined results
      const filteredUniqueProducts = uniqueProducts.filter(Boolean);

      setProducts(filteredUniqueProducts);
      setFilteredProducts(filteredUniqueProducts);
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(filteredProducts.length / show);

  const handleSort = () => {
    const sorted = [...filteredProducts];
    if (sortBy === "Default") {
      sorted.sort((a, b) => a.price - b.price);
      setSortBy("Price");
    } else {
      setSortBy("Default");
      setFilteredProducts(products);
      return;
    }
    setFilteredProducts(sorted);
  };

  return (
    <>
      <div className="relative">
        <Image
          src="/blog.png"
          alt="Hero Image"
          width={1600}
          height={600}
          className="w-full h-[400px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="w-20 h-20 object-contain cursor-pointer"
          />
          <h1 className="text-4xl font-bold text-black">Shop</h1>
          <p className="text-lg text-black">Home &gt; Shop</p>
        </div>
      </div>

      <div className="bg-gray-100 flex flex-col sm:flex-row items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2">
            <FaSlidersH size={20} />
            <span className="font-semibold">Filter</span>
          </button>
          <FaThLarge size={20} />
        </div>
        <div className="flex space-x-4 items-center">
          <span>Showing {Math.min(show, filteredProducts.length)} of {filteredProducts.length} results</span>
          <button onClick={() => setShow(show === 16 ? 32 : 16)} className="px-4 py-2 bg-white rounded-md">
            Show {show}
          </button>
          <button onClick={handleSort} className="px-4 py-2 bg-white rounded-md">
            Sort: {sortBy}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.slice((currentPage - 1) * show, currentPage * show).map((product) => (
          <div key={product._id} className="border p-4 rounded-lg relative hover:scale-95 transition-transform group">
            <div className="relative w-full h-[350px]">
              {product.productImage ? (
                <Image
                  src={urlForImage(product.productImage)}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              {product.discountPercentage && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                  {product.discountPercentage}% OFF
                </div>
              )}
            </div>
            <h3 className="text-md font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-500 text-sm">{product.tags?.join(", ")}</p>
            <p className="text-gray-500 font-bold line-through">${product.price.toFixed(2)}</p>

            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              {product.slug?.current && (
                <Link href={`/singleproduct/${product.slug?.current}`}>
                  <button className="mt-4 px-4 py-2 bg-selfcolors-darkBrown text-black font-semibold rounded-lg w-44 h-14">
                    View Product
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 mt-6">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded disabled:opacity-50">
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 border rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </>
  );
};

export default ShopPage;
