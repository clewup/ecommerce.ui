import { Guid } from "guid-typescript";
import { IDiscount } from "./IDiscount";

export interface IPromotion {
  id: Guid;
  name: string;
  description: string;
  startDate?: Date | null;
  endDate?: Date | null;
  discount?: IDiscount;
}
