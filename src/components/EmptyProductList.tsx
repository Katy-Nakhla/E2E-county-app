import React from "react";
import Image from "next/image";

const EmptyProductList = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <Image
          src="/noData.webp"
          alt="no search value"
          width={200}
          height={200}
        />
      </div>

      <div className="flex items-center justify-center">
        Sorry, there are no data.
      </div>
    </div>
  );
};

export default EmptyProductList;
