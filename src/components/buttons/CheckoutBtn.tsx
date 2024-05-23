"use client";
import React from "react";
import Link from "next/link";
interface Props {
  handleCart: () => void;
}
const CheckoutBtn: React.FC<Props> = (props) => {
  return (
    <Link
      href="/checkout"
      onClick={() => {
        props.handleCart();
      }}
      className="rounded-md py-3 px-4 ring-1 outline-none border-none bg-black text-white"
    >
      Checkout
    </Link>
  );
};

export default CheckoutBtn;
