import { fireEvent, screen } from "@testing-library/react";
import Product from "./Product";
import React from "react";
import renderHelper, { mockedAuthContext } from "../../../utils/renderHelper";
import { mockedProduct } from "../../../types/IProduct";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

const mockedUseProduct = {
  product: mockedProduct,
  isLoading: false,
  error: null,
  getProduct: jest.fn(),
  addProduct: jest.fn(),
};

jest.mock("../../../hooks/useProduct", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseProduct;
    },
  };
});

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

describe("Product", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<Product />);
    const component = container.querySelector("#product");

    expect(component).toBeInTheDocument();
  });

  it("should render the product image", () => {
    const { container } = renderHelper(<Product />);

    const image = screen.getByRole("img") as Element;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "HTTPS://IMAGE_URL.JPG");
  });

  it("should render the product name", () => {
    const { container } = renderHelper(<Product />);

    const name = container.querySelector(".subheading") as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("PRODUCT_NAME");
  });

  it("should render the product description", () => {
    const { container } = renderHelper(<Product />);

    const description = container.querySelectorAll(".text")[0] as Element;

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent("PRODUCT_DESCRIPTION");
  });

  it("should render the product color", () => {
    const { container } = renderHelper(<Product />);

    const color = container.querySelectorAll(".text")[1] as Element;

    expect(color).toBeInTheDocument();
    expect(color).toHaveTextContent("PRODUCT_COLOR");
  });

  it("should render the product price", () => {
    const { container } = renderHelper(<Product />);

    const price = container.querySelectorAll(".text")[2] as Element;

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£33.33");
  });

  it("should render the add to cart button", () => {
    const { container } = renderHelper(<Product />);

    const button = container.querySelector(".add-to-cart-btn") as Element;

    expect(button).toBeInTheDocument();
  });

  it("should add the product to the cart if logged in on button click", () => {
    const { container } = renderHelper(<Product />);

    const button = container.querySelector(".add-to-cart-btn") as Element;

    fireEvent.click(button);

    expect(mockedUseCart.addToCart).toHaveBeenCalled();
  });

  it("should navigate to the login page if not logged in on button click", () => {
    mockedAuthContext.isAuthenticated = false;
    const { container } = renderHelper(<Product />);

    const button = container.querySelector(".add-to-cart-btn") as Element;

    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });

  it("should render the loader when loading", () => {
    mockedUseProduct.isLoading = true;
    const { container } = renderHelper(<Product />);
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseProduct.error = { code: "ERROR_CODE", message: "ERROR_MESSAGE" };
    const { container } = renderHelper(<Product />);
    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
