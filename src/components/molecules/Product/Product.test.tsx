import { IProduct } from "../../../types/IProduct";
import { Guid } from "guid-typescript";
import { IImage } from "../../../types/IImage";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Product from "./Product";

const mockedProduct: IProduct = {
  id: Guid.create(),
  name: "PRODUCT_NAME",
  images: [
    {
      title: "IMAGE_TITLE",
      description: "IMAGE_DESCRIPTION",
      url: "HTTPS://IMAGE_URL.JPG",
    },
  ] as IImage[],
  description: "PRODUCT_DESCRIPTION",
  category: "PRODUCT_CATEGORY",
  color: "PRODUCT_COLOR",
  price: 12.34,
  discount: 0,
  stock: 10,
};

describe("Product", () => {
  it("should render the product image", () => {
    const { container } = render(
      <Router>
        <Product product={mockedProduct} />
      </Router>
    );

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "HTTPS://IMAGE_URL.JPG");
  });

  it("should render the product name", () => {
    const { container } = render(
      <Router>
        <Product product={mockedProduct} />
      </Router>
    );

    const name = container.querySelector(".product-title");

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("PRODUCT_NAME");
  });

  it("should render the product color", () => {
    const { container } = render(
      <Router>
        <Product product={mockedProduct} />
      </Router>
    );

    const color = container.querySelectorAll(".text")[0];

    expect(color).toBeInTheDocument();
    expect(color).toHaveTextContent("PRODUCT_COLOR");
  });

  it("should render the product price", () => {
    const { container } = render(
      <Router>
        <Product product={mockedProduct} />
      </Router>
    );

    const price = container.querySelectorAll(".text")[1];

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the product price to two decimal places", () => {
    mockedProduct.price = 12.345;
    const { container } = render(
      <Router>
        <Product product={mockedProduct} />
      </Router>
    );

    const price = container.querySelectorAll(".text")[1];

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£12.35");
  });

  it("should render the product discounted price if discounted", () => {
    mockedProduct.discount = 50;
    const { container } = render(
      <Router>
        <Product product={mockedProduct} />
      </Router>
    );

    const discountedPrice = container.querySelectorAll(".text")[1];
    const price = container.querySelectorAll(".text")[2];

    expect(discountedPrice).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(discountedPrice).toHaveTextContent("£24.68");
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the add to cart button", () => {
    const { container } = render(
      <Router>
        <Product product={mockedProduct} />
      </Router>
    );

    const button = container.querySelector(".add-to-cart-btn");

    expect(button).toBeInTheDocument();
  });

  it("should disable the add to cart button when stock equals 0", () => {
    mockedProduct.stock = 0;

    const { container } = render(
      <Router>
        <Product product={mockedProduct} />
      </Router>
    );

    const button = container.querySelector(".add-to-cart-btn");

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
