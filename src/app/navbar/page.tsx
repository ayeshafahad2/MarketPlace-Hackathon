"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/context/Cart"; // Assuming you have the cart context properly set up
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import SearchBar from "../search/page";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const { cart, wishlist } = useCart(); // Using custom cart and wishlist context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ClerkProvider>
      <div className="w-full py-4 px-6 bg-white shadow-md">
        <header className="flex flex-wrap items-center justify-between mx-auto h-fit">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              className="w-[40px] h-[32px] sm:w-[50px] sm:h-[40px]"
              width={50}
              height={50}
            />
            <h1 className="text-[24px] sm:text-[34px] font-bold text-black">Furniro</h1>
          </div>

          {/* Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center">
            <ul className="flex gap-8 lg:gap-12 text-[14px] sm:text-[16px] font-medium text-selfcolors-darkBrown">
              <li className="hover:text-blue-500 transition-colors">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue-500 transition-colors">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="hover:text-blue-500 transition-colors">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-blue-500 transition-colors">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Icons Section */}
          <div className="hidden md:flex items-center gap-4 sm:gap-6 text-selfcolors-darkBrown">
            <SignedOut>
              <SignInButton >
              <Icon icon="mdi:account-alert-outline" className="w-24 h-24 sm:w-24 sm:h-8" />
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SearchBar />

            <Link href="/Wishlist" className="relative">
              <FaHeart className="text-selfcolors-darkBrown text-2xl cursor-pointer" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link href="/addtocart" className="relative">
              <FaShoppingCart className="text-selfcolors-darkBrown text-2xl cursor-pointer" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              <Icon
                icon={isMobileMenuOpen ? "heroicons-outline:x" : "heroicons-outline:menu-alt-3"}
                className="w-8 h-8"
              />
            </button>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav>
              <ul className="flex flex-col gap-4 text-[14px] sm:text-[16px] font-medium">
                <li className="hover:text-blue-500 transition-colors">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-blue-500 transition-colors">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="hover:text-blue-500 transition-colors">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="hover:text-blue-500 transition-colors">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Icons Section (Mobile) */}
            <div className="mt-6 flex justify-evenly border-t pt-4">
              <SignedOut>
                <SignInButton>
                <Icon icon="mdi:account-alert-outline" className="w-24 h-24 sm:w-24 sm:h-8" />
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>

              <SearchBar />
              <Link href="/Wishlist" className="relative">
                <FaHeart className="text-selfcolors-darkBrown text-2xl cursor-pointer" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link href="/addtocart" className="relative">
                <FaShoppingCart className="text-blue-600 text-2xl cursor-pointer" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </ClerkProvider>
  );
}
