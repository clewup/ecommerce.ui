import { Guid } from "guid-typescript";
import { IImage } from "./IImage";

export interface ICartItem {
  id: Guid;
  productId: Guid;
  images: IImage[];
  name: string;
  description: string;
  category: string;
  quantity: number;
  pricePerUnit: number;
  discount: number;
}
