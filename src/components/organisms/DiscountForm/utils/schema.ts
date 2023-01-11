import * as Yup from "yup";
import { createGuid } from "../../../../utils/createGuid";
import { IDiscount } from "../../../../interfaces/IDiscount";

export const discountInitialValues: IDiscount = {
  id: createGuid(),
  name: "",
  percentage: 0,
};

export const discountValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  percentage: Yup.number().positive().required("Required"),
});
