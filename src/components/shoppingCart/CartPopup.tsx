import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ShoppingCartItem } from "@/Types";
import CheckoutBtn from "../buttons/CheckoutBtn";
import { ShoppingCartContext } from "@/context/ShoppingCart";
import EmptyCart from "./EmptyCart";

interface Props {
  handleCart: () => void;
}
const CartPopup: React.FC<Props> = (props) => {
  const shoppingCartContextValues = useContext(ShoppingCartContext);

  return (
    <div className="w-[400px] shadow-2xl  absolute top-12 p-4 rounded-md shadow-[0_3px_rgb(0,0,0,0.2)] bg-white  right-0 flex flex-col gap-6 z-20">
      {shoppingCartContextValues?.cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">Shopping Cart</h2>
          {/* items  */}
          <div className=" max-h-52 no-scrollbar overflow-y-scroll">
            {shoppingCartContextValues?.cartItems.map(
              (item: ShoppingCartItem, itemIndex: number) => (
                <CartItem item={item} itemIndex={itemIndex} key={itemIndex} />
              )
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Subtotal </span>
            <span className="p-1 bg-gray-50 rounded-sm  font-semibold	">
              ${shoppingCartContextValues?.subtotal.toFixed(2)}
            </span>
          </div>

          <p>Lorem ipsum dolor sit amet .</p>
          <div className="flex justify-between text-sm">
            <CheckoutBtn handleCart={props.handleCart} />
          </div>
        </div>
      )}
    </div>
  );
};
export default CartPopup;
