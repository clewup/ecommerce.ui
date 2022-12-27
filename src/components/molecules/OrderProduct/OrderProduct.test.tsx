import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import OrderProduct from "./OrderProduct";
import {
  mockedOrderProduct,
  mockedDiscountedOrderProduct,
} from "../../../data/mockData/orderProductData";
import renderHelper from "../../../utils/renderHelper";

describe("OrderProduct", () => {
  it("should render the component", () => {
    const { container } = renderHelper(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const component = container.querySelector("#order-product") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the product image", () => {
    const { container } = renderHelper(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const image = screen.getByRole("img") as Element;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "HTTPS://IMAGE_URL.JPG");
  });

  it("should render the product name", () => {
    const { container } = renderHelper(
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

    const { container } = renderHelper(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const name = container.querySelectorAll(".text")[0] as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("ORDER_PRODUCT_NAME_MORE_THAN_T...");
  });

  it("should render the product color", () => {
    const { container } = renderHelper(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const color = container.querySelectorAll(".text")[1] as Element;

    expect(color).toBeInTheDocument();
    expect(color).toHaveTextContent("ORDER_PRODUCT_COLOR");
  });

  it("should render the product price", () => {
    const { container } = renderHelper(
      <Router>
        <OrderProduct orderProduct={mockedOrderProduct} />
      </Router>
    );

    const price = container.querySelectorAll(".text")[2] as Element;

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the product discounted price if discounted", () => {
    const { container } = renderHelper(
      <Router>
        <OrderProduct orderProduct={mockedDiscountedOrderProduct} />
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
