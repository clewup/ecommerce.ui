import { queryDefaultValues } from "../../enums/defaultValues";

export const mockedProductContext = {
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
