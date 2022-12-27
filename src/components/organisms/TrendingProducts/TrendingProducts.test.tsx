import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TrendingProducts from "./TrendingProducts";
import { mockedUseStatistics } from "data/mockData/useStatisticsData";
import { mockedError } from "../../../data/mockData/errorData";

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
    const { container } = render(
      <Router>
        <TrendingProducts />
      </Router>
    );
    const component = container.querySelector("#trending-products") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch the popular products", () => {
    const { container } = render(
      <Router>
        <TrendingProducts />
      </Router>
    );
    expect(mockedUseStatistics.getMostPopular).toHaveBeenCalled();
  });

  it("should render the products", () => {
    const { container } = render(
      <Router>
        <TrendingProducts />
      </Router>
    );
    const products = container.querySelectorAll("#product-tile");

    expect(products).toHaveLength(3);
  });

  it("should render the loader when loading", () => {
    mockedUseStatistics.isLoading = true;
    const { container } = render(
      <Router>
        <TrendingProducts />
      </Router>
    );
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseStatistics.error = mockedError;
    const { container } = render(
      <Router>
        <TrendingProducts />
      </Router>
    );
    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
