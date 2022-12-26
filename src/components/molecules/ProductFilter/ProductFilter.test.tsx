import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import ProductFilter from "./ProductFilter";
import React from "react";
import { mockedProductContext } from "../../../data/mockData/productContextData";
import { ProductContext } from "../../../contexts/Product";

const mockToggleDrawer = jest.fn().mockReturnValue(true);

type TestElement = Document | Element | Window | Node;
function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe("ProductFilter", () => {
  it("should render the component", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const component = container.querySelector("#product-filter") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render an empty search bar", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const search = container.querySelector('[type="text"]') as Element;

    expect(search).toBeInTheDocument();
    expect(search).toHaveTextContent("");
  });

  it("should update the search bar on text input", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const search = container.querySelector('[type="text"]') as Element;
    fireEvent.change(search, { target: { value: "PRODUCT_FILTER_INPUT" } });

    expect(hasInputValue(search, "PRODUCT_FILTER_INPUT")).toBe(true);
  });

  it("should update the search query on 'enter' key down", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const search = container.querySelector('[type="text"]') as Element;
    fireEvent.change(search, { target: { value: "PRODUCT_FILTER_INPUT" } });
    fireEvent.keyDown(search, { key: "Enter", code: "Enter", charCode: 13 });

    expect(mockedProductContext.setSearchQuery).toHaveBeenCalled();
  });

  it("should render the sort by dropdown", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const sortBy = container.querySelectorAll(
      '[aria-haspopup="listbox"]'
    )[0] as Element;

    expect(sortBy).toBeInTheDocument();
  });

  it("should render the sort by dropdown with a default value of 'select'", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const sortBy = container.querySelectorAll(
      '[aria-haspopup="listbox"]'
    )[0] as Element;

    expect(sortBy).toHaveTextContent("Select");
  });

  it("should render the category dropdown", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const category = container.querySelectorAll(
      '[aria-haspopup="listbox"]'
    )[1] as Element;

    expect(category).toBeInTheDocument();
  });

  it("should render the category dropdown with a default value of 'select'", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const category = container.querySelectorAll(
      '[aria-haspopup="listbox"]'
    )[1] as Element;

    expect(category).toHaveTextContent("Select");
  });

  it("should render the price slider", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const price = container.querySelector(".MuiSlider-root") as Element;

    expect(price).toBeInTheDocument();
  });

  it("should render the sale checkbox", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const sale = container.querySelectorAll('[type="checkbox"]')[0] as Element;

    expect(sale).toBeInTheDocument();
  });

  it("should update the sale query on click", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const sale = container.querySelectorAll('[type="checkbox"]')[0] as Element;

    fireEvent.click(sale);

    expect(mockedProductContext.setSaleQuery).toHaveBeenCalled();
  });

  it("should render the stock checkbox", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const stock = container.querySelectorAll('[type="checkbox"]')[1] as Element;

    expect(stock).toBeInTheDocument();
  });

  it("should update the sale query on click", () => {
    const { container } = render(
      <ProductContext.Provider value={mockedProductContext}>
        <ProductFilter toggleDrawer={mockToggleDrawer} />
      </ProductContext.Provider>
    );
    const stock = container.querySelectorAll('[type="checkbox"]')[1] as Element;

    fireEvent.click(stock);

    expect(mockedProductContext.setStockQuery).toHaveBeenCalled();
  });
});
