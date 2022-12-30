import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductTile from "./ProductTile";
import { AuthContext } from "../../../contexts/Auth";
import React from "react";
import {
  mockedDiscountedProduct,
  mockedOutOfStockProduct,
  mockedProduct,
} from "../../../data/mockData/productData";
import { mockedAuthContext } from "../../../data/mockData/authContextData";
import { mockedUseCart } from "../../../data/mockData/useCartData";
import renderHelper from "../../../utils/renderHelper";

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
  it("should render the component", () => {
    const { container } = renderHelper(<ProductTile product={mockedProduct} />);

    const component = container.querySelector("#product-tile") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the product image", () => {
    const { container } = renderHelper(<ProductTile product={mockedProduct} />);

    const image = screen.getByRole("img") as Element;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "HTTPS://IMAGE_URL.JPG");
  });

  it("should render the product name", () => {
    const { container } = renderHelper(<ProductTile product={mockedProduct} />);

    const name = container.querySelector(".product-title") as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("PRODUCT_NAME");
  });

  it("should render the product color", () => {
    const { container } = renderHelper(<ProductTile product={mockedProduct} />);

    const color = container.querySelectorAll(".text")[0] as Element;

    expect(color).toBeInTheDocument();
    expect(color).toHaveTextContent("PRODUCT_COLOR");
  });

  it("should render the product price", () => {
    const { container } = renderHelper(<ProductTile product={mockedProduct} />);

    const price = container.querySelectorAll(".text")[1] as Element;

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the add to cart button", () => {
    const { container } = renderHelper(<ProductTile product={mockedProduct} />);

    const button = container.querySelector(".add-to-cart-btn") as Element;

    expect(button).toBeInTheDocument();
  });

  it("should disable the add to cart button when stock equals 0", () => {
    const { container } = renderHelper(
      <ProductTile product={mockedOutOfStockProduct} />
    );

    const button = container.querySelector(".add-to-cart-btn") as Element;

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should add the product to the cart if logged in on button click", () => {
    const { container } = renderHelper(<ProductTile product={mockedProduct} />);

    const button = container.querySelector(".add-to-cart-btn") as Element;

    fireEvent.click(button);

    expect(mockedUseCart.addToCart).toHaveBeenCalled();
  });

  it("should navigate to the login page if not logged in on button click", () => {
    mockedAuthContext.isAuthenticated = false;
    const { container } = renderHelper(<ProductTile product={mockedProduct} />);

    const button = container.querySelector(".add-to-cart-btn") as Element;

    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });
});
