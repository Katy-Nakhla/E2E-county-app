import React from "react";
import { ProductItem } from "../Types";
import Image from "next/image";
import AddToCartBtn from "./buttons/AddToCartBtn";

interface Props {
  product: ProductItem;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  return (
    <div
      className="w-full gap-4 shadow-lg p-4 rounded-lg "
      key={props.product.id}
    >
      <div className="relative w-full h-60 overflow-hidden rounded-md">
        <Image
          src={props.product.image}
          alt="product image"
          fill
          sizes="25vw"
          className="absolute object-cover z-10 hover:scale-150 transition-opacity easy duration-200"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-medium">
          {props.product.title.length > 20 ? (
            <span>
              {props.product.title.substring(0, 20)}
              <span>....</span>
            </span>
          ) : (
            props.product.title
          )}
        </p>
        <span className="font-semibold">${props.product.price}</span>
      </div>
      <div>
        {props.product.description.length > 50 ? (
          <p className="text-sm text-gray-500 mb-2">
            {props.product.description.substring(0, 50)}
            <span>....</span>
          </p>
        ) : (
          props.product.description
        )}
      </div>
      <AddToCartBtn product={props.product} />
    </div>
  );
};

export default ProductCard;
