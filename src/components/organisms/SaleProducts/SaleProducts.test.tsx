import { render } from "@testing-library/react";
import SaleProducts from "./SaleProducts";
import { BrowserRouter as Router } from "react-router-dom";
import { mockedUseStatistics } from "../../../data/mockData/useStatisticsData";
import { mockedError } from "../../../data/mockData/errorData";

jest.mock("../../../hooks/useStatistics", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseStatistics;
    },
  };
});

describe("SaleProducts", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <SaleProducts />
      </Router>
    );
    const component = container.querySelector("#sale-products") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch the sale products", () => {
    const { container } = render(
      <Router>
        <SaleProducts />
      </Router>
    );
    expect(mockedUseStatistics.getMostDiscounted).toHaveBeenCalled();
  });

  it("should render the products", () => {
    const { container } = render(
      <Router>
        <SaleProducts />
      </Router>
    );
    const products = container.querySelectorAll("#product-tile");

    expect(products).toHaveLength(3);
  });

  it("should render the loader when loading", () => {
    mockedUseStatistics.isLoading = true;
    const { container } = render(
      <Router>
        <SaleProducts />
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
        <SaleProducts />
      </Router>
    );
    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
