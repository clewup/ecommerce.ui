import { Guid } from "guid-typescript";

export interface IUser {
  id: Guid;
  firstName: string;
  lastName: string;
  email: string;

  lineOne: string;
  lineTwo: string;
  lineThree: string;
  postcode: string;
  city: string;
  county: string;
  country: string;
}
