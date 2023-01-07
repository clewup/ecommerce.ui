import { screen } from "@testing-library/react";
import Product from "./Product";
import React from "react";
import renderHelper, { mockedAuthContext } from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import { mockedProduct } from "../../organisms/Products/data/mockData";

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
  it("should render the component with the expected values", () => {
    renderHelper(<Product />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "HTTPS://IMAGE_URL.JPG"
    );
    expect(screen.getByText("PRODUCT_NAME")).toBeInTheDocument();
    expect(screen.getByText("PRODUCT_DESCRIPTION")).toBeInTheDocument();
    expect(screen.getByText("PRODUCT_COLOR")).toBeInTheDocument();
    expect(screen.getByText("£33.33")).toBeInTheDocument();

    expect(screen.getByTestId("ShoppingCartIcon")).toBeInTheDocument();
  });

  it("should add the product to the cart if logged in on button click", () => {
    renderHelper(<Product />);

    userEvent.click(screen.getByTestId("ShoppingCartIcon"));

    expect(mockedUseCart.addToCart).toHaveBeenCalled();
  });

  it("should navigate to the login page if not logged in on button click", () => {
    mockedAuthContext.isAuthenticated = false;
    renderHelper(<Product />);

    userEvent.click(screen.getByTestId("ShoppingCartIcon"));

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });

  it("should render the loader when loading", () => {
    mockedUseProduct.isLoading = true;
    renderHelper(<Product />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseProduct.error = { code: "ERROR_CODE", message: "ERROR_MESSAGE" };
    renderHelper(<Product />);

    expect(screen.getByText("ERROR_CODE")).toBeInTheDocument();
  });
});
