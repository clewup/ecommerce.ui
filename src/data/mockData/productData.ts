import { IProduct } from "../../types/IProduct";
import { Guid } from "guid-typescript";
import { IImage } from "../../types/IImage";
import { createGuid } from "../../utils/CreateGuid";

export const mockedProduct: IProduct = {
  id: Guid.create(),
  name: "PRODUCT_NAME",
  images: [
    {
      title: "IMAGE_TITLE",
      description: "IMAGE_DESCRIPTION",
      url: "HTTPS://IMAGE_URL.JPG",
    },
  ] as IImage[],
  description: "PRODUCT_DESCRIPTION",
  category: "PRODUCT_CATEGORY",
  color: "PRODUCT_COLOR",
  price: 12.34,
  discount: 0,
  stock: 10,
};

export const mockedProducts: IProduct[] = [
  mockedProduct,
  mockedProduct,
  mockedProduct,
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
  id: createGuid(),
  name: "",
  images: [],
  description: "",
  category: "",
  color: "",
  stock: 0,
  price: 0,
  discount: 0,
};
