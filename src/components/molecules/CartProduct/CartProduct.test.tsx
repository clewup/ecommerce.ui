import { ICartProduct } from "../../../types/IProduct";
import { Guid } from "guid-typescript";
import { IImage } from "../../../types/IImage";
import { screen, render, fireEvent } from "@testing-library/react";
import CartProduct from "./CartProduct";
import { BrowserRouter as Router } from "react-router-dom";

const mockedCartProduct: ICartProduct = {
  id: Guid.create(),
  name: "CART_PRODUCT_NAME",
  images: [
    {
      title: "IMAGE_TITLE",
      description: "IMAGE_DESCRIPTION",
      url: "HTTPS://IMAGE_URL.JPG",
    },
  ] as IImage[],
  description: "CART_PRODUCT_DESCRIPTION",
  category: "CART_PRODUCT_CATEGORY",
  color: "CART_PRODUCT_COLOR",
  price: 12.34,
  discount: 0,
};

describe("CartProduct", () => {
  beforeEach(() => {});

  it("should render the product image", () => {
    const { container } = render(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "HTTPS://IMAGE_URL.JPG");
  });

  it("should render the product name", () => {
    const { container } = render(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );

    const name = container.getElementsByClassName("text")[0];

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("CART_PRODUCT_NAME");
  });

  it("should shorten the name if more than 30 characters", () => {
    mockedCartProduct.name =
      "CART_PRODUCT_NAME_MORE_THAN_THIRTY_CHARACTERS_LONG";

    const { container } = render(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );

    const name = container.getElementsByClassName("text")[0];

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("CART_PRODUCT_NAME_MORE_THAN_TH...");
  });

  it("should render the product color", () => {
    const { container } = render(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );

    const color = container.getElementsByClassName("text")[1];

    expect(color).toBeInTheDocument();
    expect(color).toHaveTextContent("CART_PRODUCT_COLOR");
  });

  it("should render the product price", () => {
    const { container } = render(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );

    const price = container.getElementsByClassName("text")[2];

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the product discounted price if discounted", () => {
    mockedCartProduct.discount = 50;
    const { container } = render(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );

    const discountedPrice = container.getElementsByClassName("text")[2];
    const price = container.getElementsByClassName("text")[3];

    expect(discountedPrice).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(discountedPrice).toHaveTextContent("£24.68");
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the remove from cart button", () => {
    const { container } = render(
      <Router>
        <CartProduct cartProduct={mockedCartProduct} />
      </Router>
    );

    const button = container.getElementsByClassName(
      "cart-product-remove-btn"
    )[0];

    expect(button).toBeInTheDocument();
  });
});
