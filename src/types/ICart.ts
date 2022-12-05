import { ICartItem } from "./ICartItem";
import { Guid } from "guid-typescript";

export interface ICart {
  id: Guid;
  userId: Guid;
  cartItems: ICartItem[];
  total: number;
}
