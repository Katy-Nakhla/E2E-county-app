import React from "react";
import Image from "next/image";

const EmptyFilterProductList = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <Image
          src="/noSearchResult.png"
          alt="no search value"
          width={200}
          height={200}
        />
      </div>

      <div className="flex items-center justify-center">
        Sorry, there are no products with this filter values.
      </div>
    </div>
  );
};

export default EmptyFilterProductList;
