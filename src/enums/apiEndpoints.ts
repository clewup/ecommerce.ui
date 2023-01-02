import { Guid } from "guid-typescript";

export const apiEndpoints = {
  // AUTH
  LOGIN: "auth/login",
  USER: "user",

  // ECOMMERCE
  PRODUCT: "product",
  PRODUCT_SEARCH: (query: string) => `product/search${query}`,
  CATEGORIES: "category",
  SUBCATEGORIES: "category/subcategories",
  LINKED_SUBCATEGORIES: "category/linkedsubcategories",
  SUBCATEGORIES_BY_CATEGORY: (category: string) =>
    `category/subcategories/${category}`,
  RANGES: "category/ranges",
  PRODUCT_BY_ID: (id: Guid) => `product/${id}`,
  IMAGE_UPLOAD: "upload/image",
  CART: "cart",
  USER_CART: "cart/user",
  ORDER: "order",
  USER_ORDERS: "order/user",
  STATISTICS_MOST_POPULAR: (amount: number) =>
    `statistics/popular?amount=${amount}`,
  STATISTICS_MOST_DISCOUNTED: (amount: number) =>
    `statistics/discounted?amount=${amount}`,
};
