import { screen } from "@testing-library/react";
import ProductTile from "./ProductTile";
import React from "react";
import renderHelper, { mockedAuthContext } from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import {
  mockedDiscountedProduct,
  mockedOutOfStockProduct,
  mockedProduct,
} from "../../organisms/Products/data/mockData";

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

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("ProductTile", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<ProductTile product={mockedProduct} />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "HTTPS://IMAGE_URL.JPG"
    );
    expect(screen.getByText("PRODUCT_NAME")).toBeInTheDocument();
    expect(screen.getByText("PRODUCT_COLOR")).toBeInTheDocument();
    expect(screen.getByText("£33.33")).toBeInTheDocument();
    expect(
      screen.getByText("Add to Cart", {
        selector: 'button[type="button"]',
      })
    ).toBeInTheDocument();
  });

  it("should render the product discounted price if discounted", () => {
    renderHelper(<ProductTile product={mockedDiscountedProduct} />);

    expect(screen.getByText("£33.33")).toBeInTheDocument();
    expect(screen.getByText("£30")).toBeInTheDocument();
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
