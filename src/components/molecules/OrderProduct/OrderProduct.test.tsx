import { ICartProduct } from "../../../types/IProduct";
import { Guid } from "guid-typescript";
import { IImage } from "../../../types/IImage";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import OrderProduct from "./OrderProduct";

const mockedOrderProduct: ICartProduct = {
  id: Guid.create(),
  name: "ORDER_PRODUCT_NAME",
  images: [
    {
      title: "IMAGE_TITLE",
      description: "IMAGE_DESCRIPTION",
      url: "HTTPS://IMAGE_URL.JPG",
    },
  ] as IImage[],
  description: "ORDER_PRODUCT_DESCRIPTION",
  category: "ORDER_PRODUCT_CATEGORY",
  color: "ORDER_PRODUCT_COLOR",
  price: 12.34,
  discount: 0,
};

describe("OrderProduct", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const component = container.querySelector("#order-product") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the product image", () => {
    const { container } = render(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const image = screen.getByRole("img") as Element;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "HTTPS://IMAGE_URL.JPG");
  });

  it("should render the product name", () => {
    const { container } = render(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const name = container.querySelectorAll(".text")[0] as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("ORDER_PRODUCT_NAME");
  });

  it("should shorten the name if more than 30 characters", () => {
    mockedOrderProduct.name =
      "ORDER_PRODUCT_NAME_MORE_THAN_THIRTY_CHARACTERS_LONG";

    const { container } = render(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const name = container.querySelectorAll(".text")[0] as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("ORDER_PRODUCT_NAME_MORE_THAN_T...");
  });

  it("should render the product color", () => {
    const { container } = render(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const color = container.querySelectorAll(".text")[1] as Element;

    expect(color).toBeInTheDocument();
    expect(color).toHaveTextContent("ORDER_PRODUCT_COLOR");
  });

  it("should render the product price", () => {
    const { container } = render(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const price = container.querySelectorAll(".text")[2] as Element;

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the product discounted price if discounted", () => {
    mockedOrderProduct.discount = 50;
    const { container } = render(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const discountedPrice = container.querySelectorAll(".text")[2] as Element;
    const price = container.querySelectorAll(".text")[3];

    expect(discountedPrice).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(discountedPrice).toHaveTextContent("£24.68");
    expect(price).toHaveTextContent("£12.34");
  });
});
