import { Guid } from "guid-typescript";
import { IImage } from "./IImage";

export interface IProduct {
  id?: Guid;
  name: string;
  description: string;
  category: string;
  pricePerUnit: number;
  discount: number;
}
