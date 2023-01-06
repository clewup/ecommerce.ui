import { screen, render } from "@testing-library/react";
import OrderProduct from "./OrderProduct";
import renderHelper from "../../../utils/renderHelper";
import {
  mockedDiscountedProduct,
  mockedProduct,
} from "../../../types/IProduct";

describe("OrderProduct", () => {
  it("should render the component with the expected values", async () => {
    renderHelper(<OrderProduct orderProduct={mockedProduct} />);

    expect(await screen.getByRole("img")).toHaveAttribute(
      "src",
      "HTTPS://IMAGE_URL.JPG"
    );
    expect(await screen.getByText("PRODUCT_NAME")).toBeInTheDocument();
    expect(await screen.getByText("PRODUCT_COLOR")).toBeInTheDocument();
    expect(await screen.getByText("£33.33")).toBeInTheDocument();
  });

  it("should shorten the name if more than 30 characters", async () => {
    mockedProduct.name = "PRODUCT_NAME_MORE_THAN_THIRTY_CHARACTERS_LONG";
    renderHelper(<OrderProduct orderProduct={mockedProduct} />);

    expect(
      await screen.getByText("PRODUCT_NAME_MORE_THAN_THIRTY_...")
    ).toBeInTheDocument();
  });

  it("should render the product discounted price if discounted", async () => {
    renderHelper(<OrderProduct orderProduct={mockedDiscountedProduct} />);

    expect(await screen.getByText("£33.33")).toBeInTheDocument();
    expect(await screen.getByText("£30")).toBeInTheDocument();
  });
});
