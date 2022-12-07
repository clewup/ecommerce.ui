import { Guid } from "guid-typescript";
import { IUser } from "./IUser";
import { ICart } from "./ICart";

export interface IOrder {
  id: Guid;
  user: IUser;
  cart: ICart;
  orderDate: Date;
}
