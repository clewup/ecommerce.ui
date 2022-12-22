import { fireEvent, render, screen } from "@testing-library/react";
import ProductFilter from "./ProductFilter";
import userEvent from "@testing-library/user-event";

const mockToggleDrawer = jest.fn().mockReturnValue(true);

type TestElement = Document | Element | Window | Node;

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe("ProductFilter", () => {
  it("should render an empty search bar", () => {
    const { container } = render(
      <ProductFilter toggleDrawer={mockToggleDrawer} />
    );
    const search = container.querySelector('[type="text"]') as Element;

    expect(search).toBeInTheDocument();
    expect(search).toHaveTextContent("");
  });

  it("should update the search bar on text input", () => {
    const { container } = render(
      <ProductFilter toggleDrawer={mockToggleDrawer} />
    );
    const search = container.querySelector('[type="text"]') as Element;
    fireEvent.change(search, { target: { value: "PRODUCT_FILTER_INPUT" } });

    expect(hasInputValue(search, "PRODUCT_FILTER_INPUT")).toBe(true);
  });

  it("should render the sort by dropdown", () => {
    const { container } = render(
      <ProductFilter toggleDrawer={mockToggleDrawer} />
    );
    const sortBy = container.querySelectorAll('[role="button"]')[0] as Element;

    expect(sortBy).toBeInTheDocument();
  });

  it("should render the category dropdown", () => {
    const { container } = render(
      <ProductFilter toggleDrawer={mockToggleDrawer} />
    );
    const category = container.querySelectorAll(
      '[role="button"]'
    )[1] as Element;

    expect(category).toBeInTheDocument();
  });

  it("should render the price slider", () => {
    const { container } = render(
      <ProductFilter toggleDrawer={mockToggleDrawer} />
    );
    const price = container.querySelector(".MuiSlider-root") as Element;

    expect(price).toBeInTheDocument();
  });

  it("should render the sale checkbox", () => {
    const { container } = render(
      <ProductFilter toggleDrawer={mockToggleDrawer} />
    );
    const sale = container.querySelectorAll(
      ".PrivateSwitchBase-input"
    )[0] as Element;

    expect(sale).toBeInTheDocument();
  });

  it("should render the stock checkbox", () => {
    const { container } = render(
      <ProductFilter toggleDrawer={mockToggleDrawer} />
    );
    const stock = container.querySelectorAll(
      ".PrivateSwitchBase-input"
    )[1] as Element;

    expect(stock).toBeInTheDocument();
  });
});
