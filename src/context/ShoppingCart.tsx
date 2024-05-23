"use client";
import React, { createContext, useMemo, useState } from "react";
import { ShoppingCartItem } from "@/Types";

export interface IShoppingCartContext {
  cartItems: ShoppingCartItem[];
  setCartItems: React.Dispatch<
    React.SetStateAction<IShoppingCartContext["cartItems"]>
  >;
  subtotal: number;
  setSubtotal: React.Dispatch<
    React.SetStateAction<IShoppingCartContext["subtotal"]>
  >;
  addToCart: (product: ShoppingCartItem) => void;
  increaseQuantity: (productIndex: number) => void;
  decreaseQuantity: (productIndex: number) => void;
  removeProduct: (productIndex: number) => void;
  clearCart: () => void;
}

export const ShoppingCartContext = createContext<IShoppingCartContext | null>(
  null
);

export const ShoppingCartProvider = ({ children }: React.PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<IShoppingCartContext["cartItems"]>(
    []
  );
  const [subtotal, setSubtotal] = useState<IShoppingCartContext["subtotal"]>(0);

  const addToCart = (product: ShoppingCartItem): void => {
    setCartItems((prev) => [...prev, product]);
    setSubtotal((prev) => prev + product.price * product.quantity);
  };

  const increaseQuantity = (productIndex: number): void => {
    let product = cartItems[productIndex];
    product.quantity += 1;
    let Items = [...cartItems];
    Items[productIndex] = product;
    setCartItems(Items);
    setSubtotal((prev) => prev + product.price);
  };

  const decreaseQuantity = (productIndex: number): void => {
    let product = cartItems[productIndex];
    product.quantity -= 1;
    let Items = [...cartItems];
    Items[productIndex] = product;
    if (product.quantity === 0) {
      removeProduct(productIndex);
    } else {
      setCartItems(Items);
    }
    setSubtotal((prev) => prev - product.price);
  };

  const removeProduct = (productIndex: number): void => {
    let Items = [...cartItems];
    Items.splice(productIndex, 1);
    setCartItems(Items);
  };
  const clearCart = (): void => {
    setCartItems([]);
    setSubtotal(0);
  };
  const shoppingCartContextValues = useMemo(
    () => ({
      cartItems,
      setCartItems,
      subtotal,
      setSubtotal,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeProduct,
      clearCart,
    }),
    [cartItems, subtotal]
  );

  return (
    <ShoppingCartContext.Provider value={shoppingCartContextValues}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
