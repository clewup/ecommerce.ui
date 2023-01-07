import { render, screen } from "@testing-library/react";
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
  it("should render the component with the expected values", () => {
    renderHelper(<TrendingProducts />);

    expect(screen.getAllByText("PRODUCT_NAME")).toHaveLength(3);
  });

  it("should fetch the popular products", () => {
    renderHelper(<TrendingProducts />);

    expect(mockedUseStatistics.getMostPopular).toHaveBeenCalled();
  });

  it("should render the loader when loading", () => {
    mockedUseStatistics.isLoading = true;
    renderHelper(<TrendingProducts />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseStatistics.error = {
      code: "ERROR_CODE",
      message: "ERROR_MESSAGE",
    };
    renderHelper(<TrendingProducts />);

    expect(screen.getByText("ERROR_CODE")).toBeInTheDocument();
  });
});
