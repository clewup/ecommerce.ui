import { Guid } from "guid-typescript";

export interface ISize {
  size: string;
  stock: number;
}

export interface IProduct {
  id: Guid;
  name: string;
  description: string;
  color: string;
  images: string[];

  category: string;
  subcategory: string;
  range: string;

  oneSize: boolean;
  sizes: ISize[];

  price: number;
  discount: number;
  discountedPrice?: number;
  totalSavings?: number;
}
