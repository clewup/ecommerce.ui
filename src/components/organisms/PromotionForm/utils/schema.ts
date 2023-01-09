import * as Yup from "yup";
import { IPromotion } from "../../../../interfaces/IPromotion";
import { createGuid } from "../../../../utils/createGuid";

export const promotionInitialValues: IPromotion = {
  id: createGuid(),
  name: "",
  description: "",
  startDate: undefined,
  endDate: undefined,
  discount: undefined,
};

export const promotionValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  startDate: Yup.date().notRequired(),
  endDate: Yup.date().notRequired(),
  discountId: Yup.string().required("Required"),
});
