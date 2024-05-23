"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartContext } from "@/context/ShoppingCart";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const shoppingCartContextValues = useContext(ShoppingCartContext);

  return (
    <div>
      <Image
        src="/menu.png"
        alt="menu icon"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />
      {open && (
        <div className=" absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col  items-center gap-8 text-xl z-50 pt-20">
          <Link href="">Home Page</Link>
          <Link href="">Shop</Link>
          <Link href="">Deals</Link>
          <Link href="">About</Link>
          <Link href="">Contact </Link>
          <Link href="">Logout</Link>
          <Link href="">
            Cart ({shoppingCartContextValues?.cartItems.length})
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
