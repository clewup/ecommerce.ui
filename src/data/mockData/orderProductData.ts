import { ICartProduct } from "../../types/IProduct";
import { Guid } from "guid-typescript";

export const mockedOrderProduct: ICartProduct = {
  id: Guid.create(),
  name: "ORDER_PRODUCT_NAME",
  images: ["HTTPS://IMAGE_URL.JPG"] as string[],
  description: "ORDER_PRODUCT_DESCRIPTION",
  category: "ORDER_PRODUCT_CATEGORY",
  subcategory: "ORDER_PRODUCT_SUBCATEGORY",
  range: "ORDER_PRODUCT_RANGE",
  color: "ORDER_PRODUCT_COLOR",
  price: 12.34,
  discount: 0,
};

export const mockedDiscountedOrderProduct: ICartProduct = {
  ...mockedOrderProduct,
  discount: 50,
};
