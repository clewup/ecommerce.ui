import { Guid } from "guid-typescript";
import { IProduct } from "../../types/IProduct";

export const mockedCartProduct: IProduct = {
  id: Guid.create(),
  name: "CART_PRODUCT_NAME",
  description: "CART_PRODUCT_DESCRIPTION",
  color: "CART_PRODUCT_COLOR",
  images: ["HTTPS://IMAGE_URL.JPG"] as string[],

  category: "CART_PRODUCT_CATEGORY",
  subcategory: "CART_PRODUCT_SUBCATEGORY",
  range: "CART_PRODUCT_RANGE",

  oneSize: false,
  size: [
    {
      size: "XSmall",
      count: 10,
    },
    {
      size: "Small",
      count: 10,
    },
    {
      size: "Medium",
      count: 10,
    },
    {
      size: "Large",
      count: 10,
    },
    {
      size: "XLarge",
      count: 10,
    },
  ],
  price: 12.34,
  discount: 0,
};

export const mockedDiscountedCartProduct: IProduct = {
  ...mockedCartProduct,
  discount: 50,
};

export const mockedCartProducts: IProduct[] = [
  {
    ...mockedCartProduct,
    id: Guid.parse("96D80925-C3F5-44CE-8AF1-BC4EB60E6C76"),
  },
  {
    ...mockedCartProduct,
    id: Guid.parse("7532FE48-19D4-4F7F-8233-8691E4B59D2E"),
  },
  {
    ...mockedCartProduct,
    id: Guid.parse("2842C3F1-04F1-4728-82D7-8C199CDF8667"),
  },
];
