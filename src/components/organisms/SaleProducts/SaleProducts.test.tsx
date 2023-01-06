import { render } from "@testing-library/react";
import SaleProducts from "./SaleProducts";
import renderHelper from "../../../utils/renderHelper";
import { mockedProducts } from "../../../types/IProduct";

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

describe("SaleProducts", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<SaleProducts />);
    const component = container.querySelector("#sale-products") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch the sale products", () => {
    const { container } = renderHelper(<SaleProducts />);
    expect(mockedUseStatistics.getMostDiscounted).toHaveBeenCalled();
  });

  it("should render the products", () => {
    const { container } = renderHelper(<SaleProducts />);
    const products = container.querySelectorAll("#product-tile");

    expect(products).toHaveLength(3);
  });

  it("should render the loader when loading", () => {
    mockedUseStatistics.isLoading = true;
    const { container } = renderHelper(<SaleProducts />);
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseStatistics.error = mockedError;
    const { container } = renderHelper(<SaleProducts />);
    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
