import { screen } from "@testing-library/react";
import ProductFilter from "./ProductFilter";
import React from "react";
import renderHelper, {
  mockedProductContext,
} from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import { mockedProducts } from "../../organisms/Products/data/mockData";

const mockToggleDrawer = jest.fn().mockReturnValue(true);

const mockedUseProductFilter = {
  products: mockedProducts,
  isLoading: false,
  isQuerying: false,
  error: null,
};

jest.mock("../../../hooks/useProductFilter", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseProductFilter;
    },
  };
});

describe("ProductFilter", () => {
  it("should render the component with the expected filters", () => {
    renderHelper(<ProductFilter toggleDrawer={mockToggleDrawer} />);

    // Search
    expect(screen.getByRole("textbox", { name: "Search" })).toBeInTheDocument();
    // Sort By, Category, Subcategory, Range
    expect(screen.getAllByRole("button", { name: "Select" })).toHaveLength(4);
    // Price
    expect(screen.getAllByRole("slider", { name: "Price" })).toHaveLength(2);
    // On Sale
    expect(
      screen.getAllByRole("checkbox", { name: "controlled" })[0]
    ).toBeInTheDocument();
    // In Stock
    expect(
      screen.getAllByRole("checkbox", { name: "controlled" })[1]
    ).toBeInTheDocument();
  });

  it("should update the search query on value input and 'enter' key down", () => {
    renderHelper(<ProductFilter toggleDrawer={mockToggleDrawer} />);

    userEvent.type(
      screen.getByRole("textbox", { name: "Search" }),
      "PRODUCT_FILTER_INPUT"
    );
    userEvent.keyboard("{Enter}");

    expect(mockedProductContext.setSearchQuery).toHaveBeenCalled();
  });

  it("should update the sale query on click", () => {
    renderHelper(<ProductFilter toggleDrawer={mockToggleDrawer} />);

    userEvent.click(
      screen.getAllByRole("checkbox", {
        name: "controlled",
      })[0] as Element
    );

    expect(mockedProductContext.setSaleQuery).toHaveBeenCalled();
  });

  it("should update the sale query on click", () => {
    renderHelper(<ProductFilter toggleDrawer={mockToggleDrawer} />);

    userEvent.click(
      screen.getAllByRole("checkbox", {
        name: "controlled",
      })[1] as Element
    );

    expect(mockedProductContext.setStockQuery).toHaveBeenCalled();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseProductFilter.error = {
      code: "ERROR_CODE",
      message: "ERROR_MESSAGE",
    };
    renderHelper(<ProductFilter toggleDrawer={mockToggleDrawer} />);

    expect(screen.getByText("ERROR_CODE")).toBeInTheDocument();
    expect(screen.getByText("ERROR_MESSAGE")).toBeInTheDocument();
  });
});
