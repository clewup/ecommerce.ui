import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryTile from "./CategoryTile";
import React from "react";
import { mockedProductContext } from "../../../data/mockData/productContextData";
import { ProductContext } from "../../../contexts/Product";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("CategoryTile", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <CategoryTile category={"CATEGORY"} />
        </ProductContext.Provider>
      </Router>
    );

    const component = container.querySelector("#category-tile") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the category name", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <CategoryTile category={"CATEGORY"} />
        </ProductContext.Provider>
      </Router>
    );

    const name = container.querySelector(".subheading") as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("CATEGORY");
  });

  it("should navigate to the store on click", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <CategoryTile category={"CATEGORY"} />
        </ProductContext.Provider>
      </Router>
    );

    const tile = container.querySelector("#category-tile") as Element;

    expect(tile).toBeInTheDocument();

    fireEvent.click(tile);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("store");
  });

  it("should update the category query on click", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <CategoryTile category={"CATEGORY"} />
        </ProductContext.Provider>
      </Router>
    );

    const tile = container.querySelector("#category-tile") as Element;

    expect(tile).toBeInTheDocument();

    fireEvent.click(tile);

    expect(mockedProductContext.setCategoryQuery).toHaveBeenCalled();
    expect(mockedProductContext.setCategoryQuery).toHaveBeenCalledWith(
      "CATEGORY"
    );
  });
});
