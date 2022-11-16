import { Guid } from "guid-typescript";

export const apiEndpoints = {
  // AUTH
  LOGIN: "auth/login",
  REGISTER: "register",

  // ECOMMERCE
  PRODUCT: "product",
  PRODUCT_BY_ID: (id: Guid) => `product/${id}`,
};
