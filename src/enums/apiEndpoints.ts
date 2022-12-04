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
  CART_BY_ID: (userId: Guid) => `cart/${userId}`,
  ORDER: "order",
};
