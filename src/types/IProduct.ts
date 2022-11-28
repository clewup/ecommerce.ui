import { Guid } from "guid-typescript";
import { IImage } from "./IImage";

export interface IStock {
  variant: string;
  count: number;
}

export interface IProduct {
  id: Guid;
  images: IImage[];
  name: string;
  description: string;
  category: string;
  stock: IStock[];
  pricePerUnit: number;
  isDiscounted: boolean;
  discount: number;
}
