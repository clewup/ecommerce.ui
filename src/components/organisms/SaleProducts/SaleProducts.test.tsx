import { screen } from "@testing-library/react";
import SaleProducts from "./SaleProducts";
import renderHelper from "../../../utils/renderHelper";
import { mockedProducts } from "../Products/data/mockData";

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
  it("should render the component with the expected values", () => {
    renderHelper(<SaleProducts />);

    expect(screen.getAllByText("PRODUCT_NAME")).toHaveLength(3);
  });

  it("should fetch the sale products", () => {
    renderHelper(<SaleProducts />);

    expect(mockedUseStatistics.getMostDiscounted).toHaveBeenCalled();
  });

  it("should render the loader when loading", () => {
    mockedUseStatistics.isLoading = true;
    renderHelper(<SaleProducts />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseStatistics.error = {
      code: "ERROR_CODE",
      message: "ERROR_MESSAGE",
    };
    renderHelper(<SaleProducts />);

    expect(screen.getByText("ERROR_CODE")).toBeInTheDocument();
  });
});
