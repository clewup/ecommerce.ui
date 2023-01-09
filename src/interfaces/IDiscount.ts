import { Guid } from "guid-typescript";

export interface IDiscount {
  id: Guid;
  name: string;
  percentage: number;
}
