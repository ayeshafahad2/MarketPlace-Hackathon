"use client";
import Image from "next/image";
import { useState } from "react";


const images = [
  "/Image.png", // Larger height image
  "/study.png", // Smaller height image
  "/study2.png",
  "/home-a.png",
  "/home-b.png",
  "/home-c.png",
];

export default function InspirationPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 bg-selfcolors-lightCream text-center">
      {/* Heading and description */}
      <div className="mb-6 text-center">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold">50+ Beautiful Rooms</div>
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-selfcolors-darkBrown">Inspiration</div>
        <div className="text-lg sm:text-xl md:text-2xl text-gray-700 mx-auto w-full max-w-[600px]">
          <span>Our designer already made a lot of beautiful</span>
          <span> prototypes of rooms that inspire you.</span>
    <button className="bg-selfcolors-darkBrown text-black py-2 px-4 rounded-lg text-lg font-bold">
      EXPLORE MORE 
    </button>
  

        </div>
      </div>

      {/* Image and Button Section */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handleNext}
          className="text-4xl font-bold text-selfcolors-darkBrown bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-gray-200 lg:hidden"
        >
          &lt;
        </button>

        {/* Image Section */}
        <div className="flex gap-4 flex-wrap justify-center">
          {/* Image 1 (Large Height with Hover and Overlay Text) */}
          <div className="relative w-[300px] h-[500px] md:w-[350px] md:h-[550px] lg:w-[400px] lg:h-[600px] rounded-lg overflow-hidden transition-all duration-300 hover:h-[600px]">
            <Image
              src={images[currentIndex]}
              alt="Room Inspiration Large"
              layout="fill"
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-end items-start text-left p-4 text-white">
              <h3 className="text-lg font-bold">01 Bed Room</h3>
              <p className="text-lg">Inner Peace</p>
              <button className="mt-2 bg-selfcolors-darkBrown text-white text-sm px-4 py-1 rounded shadow-md hover:bg-gray-200">
                -&gt;
              </button>
            </div>
          </div>

          {/* Image 2 (Small Height with Hover) */}
          <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] rounded-lg overflow-hidden transition-all duration-300 hover:h-[500px]">
            <Image
              src={images[(currentIndex + 1) % images.length]}
              alt="Room Inspiration Small"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="text-4xl font-bold text-selfcolors-darkBrown bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-gray-200 lg:hidden"
        >
          &gt;
        </button>
      </div>

      {/* Navigation Buttons on Larger Screens */}
      <div className="hidden lg:flex gap-6 mt-6">
        <button
          onClick={handleNext}
          className="text-4xl font-bold text-selfcolors-darkBrown bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-gray-200"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="text-4xl font-bold text-selfcolors-darkBrown bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-gray-200"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
