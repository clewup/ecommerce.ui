import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import OrderProduct from "./OrderProduct";
import {
  mockedOrderProduct,
  mockedDiscountedOrderProduct,
} from "../../../data/mockData/orderProductData";
import renderHelper from "../../../utils/renderHelper";

describe("OrderProduct", () => {
  it("should render the component with the expected values", async () => {
    renderHelper(<OrderProduct orderProduct={mockedOrderProduct} />);

    expect(await screen.getByRole("img")).toHaveAttribute(
      "src",
      "HTTPS://IMAGE_URL.JPG"
    );
    expect(await screen.getByText("ORDER_PRODUCT_NAME")).toBeInTheDocument();
    expect(await screen.getByText("ORDER_PRODUCT_COLOR")).toBeInTheDocument();
    expect(await screen.getByText("£12.34")).toBeInTheDocument();
  });

  it("should shorten the name if more than 30 characters", async () => {
    mockedOrderProduct.name =
      "ORDER_PRODUCT_NAME_MORE_THAN_THIRTY_CHARACTERS_LONG";
    renderHelper(<OrderProduct orderProduct={mockedOrderProduct} />);

    expect(
      await screen.getByText("ORDER_PRODUCT_NAME_MORE_THAN_T...")
    ).toBeInTheDocument();
  });

  it("should render the product discounted price if discounted", async () => {
    renderHelper(<OrderProduct orderProduct={mockedDiscountedOrderProduct} />);

    expect(await screen.getByText("£12.34")).toBeInTheDocument();
    expect(await screen.getByText("£6.17")).toBeInTheDocument();
  });
});
