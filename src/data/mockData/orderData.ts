import { IOrder } from "../../types/IOrder";
import { Guid } from "guid-typescript";
import { IImage } from "../../types/IImage";

export const mockedOrders: IOrder[] = [
  {
    id: Guid.parse("831AAFCB-F559-4B5D-9F43-0A0389D653C8"),
    userId: Guid.create(),
    firstName: "ORDER_FIRST_NAME",
    lastName: "ORDER_LAST_NAME",
    email: "ORDER_EMAIL",
    deliveryAddress: {
      lineOne: "ORDER_LINE_ONE",
      lineThree: "ORDER_LINE_TWO",
      lineTwo: "ORDER_LINE_THREE",
      postcode: "ORDER_POSTCODE",
      city: "ORDER_CITY",
      country: "ORDER_COUNTRY",
      county: "ORDER_COUNTY",
    },
    cart: {
      id: Guid.create(),
      userId: Guid.create(),
      products: [
        {
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
        },
        {
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
          price: 56.78,
          discount: 0,
        },
      ],
      total: 69.12,
    },
    orderDate: new Date(),
  },
];
