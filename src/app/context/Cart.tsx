"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  productImage: string;
  quantity?: number;
}

interface CartContextType {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
  updateQuantity: (id: string, change: number) => void;
  removeFromCart: (id: string) => void;
  removeFromWishlist: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));

    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      return [...prevCart, product];
    });
  };

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      return [...prevWishlist, product];
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) + change, 1) } // Ensure quantity doesn't go below 1
          : item
      )
    );
  };

  // Remove product completely from cart when clicked
  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id); // Completely remove the product
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage immediately
      return updatedCart; // Return the updated list
    });
  };

  // Remove product completely from wishlist when clicked
  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== id); // Completely remove the product
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage immediately
      return updatedWishlist; // Return the updated list
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        updateQuantity,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
