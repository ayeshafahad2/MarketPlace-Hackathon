"use client";
import React, { useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

// Define the type for a product
interface Product {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  slug: string;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
}

const SearchBar = () => {
  const [query, setQuery] = useState<string>(""); // Input query state
  const [results, setResults] = useState<Product[]>([]); // Search results state
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 2) {
      setLoading(true);
      try {
        const fetchedResults: Product[] = await client.fetch(
          `*[_type == "product" && title match $searchQuery]{
            _id,
            title,
            "imageUrl": productImage.asset->url,
            price,
            "slug": slug.current,
            tags,
            discountPercentage,
            isNew
          }`,
          { searchQuery: `${searchQuery}*` }
        );
        setResults(fetchedResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]); // Clear results if query is too short
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="w-100 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />

      {/* Loading Indicator */}
      {loading && <p className="text-gray-600 mt-2">Loading...</p>}

      {/* Search Results */}
      {!loading && results.length > 0 && (
        <ul className="absolute mt-2 bg-white shadow-lg rounded-lg w-full max-h-60 overflow-y-auto z-10">
          {results.map((item) => (
            <li key={item._id}>
              <div className="flex items-center p-3 rounded-lg transition-shadow cursor-pointer">
                {/* Clickable Product Image */}
                <Link href={`/product/${item.slug}`} className="w-16 h-16 flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover rounded-md"
                  />
                </Link>

                {/* Product Details */}
                <div className="ml-4">
                  <Link href={`/singleproduct/${item.slug}`}>
                    <h3 className="text-lg font-semibold text-gray-800 hover:underline">{item.title}</h3>
                  </Link>
                  <p className="text-sm font-bold text-blue-600 mt-1">
                    ${item.price.toFixed(2)}{" "}
                    {item.discountPercentage > 0 && (
                      <span className="text-red-500">(-{item.discountPercentage}%)</span>
                    )}
                  </p>
                  {item.isNew && <span className="text-green-500 text-xs">New Arrival</span>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
