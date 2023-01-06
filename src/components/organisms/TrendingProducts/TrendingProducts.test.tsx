import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TrendingProducts from "./TrendingProducts";
import renderHelper from "../../../utils/renderHelper";
import { IProduct, mockedProducts } from "../../../types/IProduct";
import { AxiosError } from "axios";

const mockedUseStatistics = {
  popularProducts: mockedProducts,
  discountedProducts: mockedProducts,
  isLoading: false,
  error: null,
  getMostDiscounted: jest.fn(),
  getMostPopular: jest.fn(),
};

jest.mock("../../../hooks/useStatistics", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseStatistics;
    },
  };
});

describe("TrendingProducts", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<TrendingProducts />);
    const component = container.querySelector("#trending-products") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch the popular products", () => {
    const { container } = renderHelper(<TrendingProducts />);
    expect(mockedUseStatistics.getMostPopular).toHaveBeenCalled();
  });

  it("should render the products", () => {
    const { container } = renderHelper(<TrendingProducts />);
    const products = container.querySelectorAll("#product-tile");

    expect(products).toHaveLength(3);
  });

  it("should render the loader when loading", () => {
    mockedUseStatistics.isLoading = true;
    const { container } = renderHelper(<TrendingProducts />);
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseStatistics.error = {
      code: "ERROR_CODE",
      message: "ERROR_MESSAGE",
    };
    const { container } = renderHelper(<TrendingProducts />);
    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
