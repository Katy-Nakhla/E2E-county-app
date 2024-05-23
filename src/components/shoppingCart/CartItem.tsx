import React, { useContext } from "react";
import Image from "next/image";
import { ShoppingCartItem } from "@/Types";
import { ShoppingCartContext } from "@/context/ShoppingCart";
type Props = {
  item: ShoppingCartItem;
  itemIndex: number;
};
const CartItem: React.FC<Props> = (props: Props) => {
  const shoppingCartContextValues = useContext(ShoppingCartContext);
  return (
    <div className="flex justify-between gap-4 mb-3 ">
      <Image
        src={props.item.image}
        alt=""
        width={72}
        height={96}
        className="object-cover rounded-md"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="">
          <div className="flex items-center justify-between gap-8">
            <h3 className="font-semibold">
              {props.item.title.length > 20 ? (
                <span>
                  {props.item.title.substring(0, 20)}
                  <span>....</span>
                </span>
              ) : (
                props.item.title
              )}
            </h3>
            <div className="p-1 bg-gray-50 rounded-sm font-semibold">
              {props.item.price}$
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {" "}
            {props.item.description.length > 50 ? (
              <p className="text-sm text-gray-500 mb-2">
                {props.item.description.substring(0, 50)}
                <span>....</span>
              </p>
            ) : (
              props.item.description
            )}
          </div>
        </div>
        <div className="flex justify-between font-semibold	">
          <span className="text-gray-500 ">
            quantity : {props.item.quantity}
          </span>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              shoppingCartContextValues?.removeProduct(props.itemIndex);
            }}
          >
            remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
