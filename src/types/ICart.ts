import { Guid } from "guid-typescript";
import { ICartProduct } from "./IProduct";

export interface ICart {
  id: Guid;
  userId: Guid;
  products: ICartProduct[];
  total: number;
  discountedTotal?: number;
  totalSavings?: number;
}
