import { screen, render, fireEvent } from "@testing-library/react";
import CartProduct from "./CartProduct";
import { BrowserRouter as Router } from "react-router-dom";
import {
  mockedCartProduct,
  mockedDiscountedCartProduct,
} from "../../../data/mockData/cartProductData";
import { mockedUseCart } from "../../../data/mockData/useCartData";
import renderHelper from "../../../utils/renderHelper";

jest.mock("../../../hooks/useCart", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseCart;
    },
  };
});

describe("CartProduct", () => {
  it("should render the component", () => {
    const { container } = renderHelper(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );
    const component = container.querySelector("#cart-product") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the product image", () => {
    const { container } = renderHelper(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );
    const image = screen.getByRole("img") as Element;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "HTTPS://IMAGE_URL.JPG");
  });

  it("should render the product name", () => {
    const { container } = renderHelper(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );
    const name = container.querySelectorAll(".text")[0] as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("CART_PRODUCT_NAME");
  });

  it("should shorten the name if more than 30 characters", () => {
    mockedCartProduct.name =
      "CART_PRODUCT_NAME_MORE_THAN_THIRTY_CHARACTERS_LONG";

    const { container } = renderHelper(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );
    const name = container.querySelectorAll(".text")[0] as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("CART_PRODUCT_NAME_MORE_THAN_TH...");
  });

  it("should render the product color", () => {
    const { container } = renderHelper(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );
    const color = container.querySelectorAll(".text")[1] as Element;

    expect(color).toBeInTheDocument();
    expect(color).toHaveTextContent("CART_PRODUCT_COLOR");
  });

  it("should render the product price", () => {
    const { container } = renderHelper(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );
    const price = container.querySelectorAll(".text")[2] as Element;

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the product discounted price if discounted", () => {
    const { container } = renderHelper(
      <Router>
        <CartProduct cartProduct={mockedDiscountedCartProduct} />
      </Router>
    );
    const discountedPrice = container.querySelectorAll(".text")[2] as Element;
    const price = container.querySelectorAll(".text")[3] as Element;

    expect(discountedPrice).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(discountedPrice).toHaveTextContent("£24.68");
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the remove from cart button", () => {
    const { container } = renderHelper(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );
    const button = container.querySelector(
      ".cart-product-remove-btn"
    ) as Element;

    expect(button).toBeInTheDocument();
  });

  it("should remove the product from the cart on button click", () => {
    const { container } = renderHelper(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );
    const button = container.querySelector(
      ".cart-product-remove-btn"
    ) as Element;

    fireEvent.click(button);

    expect(mockedUseCart.removeFromCart).toHaveBeenCalled();
  });
});
