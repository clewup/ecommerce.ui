import { ICartProduct } from "../../types/IProduct";
import { Guid } from "guid-typescript";
import { IImage } from "../../types/IImage";

export const mockedOrderProduct: ICartProduct = {
  id: Guid.create(),
  name: "ORDER_PRODUCT_NAME",
  images: [
    {
      title: "IMAGE_TITLE",
      description: "IMAGE_DESCRIPTION",
      url: "HTTPS://IMAGE_URL.JPG",
    },
  ] as IImage[],
  description: "ORDER_PRODUCT_DESCRIPTION",
  category: "ORDER_PRODUCT_CATEGORY",
  range: "ORDER_PRODUCT_RANGE",
  color: "ORDER_PRODUCT_COLOR",
  price: 12.34,
  discount: 0,
};

export const mockedDiscountedOrderProduct: ICartProduct = {
  ...mockedOrderProduct,
  discount: 50,
};
