import { IProduct } from "../../../types/IProduct";
import { Guid } from "guid-typescript";
import { IImage } from "../../../types/IImage";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductTile from "./ProductTile";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../contexts/Auth";
import React from "react";
import { IClaim } from "../../../types/IClaim";

const mockedProduct: IProduct = {
  id: Guid.create(),
  name: "PRODUCT_NAME",
  images: [
    {
      title: "IMAGE_TITLE",
      description: "IMAGE_DESCRIPTION",
      url: "HTTPS://IMAGE_URL.JPG",
    },
  ] as IImage[],
  description: "PRODUCT_DESCRIPTION",
  category: "PRODUCT_CATEGORY",
  color: "PRODUCT_COLOR",
  price: 12.34,
  discount: 0,
  stock: 10,
};

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

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const mockedAuthContext = {
  isAuthenticated: true,
  setAuthenticated: jest.fn(),
  accessToken: "ACCESS_TOKEN",
  setAccessToken: jest.fn(),
  claims: [] as IClaim[],
  setClaims: jest.fn(),
  role: "ROLE",
  setRole: jest.fn(),
};

describe("ProductTile", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <ProductTile product={mockedProduct} />
      </Router>
    );

    const component = container.querySelector("#product-tile") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the product image", () => {
    const { container } = render(
      <Router>
        <ProductTile product={mockedProduct} />
      </Router>
    );

    const image = screen.getByRole("img") as Element;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "HTTPS://IMAGE_URL.JPG");
  });

  it("should render the product name", () => {
    const { container } = render(
      <Router>
        <ProductTile product={mockedProduct} />
      </Router>
    );

    const name = container.querySelector(".product-title") as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("PRODUCT_NAME");
  });

  it("should render the product color", () => {
    const { container } = render(
      <Router>
        <ProductTile product={mockedProduct} />
      </Router>
    );

    const color = container.querySelectorAll(".text")[0] as Element;

    expect(color).toBeInTheDocument();
    expect(color).toHaveTextContent("PRODUCT_COLOR");
  });

  it("should render the product price", () => {
    const { container } = render(
      <Router>
        <ProductTile product={mockedProduct} />
      </Router>
    );

    const price = container.querySelectorAll(".text")[1] as Element;

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the product price to two decimal places", () => {
    mockedProduct.price = 12.345;
    const { container } = render(
      <Router>
        <ProductTile product={mockedProduct} />
      </Router>
    );

    const price = container.querySelectorAll(".text")[1] as Element;

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£12.35");
  });

  it("should render the product discounted price if discounted", () => {
    mockedProduct.discount = 50;
    const { container } = render(
      <Router>
        <ProductTile product={mockedProduct} />
      </Router>
    );

    const discountedPrice = container.querySelectorAll(".text")[1] as Element;
    const price = container.querySelectorAll(".text")[2] as Element;

    expect(discountedPrice).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(discountedPrice).toHaveTextContent("£24.68");
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the add to cart button", () => {
    const { container } = render(
      <Router>
        <ProductTile product={mockedProduct} />
      </Router>
    );

    const button = container.querySelector(".add-to-cart-btn") as Element;

    expect(button).toBeInTheDocument();
  });

  it("should disable the add to cart button when stock equals 0", () => {
    mockedProduct.stock = 0;

    const { container } = render(
      <Router>
        <ProductTile product={mockedProduct} />
      </Router>
    );

    const button = container.querySelector(".add-to-cart-btn") as Element;

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should add the product to the cart if logged in on button click", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <ProductTile product={mockedProduct} />
        </AuthContext.Provider>
      </Router>
    );

    const button = container.querySelector(".add-to-cart-btn") as Element;

    fireEvent.click(button);

    expect(mockedUseCart.addToCart).toHaveBeenCalled();
  });

  it("should navigate to the login page if not logged in on button click", () => {
    const { container } = render(
      <Router>
        <ProductTile product={mockedProduct} />
      </Router>
    );

    const button = container.querySelector(".add-to-cart-btn") as Element;

    fireEvent.click(button);

    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/login");
  });
});
