import { screen } from "@testing-library/react";
import ProductFilter from "./ProductFilter";
import React from "react";
import { ProductContext } from "../../../contexts/Product";
import renderHelper, {
  mockedProductContext,
} from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import { mockedProducts } from "../../../types/IProduct";

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
  it("should render the component with the expected inputs", async () => {
    renderHelper(<ProductFilter toggleDrawer={mockToggleDrawer} />);

    // Search
    expect(
      await screen.getByRole("textbox", { name: "Search" })
    ).toBeInTheDocument();
    // Sort By, Category, Subcategory, Range
    expect(
      await screen.getAllByRole("button", { name: "Select" })
    ).toHaveLength(4);
    // Price
    expect(await screen.getAllByRole("slider", { name: "Price" })).toHaveLength(
      2
    );
    // On Sale
    expect(
      await screen.getAllByRole("checkbox", { name: "controlled" })[0]
    ).toBeInTheDocument();
    // In Stock
    expect(
      await screen.getAllByRole("checkbox", { name: "controlled" })[1]
    ).toBeInTheDocument();
  });

  it("should update the search query on value input and 'enter' key down", async () => {
    renderHelper(<ProductFilter toggleDrawer={mockToggleDrawer} />);

    userEvent.type(
      await screen.getByRole("textbox", { name: "Search" }),
      "PRODUCT_FILTER_INPUT"
    );
    userEvent.keyboard("{Enter}");

    expect(mockedProductContext.setSearchQuery).toHaveBeenCalled();
  });

  it("should update the sale query on click", async () => {
    renderHelper(<ProductFilter toggleDrawer={mockToggleDrawer} />);

    userEvent.click(
      (await screen.getAllByRole("checkbox", {
        name: "controlled",
      })[0]) as Element
    );

    expect(mockedProductContext.setSaleQuery).toHaveBeenCalled();
  });

  it("should update the sale query on click", async () => {
    renderHelper(<ProductFilter toggleDrawer={mockToggleDrawer} />);

    userEvent.click(
      (await screen.getAllByRole("checkbox", {
        name: "controlled",
      })[1]) as Element
    );

    expect(mockedProductContext.setStockQuery).toHaveBeenCalled();
  });

  it("should render the app error when there is an error", async () => {
    // @ts-ignore
    mockedUseProductFilter.error = {
      code: "ERROR_CODE",
      message: "ERROR_MESSAGE",
    };
    renderHelper(<ProductFilter toggleDrawer={mockToggleDrawer} />);

    expect(await screen.getByText("ERROR_CODE")).toBeInTheDocument();
    expect(await screen.getByText("ERROR_MESSAGE")).toBeInTheDocument();
  });
});
