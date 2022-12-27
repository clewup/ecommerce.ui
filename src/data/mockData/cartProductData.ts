import { ICartProduct } from "../../types/IProduct";
import { Guid } from "guid-typescript";
import { IImage } from "../../types/IImage";

export const mockedCartProduct: ICartProduct = {
  id: Guid.create(),
  name: "CART_PRODUCT_NAME",
  images: [
    {
      title: "IMAGE_TITLE",
      description: "IMAGE_DESCRIPTION",
      url: "HTTPS://IMAGE_URL.JPG",
    },
  ] as IImage[],
  description: "CART_PRODUCT_DESCRIPTION",
  category: "CART_PRODUCT_CATEGORY",
  range: "CART_PRODUCT_RANGE",
  color: "CART_PRODUCT_COLOR",
  price: 12.34,
  discount: 0,
};

export const mockedDiscountedCartProduct: ICartProduct = {
  ...mockedCartProduct,
  discount: 50,
};

export const mockedCartProducts: ICartProduct[] = [
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
