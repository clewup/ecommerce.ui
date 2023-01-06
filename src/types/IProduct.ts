import { Guid } from "guid-typescript";

export interface ISize {
  size: string;
  stock: number;
}

export interface IProduct {
  id: Guid;
  name: string;
  description: string;
  color: string;
  images: string[];

  category: string;
  subcategory: string;
  range: string;

  oneSize: boolean;
  sizes: ISize[];

  price: number;
  discount: number;
  discountedPrice?: number;
  totalSavings?: number;
}

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
  sizes: [
    {
      size: "XSmall",
      stock: 0,
    },
  ],
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
