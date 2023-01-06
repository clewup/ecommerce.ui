import * as Yup from "yup";

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string().required("Required"),
});
