import { screen, render } from "@testing-library/react";
import OrderProduct from "./OrderProduct";
import renderHelper from "../../../utils/renderHelper";
import {
  mockedDiscountedProduct,
  mockedProduct,
} from "../../../types/IProduct";

describe("OrderProduct", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<OrderProduct orderProduct={mockedProduct} />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "HTTPS://IMAGE_URL.JPG"
    );
    expect(screen.getByText("PRODUCT_NAME")).toBeInTheDocument();
    expect(screen.getByText("PRODUCT_COLOR")).toBeInTheDocument();
    expect(screen.getByText("£33.33")).toBeInTheDocument();
  });

  it("should shorten the name if more than 30 characters", () => {
    mockedProduct.name = "PRODUCT_NAME_MORE_THAN_THIRTY_CHARACTERS_LONG";
    renderHelper(<OrderProduct orderProduct={mockedProduct} />);

    expect(
      screen.getByText("PRODUCT_NAME_MORE_THAN_THIRTY_...")
    ).toBeInTheDocument();
  });

  it("should render the product discounted price if discounted", () => {
    renderHelper(<OrderProduct orderProduct={mockedDiscountedProduct} />);

    expect(screen.getByText("£33.33")).toBeInTheDocument();
    expect(screen.getByText("£30")).toBeInTheDocument();
  });
});
