import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ShopNow from "./ShopNow";

describe("Shop Now", () => {
  it("renders a button", () => {
    render(<ShopNow />);

    const shop_now_link = screen.getByTestId("shop_now_link");

    expect(shop_now_link).toBeInTheDocument();
  });
});
