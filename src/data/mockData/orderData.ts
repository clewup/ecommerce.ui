import { IOrder } from "../../types/IOrder";
import { Guid } from "guid-typescript";
import { mockedCartProducts } from "./cartProductData";

export const mockedOrder: IOrder = {
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
    products: mockedCartProducts,
    total: 69.12,
  },
  orderDate: new Date(),
};

export const mockedOrders: IOrder[] = [
  {
    ...mockedOrder,
    id: Guid.parse("EA5B42AE-2B84-4E8A-B77A-576198207DA2"),
  },
  {
    ...mockedOrder,
    id: Guid.parse("1C9BC082-2FC4-4AF2-A3FC-606001150BC1"),
  },
  {
    ...mockedOrder,
    id: Guid.parse("1FC6D558-113E-47AE-9311-7E1203FA5EE3"),
  },
];
