import { Guid } from "guid-typescript";
import { ICart } from "./ICart";
import { IAddress } from "./IAddress";
import { ICartProduct, IProduct } from "./IProduct";

export interface IOrder {
  id: Guid;
  userId: Guid;
  firstName: string;
  lastName: string;
  email: string;
  deliveryAddress: IAddress;
  products: ICartProduct[];
  total: number;
  discountedTotal?: number;
  totalSavings?: number;
  orderDate: Date;
}

export interface ICheckoutFormValues {
  firstName: string;
  lastName: string;
  email: string;
  lineOne: string;
  lineTwo: string;
  lineThree: string;
  postcode: string;
  city: string;
  county: string;
  country: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}
