"use client";
import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "@/context/ShoppingCart";
import { ProductItem } from "@/Types";

interface Props {
  product: ProductItem;
}
const AddToCartBtn: React.FC<Props> = (props) => {
  const [isExist, setIsExist] = useState<boolean>(false);
  const [currentQuantity, setCurrentQuantity] = useState<number>(0);
  const [matchedItemIndex, setmatchedItemIndex] = useState<number>(-1);
  const shoppingCartContextValues = useContext(ShoppingCartContext);

  useEffect(() => {
    isProductAlreadyExist(props.product.id);
  }, [shoppingCartContextValues?.cartItems]);

  const isProductAlreadyExist = (productId: number): void => {
    const matchedItem = shoppingCartContextValues?.cartItems.find(
      (product, index) => {
        if (product.id === productId) {
          setmatchedItemIndex(index);
          return product;
        }
      }
    );
    if (matchedItem) {
      setCurrentQuantity(matchedItem.quantity);
      setIsExist(true);
    } else {
      setCurrentQuantity(0);
      setIsExist(false);
    }
  };

  return isExist ? (
    <div className="flex " data-testid="change_quantity_btn">
      <button
        onClick={() => {
          shoppingCartContextValues?.decreaseQuantity(matchedItemIndex);
        }}
        className="bg-mainColor text-white px-2 rounded-sm mr-2"
        data-testid="decrease_quantity_btn"
      >
        -
      </button>
      <span data-testid="product_quantity">{currentQuantity}</span>
      <button
        onClick={() => {
          shoppingCartContextValues?.increaseQuantity(matchedItemIndex);
        }}
        className="bg-mainColor text-white px-2 rounded-sm ml-2"
        data-testid="increase_quantity_btn"
      >
        +
      </button>
    </div>
  ) : (
    <button
      data-testid="add_first_time_btn"
      className="rounded-2xl ring-1 ring-mainColor text-mainColor  py-2 px-4 text-xs hover:bg-mainColor hover:text-white"
      onClick={() => {
        shoppingCartContextValues?.addToCart({
          ...props.product,
          quantity: 1,
        });
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
