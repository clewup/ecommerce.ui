import { ICartItem } from "./ICartItem";

export interface ICart {
  cartItems: ICartItem[];
  total: number;
}
