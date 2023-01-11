import { Guid } from "guid-typescript";
import { IDiscount } from "./IDiscount";

export interface IPromotion {
  id: Guid;
  name: string;
  description: string;
  startDate: string | null;
  endDate: string | null;
  discountId?: Guid;
  discount?: IDiscount;
}
