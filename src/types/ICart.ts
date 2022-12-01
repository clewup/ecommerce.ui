import { ICartItem } from "./ICartItem";
import { IDiscountCode } from "./IDiscountCode";

export interface ICart {
  cartItems: ICartItem[];
  total: number;
  discountCode?: IDiscountCode;
}
