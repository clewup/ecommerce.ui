import { ICartItem } from "./ICartItem";
import { IDiscountCode } from "./IDiscountCode";
import { Guid } from "guid-typescript";

export interface ICart {
  userId: Guid;
  cartItems: ICartItem[];
  total: number;
  discountCode: IDiscountCode | null;
  discountedTotal: number | null;
}
