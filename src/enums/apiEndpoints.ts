import { Guid } from "guid-typescript";

export const apiEndpoints = {
  // AUTH
  LOGIN: "auth/login",
  USER: "user",

  // PRODUCT
  PRODUCT: "product",
  PRODUCT_SEARCH: (query: string) => `product/search${query}`,
  PRODUCT_BY_ID: (id: Guid) => `product/${id}`,

  // CATEGORIES
  CATEGORIES: "category",
  SUBCATEGORIES: "category/subcategories",
  LINKED_SUBCATEGORIES: "category/linkedsubcategories",
  SUBCATEGORIES_BY_CATEGORY: (category: string) =>
    `category/subcategories/${category}`,
  RANGES: "category/ranges",

  // IMAGE
  IMAGE_UPLOAD: "upload/image",

  // CART
  CART: "cart",
  USER_CART: "cart/user",

  // ORDER
  ORDER: "order",
  USER_ORDERS: "order/user",

  // STATISTICS
  MOST_POPULAR: (amount: number) => `statistics/popular?amount=${amount}`,
  MOST_DISCOUNTED: (amount: number) => `statistics/discounted?amount=${amount}`,

  // SHIPPING
  TRACK_ORDER: (trackingNumber: Guid) => `shipping/${trackingNumber}`,
  SHIP_ORDER: "shipping",
  EXTEND_ORDER_ARRIVAL: (trackingNumber: Guid, days: number) =>
    `shipping/${trackingNumber}/extend/${days}`,

  // DISCOUNT
  DISCOUNT: "discount",
  DISCOUNT_BY_ID: (id: Guid) => `discount/${id}`,

  // PROMOTION
  PROMOTION: "promotion",
  ACTIVE_PROMOTIONS: "promotion/active",
  PROMOTION_BY_ID: (id: Guid) => `promotion/${id}`,
};
