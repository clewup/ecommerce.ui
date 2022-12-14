import { Guid } from "guid-typescript";
import { IProduct } from "../../../../interfaces/IProduct";
import { createGuid } from "../../../../utils/createGuid";
import { productSizes } from "../../../../enums/productSizes";

export const mockedProduct: IProduct = {
  id: createGuid(),
  name: "PRODUCT_NAME",
  description: "PRODUCT_DESCRIPTION",
  color: "PRODUCT_COLOR",
  images: ["HTTPS://IMAGE_URL.JPG"] as string[],
  category: "PRODUCT_CATEGORY",
  subcategory: "PRODUCT_SUBCATEGORY",
  range: "PRODUCT_RANGE",
  size: productSizes.XSMALL,
  stock: 10,
  price: 33.33,
  discount: 0,
};

export const mockedDiscountedProduct: IProduct = {
  ...mockedProduct,
  discount: 10,
  discountedPrice: 30.0,
};

export const mockedOutOfStockProduct: IProduct = {
  ...mockedProduct,
  stock: 0,
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
