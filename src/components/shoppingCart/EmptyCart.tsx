import React from "react";
import Image from "next/image";
const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/emptyCart.png" alt="empty cart" width={500} height={100} />
    </div>
  );
};

export default EmptyCart;
