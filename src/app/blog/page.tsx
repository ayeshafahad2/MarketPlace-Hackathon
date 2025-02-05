// Reusable AdminTag Component
"use client";
import Image from "next/image";
import React from "react";
import { FaSearch, FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";

const AdminTag = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 text-gray-800">
      <FaUser className="w-4 h-4 text-gray-500" />
      <span className="text-md font-bold text-gray-500">Admin</span>
      <FaCalendarAlt className="w-4 h-4 text-gray-500" />
      <span className="text-md font-bold text-gray-500">14 Oct 2022</span>
      <FaTag className="w-4 h-4 text-gray-500" />
      <span className="text-md font-bold text-gray-500">Wood</span>
    </div>
  );
};

// BlogContentSection Component
interface BlogContentSectionProps {
  imgSrc: string;
  title: string;
  description: string;
  isSmallImage?: boolean;
}

const BlogContentSection: React.FC<BlogContentSectionProps> = ({
  imgSrc,
  title,
  description,
  isSmallImage = false,
}) => {
  return (
    <div className="w-full md:w-2/3 flex flex-col">
      {/* Responsive Image Section */}
      <div className={`${isSmallImage ? "h-[300px] sm:h-[400px]" : "h-[400px] sm:h-[500px]"}`}>
        <Image
          src={imgSrc}
          alt={title}
          width={isSmallImage ? 800 : 1200}
          height={800}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      {/* Content Section */}
      <div className="p-6 bg-white shadow-lg mt-6 rounded-md">
        <AdminTag />
        <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-relaxed">
          {title}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          {description}
          <br />
          <button className="text-black hover:underline text-base cursor-pointer">
            Read More
          </button>
        </p>
      </div>
    </div>
  );
};

// SearchBar Component
const SearchBar = () => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <div className="flex items-center border p-3 rounded-md gap-3">
        <FaSearch className="text-gray-600" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 w-full outline-none bg-transparent text-gray-800"
        />
      </div>
    </div>
  );
};

// CategoriesSection Component
const CategoriesSection = () => {
  return (
    <div className="space-y-3 p-4 border rounded-md shadow-sm">
      <h2 className="text-lg font-bold text-black mb-3">Categories</h2>
      <ul className="space-y-2 text-gray-700">
        {["Crafts", "Design", "Handmade", "Interior", "Wood"].map((category, idx) => (
          <li key={idx} className="flex p-2 justify-between items-center">
            <span>{category}</span>
            <span>{idx * 2 + 2}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// RecentPosts Component
const RecentPosts = () => {
  return (
    <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded-md space-y-4">
      <div className="p-4 border rounded-md shadow-sm">
        <h2 className="text-lg font-bold text-black mb-4">Recent Posts</h2>
        <ul className="space-y-4">
          {["blog-a.png", "blog-b.png", "blog-c.png", "blog-d.png", "blog-e.png"].map((img, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <Image
                src={`/${img}`}
                alt={`Recent ${idx + 1}`}
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex flex-col">
                <span className="font-bold text-sm">Blog Post Title {idx + 1}</span>
                <span className="text-sm text-gray-500">{`0${idx + 1} Aug 2022`}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main Blog Component
const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/blog.png"
          alt="Hero Image"
          width={1400}
          height={400}
          className="object-cover w-full h-[300px] sm:h-[400px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain cursor-pointer sm:w-[100px] sm:h-[100px]"
          />
          <h1 className="mt-4 text-2xl sm:text-4xl font-bold text-gray-800">
            Blog
          </h1>
          <p className="mt-2 text-sm sm:text-lg text-gray-600">
            Home &gt; Blog
          </p>
        </div>
      </div>

      {/* Blog Sections */}
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        <BlogContentSection
          imgSrc="/blog-1.png"
          title="Exploring Modern Craft Designs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.."
        />
        <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-md">
          <SearchBar />
          <CategoriesSection />
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        <BlogContentSection
          imgSrc="/blog-2.png"
          title="Handmade Jewelry Trends"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
        />
        <RecentPosts />
      </div>

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        <BlogContentSection
          imgSrc="/blog-3.png"
          title="Wood Interior Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
          isSmallImage={true}
        />
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-10">
        {[1, 2, 3, "Next"].map((page, idx) => (
          <div
            key={idx}
            className={`w-12 h-12 flex items-center justify-center ${
              page === 1 ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] text-black"
            } rounded-md`}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
