import { IProduct } from "../../types/IProduct";
import { Guid } from "guid-typescript";

export const mockedProduct: IProduct = {
  id: Guid.create(),
  name: "PRODUCT_NAME",
  images: ["HTTPS://IMAGE_URL.JPG"] as string[],
  description: "PRODUCT_DESCRIPTION",
  category: "PRODUCT_CATEGORY",
  subcategory: "PRODUCT_SUBCATEGORY",
  range: "PRODUCT_RANGE",
  color: "PRODUCT_COLOR",
  price: 12.34,
  discount: 0,
  stock: 10,
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
  stock: 0,
};

export const mockedProductInitialValues: IProduct = {
  id: Guid.create(),
  name: "",
  images: [],
  description: "",
  category: "",
  subcategory: "",
  range: "",
  color: "",
  stock: 0,
  price: 0,
  discount: 0,
};
