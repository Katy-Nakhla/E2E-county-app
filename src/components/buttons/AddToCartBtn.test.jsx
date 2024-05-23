import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddToCartBtn from "./AddToCartBtn";
import { ShoppingCartContext } from "../../context/ShoppingCart";

const product = {
  id: 1,
  title: "Product 1",
  price: 100,
  image: "",
  category: "women-clothes",
  description: "desc",
  rating: {
    rate: 1,
    count: 22,
  },
};

describe("Add To Cart Btn", () => {
  it("if the product doesn't exist in the shopping cart, should find Add to card btn", () => {
    const shoppingCartContextValues = {
      cartItems: [],
      addToCart: jest.fn(),
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
    };
    render(
      <ShoppingCartContext.Provider value={shoppingCartContextValues}>
        <AddToCartBtn product={product} />
      </ShoppingCartContext.Provider>
    );

    const add_first_time_btn = screen.getByTestId("add_first_time_btn");

    expect(add_first_time_btn).toBeInTheDocument();
    fireEvent.click(add_first_time_btn);
    expect(shoppingCartContextValues.addToCart).toBeCalled();
  });

  it("if the product already exist in the shopping cart, should find change quanitiy btn", () => {
    const shoppingCartContextValues = {
      cartItems: [product],
      addToCart: jest.fn(),
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
    };
    render(
      <ShoppingCartContext.Provider value={shoppingCartContextValues}>
        <AddToCartBtn product={product} />
      </ShoppingCartContext.Provider>
    );

    const add_first_time_btn = screen.queryByTestId("add_first_time_btn");

    expect(add_first_time_btn).not.toBeInTheDocument();
    expect(screen.getByTestId("change_quantity_btn")).toBeInTheDocument();
  });

  it("when click on increase btn,the increaseQuantity method should be called ", () => {
    const shoppingCartContextValues = {
      cartItems: [{ ...product, quantity: 1 }],
      addToCart: jest.fn(),
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
    };
    render(
      <ShoppingCartContext.Provider value={shoppingCartContextValues}>
        <AddToCartBtn product={product} />
      </ShoppingCartContext.Provider>
    );

    expect(screen.getByTestId("change_quantity_btn")).toBeInTheDocument();
    expect(screen.getByTestId("increase_quantity_btn")).toBeInTheDocument();
    expect(screen.getByTestId("product_quantity")).toBeInTheDocument();
    expect(screen.getByTestId("product_quantity").textContent).toBe("1");
    fireEvent.click(screen.getByTestId("increase_quantity_btn"));
    expect(shoppingCartContextValues.increaseQuantity).toBeCalled();
  });

  it("when click on decrease btn,the decreaseQuantity method should be called ", () => {
    const shoppingCartContextValues = {
      cartItems: [{ ...product, quantity: 2 }],
      addToCart: jest.fn(),
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
    };
    render(
      <ShoppingCartContext.Provider value={shoppingCartContextValues}>
        <AddToCartBtn product={product} />
      </ShoppingCartContext.Provider>
    );

    expect(screen.getByTestId("change_quantity_btn")).toBeInTheDocument();
    expect(screen.getByTestId("decrease_quantity_btn")).toBeInTheDocument();
    expect(screen.getByTestId("product_quantity")).toBeInTheDocument();
    expect(screen.getByTestId("product_quantity").textContent).toBe("2");
    fireEvent.click(screen.getByTestId("decrease_quantity_btn"));
    expect(shoppingCartContextValues.decreaseQuantity).toHaveBeenCalled()
  });
});
