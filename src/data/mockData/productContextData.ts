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
  subcategories: [
    "SUBCATEGORY_1",
    "SUBCATEGORY_2",
    "SUBCATEGORY_3",
    "SUBCATEGORY_4",
    "SUBCATEGORY_5",
  ],
  setSubcategories: jest.fn(),
  linkedSubcategories: [
    {
      category: "CATEGORY_1",
      subcategories: [
        "LINKED_SUBCATEGORY_1",
        "LINKED_SUBCATEGORY_2",
        "LINKED_SUBCATEGORY_3",
      ],
    },
    {
      category: "CATEGORY_2",
      subcategories: [
        "LINKED_SUBCATEGORY_4",
        "LINKED_SUBCATEGORY_5",
        "LINKED_SUBCATEGORY_6",
      ],
    },
  ],
  setLinkedSubcategories: jest.fn(),
  ranges: ["RANGE_1", "RANGE_2", "RANGE_3", "RANGE_4", "RANGE_5"],
  setRanges: jest.fn(),
  searchQuery: queryDefaultValues.SEARCH_QUERY,
  setSearchQuery: jest.fn(),
  categoryQuery: queryDefaultValues.CATEGORY_QUERY,
  setCategoryQuery: jest.fn(),
  subcategoryQuery: queryDefaultValues.SUBCATEGORY_QUERY,
  setSubcategoryQuery: jest.fn(),
  rangeQuery: queryDefaultValues.RANGE_QUERY,
  setRangeQuery: jest.fn(),
  priceQuery: queryDefaultValues.PRICE_QUERY,
  setPriceQuery: jest.fn(),
  saleQuery: queryDefaultValues.SALE_QUERY,
  setSaleQuery: jest.fn(),
  stockQuery: queryDefaultValues.STOCK_QUERY,
  setStockQuery: jest.fn(),
  sortByQuery: queryDefaultValues.SORT_BY_QUERY,
  setSortByQuery: jest.fn(),
  resetQueries: jest.fn(),
};
