import { Guid } from "guid-typescript";
import { IImage } from "./IImage";

export interface IProduct {
  id: Guid;
  name: string;
  images: IImage[];
  description: string;
  category: string;
  color: string;
  stock: number;
  price: number;
  discount: number;
}

export interface ICartProduct extends Omit<IProduct, "stock"> {}
