import { Guid } from "guid-typescript";

export interface IStock {
  variant: string;
  count: number;
}

export interface IProduct {
  id: Guid;
  name: string;
  description: string;
  category: string;
  stock: IStock[];
  pricePerUnit: number;
  isDiscounted: boolean;
  discount: number;
}
