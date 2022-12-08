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
  CART_BY_USER_ID: (userId: Guid) => `cart/user/${userId}`,
  ORDER: "order",
  ORDER_BY_USER_ID: (userId: Guid) => `order/user/${userId}`,
};
