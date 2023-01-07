import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "../styles/theme";
import { render } from "@testing-library/react";
import { AuthContext } from "../contexts/Auth";
import { ProductContext } from "../contexts/Product";
import { CartContext } from "../contexts/Cart";
import { UserContext } from "../contexts/User";
import { IClaim } from "../interfaces/IClaim";
import { queryDefaultValues } from "../enums/defaultValues";
import { mockedCart } from "../components/organisms/UserCart/data/mockData";
import { mockedUser } from "../components/organisms/UserForm/data/mockData";

/*
Provides contexts for unit tests.
New contexts should be added here to support testing.
 */

export const mockedAuthContext = {
  isAuthenticated: true,
  setAuthenticated: jest.fn(),
  accessToken: "ACCESS_TOKEN",
  setAccessToken: jest.fn(),
  claims: [] as IClaim[],
  setClaims: jest.fn(),
  role: "ROLE",
  setRole: jest.fn(),
};

export const mockedCartContext = {
  cart: mockedCart,
  setCart: jest.fn(),
  isLoading: false,
  setLoading: jest.fn(),
};

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

export const mockedUserContext = {
  user: mockedUser,
  setUser: jest.fn(),
};

const renderHelper = (children: any) => {
  return render(
    <Router>
      <AuthContext.Provider value={mockedAuthContext}>
        <UserContext.Provider value={mockedUserContext}>
          <ProductContext.Provider value={mockedProductContext}>
            <CartContext.Provider value={mockedCartContext}>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CartContext.Provider>
          </ProductContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
};
export default renderHelper;
