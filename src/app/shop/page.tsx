"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaSlidersH, FaThLarge } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  productImage?: string;
  price: number;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [show, setShow] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("Default");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [gridView, setGridView] = useState<boolean>(true);

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

      const filteredUniqueProducts = uniqueProducts.filter(Boolean);
      setProducts(filteredUniqueProducts);
      setFilteredProducts(filteredUniqueProducts);
    };

    fetchProducts();
  }, []);

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProducts];
    if (value === "A-Z") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === "Z-A") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    } else {
      sorted = [...products];
    }
    setFilteredProducts(sorted);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.tags?.includes(category)));
    }
  };

  const totalPages = Math.ceil(filteredProducts.length / show);

  const uniqueCategories = ["All", ...new Set(products.flatMap((p) => p.tags || []))];

  return (
    <>
      <div className="relative">
        <Image src="/blog.png" alt="Hero Image" width={1600} height={600} className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black">
          <Image src="/logo.png" alt="Logo" width={80} height={80} className="w-20 h-20 object-contain cursor-pointer" />
          <h1 className="text-4xl font-bold text-black">Shop</h1>
          <p className="text-lg text-black">Home &gt; Shop</p>
        </div>
      </div>

      <div className="bg-gray-100 flex flex-col sm:flex-row items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <FaThLarge size={20} className="cursor-pointer" onClick={() => setGridView(!gridView)} />
        </div>
        <div className="flex space-x-4 items-center">
          <span>Showing {Math.min(show, filteredProducts.length)} of {filteredProducts.length} results</span>
          <select onChange={(e) => handleCategoryFilter(e.target.value)} className="px-2 py-1 border rounded">
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select onChange={(e) => handleSort(e.target.value)} className="px-2 py-1 border rounded">
            <option value="Default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>

      <div className={`grid ${gridView ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-6 p-6`}>
        {filteredProducts.slice((currentPage - 1) * show, currentPage * show).map((product) => (
          <div key={product._id} className="border p-4 rounded-lg relative hover:scale-95 transition-transform group">
            <div className="relative w-full h-[350px]">
              {product.productImage ? (
                <Image src={urlForImage(product.productImage)} alt={product.title} layout="fill" objectFit="cover" className="rounded-lg" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>
            <h3 className="text-md font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-500 text-sm">{product.tags?.join(", ")}</p>
            <Link href={`/singleproduct/${product.slug?.current}`}>
              <button className="mt-4 px-4 py-2 bg-selfcolors-darkBrown text-white font-semibold rounded-lg w-full">View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopPage;
