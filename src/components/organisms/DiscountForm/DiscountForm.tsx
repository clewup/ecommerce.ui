import { Field, Form, Formik, FormikProps } from "formik";
import {
  discountInitialValues,
  discountValidationSchema,
} from "./utils/schema";
import Input from "../../atoms/Input/Input";
import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import "./discount-form.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import AppError from "../../molecules/AppError/AppError";
import useDiscount from "../../../hooks/useDiscount";
import { IDiscount } from "../../../interfaces/IDiscount";

const DiscountForm = () => {
  const formRef = useRef<FormikProps<IDiscount> | null>(null);
  const { discount, isLoading, error, createDiscount } = useDiscount();

  if (error) return <AppError error={error} />;

  return (
    <Formik
      initialValues={discountInitialValues}
      validationSchema={discountValidationSchema}
      onSubmit={(values) => createDiscount(values)}
      innerRef={formRef}
    >
      {(formik) => {
        return (
          <Form id={"discount-form"}>
            <Subheading>Add Discount</Subheading>
            <Field
              name={"name"}
              component={Input}
              label={"Name"}
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <Field
              name={"percentage"}
              component={Input}
              label={"Percentage"}
              onChange={formik.handleChange}
              value={formik.values.percentage}
            />

            <div className={"discount-actions"}>
              <Button
                size={"large"}
                type={"submit"}
                variant={"contained"}
                color={"success"}
                disabled={!formik.isValid || !formik.dirty}
              >
                Add Discount
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default DiscountForm;
