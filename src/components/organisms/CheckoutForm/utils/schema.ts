import * as Yup from "yup";
import { ICheckout } from "../../../../interfaces/IOrder";

export const checkoutInitialValues: ICheckout = {
  firstName: "",
  lastName: "",
  email: "",
  lineOne: "",
  lineTwo: "",
  lineThree: "",
  postcode: "",
  city: "",
  county: "",
  country: "",
  cardNumber: "1234-5678-9101-1121",
  expiryMonth: "12",
  expiryYear: "34",
  cvc: "567",
};

export const checkoutValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Must be a valid email").required("Required"),
  lineOne: Yup.string().required("Required"),
  lineTwo: Yup.string(),
  lineThree: Yup.string(),
  postcode: Yup.string()
    .matches(/^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i, "Must be a valid postcode")
    .required("Required"),
  city: Yup.string().required("Required"),
  county: Yup.string(),
  country: Yup.string().required("Required"),
});
