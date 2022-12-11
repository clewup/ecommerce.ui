import { Guid } from "guid-typescript";
import { IProduct } from "./IProduct";

export interface ICart {
  id?: Guid;
  userId: Guid;
  products: IProduct[];
  total: number;
}
