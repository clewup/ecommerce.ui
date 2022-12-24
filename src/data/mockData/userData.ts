import { IUser } from "../../types/IUser";
import { Guid } from "guid-typescript";

export const mockedUser: IUser = {
  city: "USER_CITY",
  country: "USER_COUNTRY",
  county: "USER_COUNTY",
  email: "USER_EMAIL",
  firstName: "USER_FIRST_NAME",
  id: Guid.parse("12345"),
  lastName: "USER_LAST_NAME",
  lineOne: "USER_LINE_ONE",
  lineThree: "USER_LINE_THREE",
  lineTwo: "USER_LINE_TWO",
  postcode: "USER_POSTCODE",
};
