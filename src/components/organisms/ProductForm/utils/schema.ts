import { IProduct, ISize } from "../../../../interfaces/IProduct";
import { productSizes } from "../../../../enums/productSizes";
import { createGuid } from "../../../../utils/createGuid";
import * as Yup from "yup";

const sizeInitialValues: ISize[] = [];
Object.values(productSizes).forEach((size) => {
  sizeInitialValues.push({
    size: size,
    stock: 0,
  });
});

export const productInitialValues: IProduct = {
  id: createGuid(),
  name: "",
  description: "",
  color: "",
  images: [],

  category: "",
  subcategory: "",
  range: "",

  oneSize: false,
  sizes: sizeInitialValues,
  price: 0,
  discount: 0,
};

export const productValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  range: Yup.string().required("Required"),
  color: Yup.string().required("Required"),
  sizes: Yup.array().of(
    Yup.object().shape({
      size: Yup.string(),
      stock: Yup.number()
        .integer("Must be a whole number")
        .positive("Must be greater than 0")
        .required("Required"),
    })
  ),
  price: Yup.number()
    .positive("Must be greater than 0")
    .test("is-decimal", "Maximum two decimal places", (value: any) => {
      if (value !== undefined) {
        return /^[0-9]*(\.[0-9]{0,2})?$/.test(value);
      }
      return true;
    })
    .required("Required"),
  discount: Yup.number()
    .moreThan(0, "Must be 0 or greater")
    .lessThan(75, "Must be less than 75")
    .test("is-decimal", "Maximum two decimal places", (value: any) => {
      if (value !== undefined) {
        return /^[0-9]*(\.[0-9]{0,2})?$/.test(value);
      }
      return true;
    })
    .required("Required"),
});