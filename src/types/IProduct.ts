import { Guid } from "guid-typescript";
import { IImage } from "./IImage";

export interface IProduct {
  id?: Guid;
  images: IImage[];
  name: string;
  description: string;
  category: string;
  pricePerUnit: number;
  discount: number;
}
