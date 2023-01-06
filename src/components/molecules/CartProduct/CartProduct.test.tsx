import { screen } from "@testing-library/react";
import CartProduct from "./CartProduct";
import {
  mockedCartProduct,
  mockedDiscountedCartProduct,
} from "../../../data/mockData/cartProductData";
import { mockedUseCart } from "../../../data/mockData/useCartData";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";

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
    renderHelper(<CartProduct cartProduct={mockedCartProduct} />);

    expect(screen.getByText("CART_PRODUCT_NAME")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "HTTPS://IMAGE_URL.JPG"
    );
    expect(screen.getByText("CART_PRODUCT_COLOR")).toBeInTheDocument();
    expect(screen.getByText("£12.34")).toBeInTheDocument();
    expect(screen.getByTestId("ClearIcon")).toBeInTheDocument();
  });

  it("should shorten the name if more than 30 characters", async () => {
    mockedCartProduct.name =
      "CART_PRODUCT_NAME_MORE_THAN_THIRTY_CHARACTERS_LONG";
    renderHelper(<CartProduct cartProduct={mockedCartProduct} />);

    expect(
      screen.getByText("CART_PRODUCT_NAME_MORE_THAN_TH...")
    ).toBeInTheDocument();
  });

  it("should render the product discounted price if discounted", async () => {
    renderHelper(<CartProduct cartProduct={mockedDiscountedCartProduct} />);

    expect(screen.getByText("£12.34")).toBeInTheDocument();
    expect(screen.getByText("£6.17")).toBeInTheDocument();
  });

  it("should remove the product from the cart on button click", async () => {
    renderHelper(<CartProduct cartProduct={mockedCartProduct} />);

    userEvent.click(screen.getByTestId("ClearIcon"));

    expect(mockedUseCart.removeFromCart).toHaveBeenCalled();
  });
});
