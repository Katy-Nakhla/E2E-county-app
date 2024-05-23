"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import CartPopup from "./shoppingCart/CartPopup";
import { ShoppingCartContext } from "@/context/ShoppingCart";

const NavIcons = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const shoppingCartContextValues = useContext(ShoppingCartContext);

  const handleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />

      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer" onClick={handleCart}>
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-mainColor rounded-full text-sm text-white flex items-center justify-center">
          {shoppingCartContextValues?.cartItems.length}
        </div>
      </div>
      {isCartOpen && <CartPopup handleCart={handleCart} />}
    </div>
  );
};

export default NavIcons;
