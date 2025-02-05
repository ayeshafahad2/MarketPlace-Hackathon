"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Sanity client
import { urlForImage } from "@/sanity/lib/image"; // Image URL function

// Type for Sanity asset (image)
type Asset = {
  _id: string;
  url: string;
};

// Type for image data
type ImageType = {
  asset: Asset;
};

// Type for each product
type Product = {
  _id: string;
  title: string;
  subtitle: string;
  slug: string;
  originalPrice: number;
  previousPrice: number;
  discountTag: string;
  images: ImageType[]; // Array of images
};

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // State for products
  const [mainImage, setMainImage] = useState<ImageType | null>(null); // State for main image

  // Fetching data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`
        *[_type == "product"] | order(title asc) {
          _id,
          title,
          subtitle,
          "slug": slug.current,
          originalPrice,
          previousPrice,
          discountTag,
          images[] { asset-> { _id, url } }
        }
      `);
      setProducts(data); // Set products state with fetched data
    };

    fetchProducts(); // Execute fetching on component mount
  }, []);

  // Handle image click to set it as the main image
  const handleImageClick = (image: ImageType) => {
    setMainImage(image); // Update main image state
  };

  return (
    <div>
      {/* Loop through products to display product details */}
      
      {products.map((product) => (
        <div key={product._id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
          {/* Side Images */}
          <div className="col-span-12 md:col-span-2 flex md:flex-col justify-center gap-4 md:gap-2 pt-4 md:pt-10 pl-4 md:pl-8">
            {product.images.map((image, index) => (
              <div key={index} className="cursor-pointer">
                <Image
                  src={urlForImage(image.asset).url()}
                  alt={`Product Image ${index + 1}`}
                  width={100}
                  height={64}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-35 object-cover border rounded-md"
                  onClick={() => handleImageClick(image)} // Set clicked image as the main image
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="col-span-12 md:col-span-4 flex justify-center items-center">
            <Image
              src={mainImage ? urlForImage(mainImage.asset).url() : urlForImage(product.images[0].asset).url()} // Use clicked image or default to first image
              alt="Main Product"
              width={350}
              height={350}
              className="w-3/4 sm:w-5/6 md:w-11/12 h-auto max-h-96 object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.subtitle}</p>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">{product.originalPrice}</span>
              {product.discountTag && (
                <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded-md">
                  {product.discountTag}
                </span>
              )}
            </div>
            <p className="text-lg font-semibold">{product.previousPrice}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
