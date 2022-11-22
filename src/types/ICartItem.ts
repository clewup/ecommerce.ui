import { Guid } from "guid-typescript";

export interface ICartItem {
  id: Guid;
  name: string;
  variant: string;
  quantity: number;
  pricePerUnit: number;
  isDiscounted: boolean;
  discount: number;
}
