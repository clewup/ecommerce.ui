import { screen } from "@testing-library/react";
import CartProduct from "./CartProduct";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import {
  mockedDiscountedProduct,
  mockedProduct,
} from "../../../types/IProduct";

const mockedUseCart = {
  getCart: jest.fn(),
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  error: null,
};

jest.mock("../../../hooks/useCart", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseCart;
    },
  };
});

describe("CartProduct", () => {
  it("should render the component with the expected values", async () => {
    renderHelper(<CartProduct cartProduct={mockedProduct} />);

    expect(screen.getByText("PRODUCT_NAME")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "HTTPS://IMAGE_URL.JPG"
    );
    expect(screen.getByText("PRODUCT_COLOR")).toBeInTheDocument();
    expect(screen.getByText("£33.33")).toBeInTheDocument();
    expect(screen.getByTestId("ClearIcon")).toBeInTheDocument();
  });

  it("should shorten the name if more than 30 characters", async () => {
    mockedProduct.name = "PRODUCT_NAME_MORE_THAN_THIRTY_CHARACTERS_LONG";
    renderHelper(<CartProduct cartProduct={mockedProduct} />);

    expect(
      screen.getByText("PRODUCT_NAME_MORE_THAN_THIRTY_...")
    ).toBeInTheDocument();
  });

  it("should render the product discounted price if discounted", async () => {
    renderHelper(<CartProduct cartProduct={mockedDiscountedProduct} />);

    expect(screen.getByText("£33.33")).toBeInTheDocument();
    expect(screen.getByText("£30")).toBeInTheDocument();
  });

  it("should remove the product from the cart on button click", async () => {
    renderHelper(<CartProduct cartProduct={mockedProduct} />);

    userEvent.click(screen.getByTestId("ClearIcon"));

    expect(mockedUseCart.removeFromCart).toHaveBeenCalled();
  });
});
