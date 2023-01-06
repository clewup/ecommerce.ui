import { screen } from "@testing-library/react";
import ProductTile from "./ProductTile";
import React from "react";
import {
  mockedDiscountedProduct,
  mockedOutOfStockProduct,
  mockedProduct,
} from "../../../data/mockData/productData";
import { mockedAuthContext } from "../../../data/mockData/authContextData";
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

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("ProductTile", () => {
  it("should render the component with the expected values", async () => {
    renderHelper(<ProductTile product={mockedProduct} />);

    expect(await screen.getByRole("img")).toHaveAttribute(
      "src",
      "HTTPS://IMAGE_URL.JPG"
    );
    expect(screen.getByText("PRODUCT_NAME")).toBeInTheDocument();
    expect(screen.getByText("PRODUCT_COLOR")).toBeInTheDocument();
    expect(screen.getByText("£12.34")).toBeInTheDocument();
    expect(
      screen.getByText("Add to Cart", {
        selector: 'button[type="button"]',
      })
    ).toBeInTheDocument();
  });

  it("should render the product discounted price if discounted", async () => {
    renderHelper(<ProductTile product={mockedDiscountedProduct} />);

    expect(screen.getByText("£12.34")).toBeInTheDocument();
    expect(screen.getByText("£6.17")).toBeInTheDocument();
  });

  it("should disable the add to cart button when stock equals 0", () => {
    renderHelper(<ProductTile product={mockedOutOfStockProduct} />);

    expect(
      screen.getByText("Out of Stock", {
        selector: 'button[type="button"]',
      })
    ).toBeDisabled();
  });

  it("should add the product to the cart if logged in on button click", () => {
    renderHelper(<ProductTile product={mockedProduct} />);

    userEvent.click(
      screen.getByText("Add to Cart", {
        selector: 'button[type="button"]',
      })
    );

    expect(mockedUseCart.addToCart).toHaveBeenCalled();
  });

  it("should navigate to the login page if not logged in on button click", () => {
    mockedAuthContext.isAuthenticated = false;
    renderHelper(<ProductTile product={mockedProduct} />);

    userEvent.click(
      screen.getByText("Add to Cart", {
        selector: 'button[type="button"]',
      })
    );

    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });

  it("should render the size selector", () => {
    renderHelper(<ProductTile product={mockedProduct} />);

    expect(
      screen.getByText("XS", {
        selector: 'div[class*="size"]',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText("S", {
        selector: 'div[class*="size"]',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText("M", {
        selector: 'div[class*="size"]',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText("L", {
        selector: 'div[class*="size"]',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText("XL", {
        selector: 'div[class*="size"]',
      })
    ).toBeInTheDocument();
  });
});
