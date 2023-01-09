import { Field, Form, Formik } from "formik";
import { promotionInitialValues } from "./utils/schema";
import usePromotion from "../../../hooks/usePromotion";
import Input from "../../atoms/Input/Input";
import React from "react";
import { Button } from "@mui/material";
import "./promotion-form.scss";
import TextArea from "../../atoms/TextArea/TextArea";
import Subheading from "../../atoms/Subheading/Subheading";
import AppError from "../../molecules/AppError/AppError";

const PromotionForm = () => {
  const { promotion, isLoading, error, createPromotion } = usePromotion();

  if (error) return <AppError error={error} />;

  return (
    <Formik
      initialValues={promotionInitialValues}
      onSubmit={(values) => createPromotion(values)}
    >
      {(formik) => {
        return (
          <Form id={"promotion-form"}>
            <Subheading>Add/Edit Promotion</Subheading>
            <Field
              name={"name"}
              component={Input}
              label={"Name"}
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <Field
              name={"description"}
              component={TextArea}
              label={"Description"}
              onChange={formik.handleChange}
              value={formik.values.description}
            />

            <div className={"promotion-date-range"}>
              <Field
                name={"startDate"}
                component={Input}
                label={"Start Date"}
                onChange={formik.handleChange}
                value={formik.values.startDate}
              />

              <Field
                name={"endDate"}
                component={Input}
                label={"End Date"}
                onChange={formik.handleChange}
                value={formik.values.endDate}
              />
            </div>

            <div className={"promotion-actions"}>
              <Button
                size={"large"}
                type={"submit"}
                variant={"contained"}
                color={"success"}
                disabled={!formik.isValid || !formik.dirty}
              >
                Add Promotion
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default PromotionForm;
