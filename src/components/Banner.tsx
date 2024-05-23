import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="bg-pink-50 p-4 md:flex hidden justify-between h-64 ">
      <div className="w-2/3 flex flex-col items-center justify-center  gap-8">
        <h1 className="lg:text-4xl md:text-lg sm:text-md font-semibold leading-[48px] text-gray-700">
          Grab up to 50% off on
          <br /> selected products
        </h1>
        <div>
          <span className="rounded-3xl  bg-mainColor cursor-pointer text-white w-max py-3 px-5 text-sm">
            Buy Now
          </span>
        </div>
      </div>
      <div className="relative w-1/3">
        <Image src="/woman.png" alt="banner image" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Banner;
