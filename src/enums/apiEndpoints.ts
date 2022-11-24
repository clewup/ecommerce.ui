import { Guid } from "guid-typescript";

export const apiEndpoints = {
  // AUTH
  LOGIN: "auth/login",
  USER: "user",

  // ECOMMERCE
  PRODUCT: "product",
  PRODUCT_CATEGORIES: "product/categories",
  PRODUCT_VARIANTS: "product/variants",
  PRODUCT_BY_ID: (id: Guid) => `product/${id}`,
};
