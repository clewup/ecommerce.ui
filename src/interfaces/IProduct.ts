import { Guid } from "guid-typescript";

export interface IProduct {
  id: Guid;
  name: string;
  description: string;
  color: string;
  images: string[];
  category: string;
  subcategory: string;
  range: string;
  size: string;
  stock: number;
  price: number;
  discount: number;
  discountedPrice?: number;
  totalSavings?: number;
}
