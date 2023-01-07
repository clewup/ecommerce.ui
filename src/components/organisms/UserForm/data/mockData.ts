import { Guid } from "guid-typescript";
import { IUser } from "../../../../interfaces/IUser";

export const mockedUser: IUser = {
  id: Guid.parse("622D848B-772B-4453-9102-7C17A7873F74"),
  firstName: "USER_FIRST_NAME",
  lastName: "USER_LAST_NAME",
  email: "USER_EMAIL",
  lineOne: "USER_LINE_ONE",
  lineThree: "USER_LINE_THREE",
  lineTwo: "USER_LINE_TWO",
  postcode: "USER_POSTCODE",
  city: "USER_CITY",
  country: "USER_COUNTRY",
  county: "USER_COUNTY",
};
