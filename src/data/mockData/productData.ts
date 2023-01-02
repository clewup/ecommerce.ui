import { IProduct } from "../../types/IProduct";
import { Guid } from "guid-typescript";

export const mockedProduct: IProduct = {
  id: Guid.create(),
  name: "PRODUCT_NAME",
  description: "PRODUCT_DESCRIPTION",
  color: "PRODUCT_COLOR",
  images: ["HTTPS://IMAGE_URL.JPG"] as string[],

  category: "PRODUCT_CATEGORY",
  subcategory: "PRODUCT_SUBCATEGORY",
  range: "PRODUCT_RANGE",

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

export const mockedProducts: IProduct[] = [
  {
    ...mockedProduct,
    id: Guid.parse("96D80925-C3F5-44CE-8AF1-BC4EB60E6C76"),
  },
  {
    ...mockedProduct,
    id: Guid.parse("7532FE48-19D4-4F7F-8233-8691E4B59D2E"),
  },
  {
    ...mockedProduct,
    id: Guid.parse("2842C3F1-04F1-4728-82D7-8C199CDF8667"),
  },
];

export const mockedDiscountedProduct: IProduct = {
  ...mockedProduct,
  discount: 50,
};

export const mockedOutOfStockProduct: IProduct = {
  ...mockedProduct,
  size: [
    {
      size: "XSmall",
      count: 0,
    },
  ],
};

export const mockedProductInitialValues: IProduct = {
  id: Guid.create(),
  name: "",
  description: "",
  color: "",
  images: [],

  category: "",
  subcategory: "",
  range: "",

  oneSize: false,
  size: [],
  price: 0,
  discount: 0,
};
