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
  color: "CART_PRODUCT_COLOR",
  price: 12.34,
  discount: 0,
};

export const mockedDiscountedCartProduct: ICartProduct = {
  ...mockedCartProduct,
  discount: 50,
};
