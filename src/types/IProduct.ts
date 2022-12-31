import { Guid } from "guid-typescript";

export interface IProduct {
  id: Guid;
  name: string;
  images: string[];
  description: string;
  category: string;
  subcategory: string;
  range: string;
  color: string;
  stock: number;
  price: number;
  discount: number;
  discountedPrice?: number;
  totalSavings?: number;
}

export interface ICartProduct extends Omit<IProduct, "stock"> {}
