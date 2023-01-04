import { Guid } from "guid-typescript";
import { IProduct } from "../../types/IProduct";

export const mockedOrderProduct: IProduct = {
  id: Guid.create(),
  name: "ORDER_PRODUCT_NAME",
  description: "ORDER_PRODUCT_DESCRIPTION",
  color: "ORDER_PRODUCT_COLOR",
  images: ["HTTPS://IMAGE_URL.JPG"] as string[],

  category: "ORDER_PRODUCT_CATEGORY",
  subcategory: "ORDER_PRODUCT_SUBCATEGORY",
  range: "ORDER_PRODUCT_RANGE",

  oneSize: false,
  sizes: [
    {
      size: "XSmall",
      stock: 10,
    },
    {
      size: "Small",
      stock: 10,
    },
    {
      size: "Medium",
      stock: 10,
    },
    {
      size: "Large",
      stock: 10,
    },
    {
      size: "XLarge",
      stock: 10,
    },
  ],
  price: 12.34,
  discount: 0,
};

export const mockedDiscountedOrderProduct: IProduct = {
  ...mockedOrderProduct,
  discount: 50,
  discountedPrice: 6.17,
};
