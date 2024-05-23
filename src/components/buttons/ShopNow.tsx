"use client";
import React from "react";
import Link from "next/link";
const ShopNow = () => {
  return (
    <Link href="/product-list" data-testid="shop_now_link">
      <span className="rounded-md bg-black text-white py-3 px-4 ">
        Shop Now
      </span>
    </Link>
  );
};

export default ShopNow;
