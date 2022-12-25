import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Store from "./Store";
import { mockedUseProductFilter } from "../../../data/mockData/useProductFilterData";
import React from "react";

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
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <Store />
      </Router>
    );
    const component = container.querySelector("#store") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the products", () => {
    const { container } = render(
      <Router>
        <Store />
      </Router>
    );
    const products = container.querySelector("#products") as Element;

    expect(products).toBeInTheDocument();
  });

  it("should render the filter button", () => {
    const { container } = render(
      <Router>
        <Store />
      </Router>
    );
    const filterButton = container.querySelector('[type="button"]') as Element;

    expect(filterButton).toBeInTheDocument();
  });

  it("should open the product filter on filter button click", () => {
    jest.spyOn(React, "useState").mockImplementation(mockedUseStateFilterOpen);
    const { container } = render(
      <Router>
        <Store />
      </Router>
    );
    const filterButton = container.querySelector('[type="button"]') as Element;

    fireEvent.click(filterButton);

    expect(mockedSetFilterOpen).toHaveBeenCalled();
  });

  it("should render the total amount of queried products", () => {
    jest.spyOn(React, "useState").mockImplementation(mockedUseStateFilterOpen);
    const { container } = render(
      <Router>
        <Store />
      </Router>
    );
    const results = container.querySelectorAll(".text")[0] as Element;

    expect(results).toHaveTextContent("Showing 3 results.");
  });
});