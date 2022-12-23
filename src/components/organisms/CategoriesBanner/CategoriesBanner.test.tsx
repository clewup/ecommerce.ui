import { render } from "@testing-library/react";
import CategoriesBanner from "./CategoriesBanner";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext } from "../../../contexts/Product";
import { queryDefaultValues } from "../../../enums/defaultValues";

const mockedProductContext = {
  categories: [
    "CATEGORY_1",
    "CATEGORY_2",
    "CATEGORY_3",
    "CATEGORY_4",
    "CATEGORY_5",
  ],
  setCategories: jest.fn(),
  searchQuery: queryDefaultValues.SEARCH_QUERY,
  setSearchQuery: jest.fn(),
  categoryQuery: queryDefaultValues.CATEGORY_QUERY,
  setCategoryQuery: jest.fn(),
  priceQuery: queryDefaultValues.PRICE_QUERY,
  setPriceQuery: jest.fn(),
  saleQuery: queryDefaultValues.SALE_QUERY,
  setSaleQuery: jest.fn(),
  stockQuery: queryDefaultValues.STOCK_QUERY,
  setStockQuery: jest.fn(),
  sortByQuery: queryDefaultValues.SORT_BY_QUERY,
  setSortByQuery: jest.fn(),
};

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("CategoriesBanner", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <CategoriesBanner />
        </ProductContext.Provider>
      </Router>
    );
    const component = container.querySelector("#categories-banner");

    expect(component).toBeInTheDocument();
  });

  it("should render the categories", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <CategoriesBanner />
        </ProductContext.Provider>
      </Router>
    );
    const categories = container.querySelectorAll("#category-tile");

    expect(categories).toHaveLength(5);
  });
});
