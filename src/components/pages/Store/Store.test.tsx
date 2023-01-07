import { fireEvent, screen } from "@testing-library/react";
import Store from "./Store";
import React from "react";
import renderHelper from "../../../utils/renderHelper";
import { IProduct, mockedProducts } from "../../../types/IProduct";
import { AxiosError } from "axios";
import userEvent from "@testing-library/user-event";

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

const mockedSetFilterOpen = jest.fn();
const mockedUseStateFilterOpen: any = (initState: any) => [
  initState,
  mockedSetFilterOpen,
];

describe("Store", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<Store />);

    expect(screen.getAllByText("PRODUCT_NAME")).toHaveLength(3);
    expect(
      screen.getByText("Filters", { selector: 'button[type="button"]' })
    ).toBeInTheDocument();
    expect(screen.getByText("Showing 3 results.")).toBeInTheDocument();
  });

  it("should open the product filter on filter button click", () => {
    jest.spyOn(React, "useState").mockImplementation(mockedUseStateFilterOpen);
    renderHelper(<Store />);

    userEvent.click(
      screen.getByText("Filters", { selector: 'button[type="button"]' })
    );

    expect(mockedSetFilterOpen).toHaveBeenCalled();
  });
});
