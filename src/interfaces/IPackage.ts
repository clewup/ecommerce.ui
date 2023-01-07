import { Guid } from "guid-typescript";
import { IOrder } from "./IOrder";

export interface IPackage {
  trackingNumber: Guid;
  shippedDate: Date;
  arrivalDate: Date;
  order: IOrder;
}
