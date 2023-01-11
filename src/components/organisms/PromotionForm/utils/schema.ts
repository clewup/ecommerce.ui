import * as Yup from "yup";
import { IPromotion } from "../../../../interfaces/IPromotion";
import { createGuid } from "../../../../utils/createGuid";

export const promotionInitialValues: IPromotion = {
  id: createGuid(),
  name: "",
  description: "",
  startDate: null,
  endDate: null,
  discountId: undefined,
};

export const promotionValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});
