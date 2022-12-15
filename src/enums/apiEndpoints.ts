import { Guid } from "guid-typescript";

export const apiEndpoints = {
  // AUTH
  LOGIN: "auth/login",
  USER: "user",

  // ECOMMERCE
  PRODUCT: "product",
  PRODUCT_CATEGORIES: "product/categories",
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
