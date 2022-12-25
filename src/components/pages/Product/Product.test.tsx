import { fireEvent, render, screen } from "@testing-library/react";
import Product from "./Product";
import { BrowserRouter as Router } from "react-router-dom";
import { mockedUseProduct } from "../../../data/mockData/useProductData";
import { AuthContext } from "../../../contexts/Auth";
import { mockedAuthContext } from "../../../data/mockData/authContextData";
import { mockedUseCart } from "../../../data/mockData/useCartData";
import React from "react";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

jest.mock("../../../hooks/useProduct", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseProduct;
    },
  };
});

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
    const { container } = render(
      <Router>
        <Product />
      </Router>
    );
    const component = container.querySelector("#product");

    expect(component).toBeInTheDocument();
  });

  it("should render the product image", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Product />
        </AuthContext.Provider>
      </Router>
    );

    const image = screen.getByRole("img") as Element;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "HTTPS://IMAGE_URL.JPG");
  });

  it("should render the product name", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Product />
        </AuthContext.Provider>
      </Router>
    );

    const name = container.querySelector(".subheading") as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("PRODUCT_NAME");
  });

  it("should render the product description", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Product />
        </AuthContext.Provider>
      </Router>
    );

    const description = container.querySelectorAll(".text")[0] as Element;

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent("PRODUCT_DESCRIPTION");
  });

  it("should render the product color", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Product />
        </AuthContext.Provider>
      </Router>
    );

    const color = container.querySelectorAll(".text")[1] as Element;

    expect(color).toBeInTheDocument();
    expect(color).toHaveTextContent("PRODUCT_COLOR");
  });

  it("should render the product price", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Product />
        </AuthContext.Provider>
      </Router>
    );

    const price = container.querySelectorAll(".text")[2] as Element;

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("£12.34");
  });

  it("should render the add to cart button", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Product />
        </AuthContext.Provider>
      </Router>
    );

    const button = container.querySelector(".add-to-cart-btn") as Element;

    expect(button).toBeInTheDocument();
  });

  it("should add the product to the cart if logged in on button click", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Product />
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
        <Product />
      </Router>
    );

    const button = container.querySelector(".add-to-cart-btn") as Element;

    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });
});
