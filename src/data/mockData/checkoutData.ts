import { mockedUser } from "./userData";

export const mockedCheckoutInitialValues = {
  firstName: mockedUser.firstName || "",
  lastName: mockedUser.lastName || "",
  email: mockedUser.email || "",
  lineOne: mockedUser.lineOne || "",
  lineTwo: mockedUser.lineTwo || "",
  lineThree: mockedUser.lineThree || "",
  postcode: mockedUser.postcode || "",
  city: mockedUser.city || "",
  county: mockedUser.county || "",
  country: mockedUser.country || "",
  cardNumber: "1234-5678-9101-1121",
  expiryMonth: "12",
  expiryYear: "34",
  cvc: "567",
};
