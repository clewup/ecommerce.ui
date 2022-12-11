import { Guid } from "guid-typescript";
import { IImage } from "./IImage";

export interface IProduct {
  id: Guid;
  name: string;
  images: IImage[];
  description: string;
  category: string;
  color: string;
  pricePerUnit: number;
  discount: number;
}
