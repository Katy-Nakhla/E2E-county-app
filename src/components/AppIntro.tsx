import React from "react";
import ShopNow from "./buttons/ShopNow";

const AppIntro = () => {
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        style={{ transform: `translateX(-${-100}vw)` }}
        className="w-max h-full flex transition-all ease-in-out duration-1000"
      >
        <div className={`w-screen h-full flex flex-col gap-16 xl:flex-row`}>
          {/* text part  */}
          <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
              Sale! Up to 50% off!
            </h2>
            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
              Summer Sale Collections
            </h1>
            <ShopNow />
          </div>
          {/* image part  */}
          <div className="h-1/2 xl:w-1/2 xl:h-full md:w-full md:h-full sm:w-full sm:h-full flex flex-col  relative">
            <img
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt="slider-image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppIntro;
