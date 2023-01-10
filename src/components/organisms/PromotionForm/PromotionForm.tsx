import { Field, Form, Formik, FormikProps } from "formik";
import { promotionInitialValues } from "./utils/schema";
import usePromotion from "../../../hooks/usePromotion";
import Input from "../../atoms/Input/Input";
import React, { SyntheticEvent, useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./promotion-form.scss";
import TextArea from "../../atoms/TextArea/TextArea";
import Subheading from "../../atoms/Subheading/Subheading";
import AppError from "../../molecules/AppError/AppError";
import moment, { Moment } from "moment";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import DatePicker from "../../atoms/DatePicker/DatePicker";
import Toggle from "../../atoms/Toggle/Toggle";
import { IPromotion } from "../../../interfaces/IPromotion";

const PromotionForm = () => {
  const formRef = useRef<FormikProps<IPromotion> | null>(null);
  const { promotion, isLoading, error, createPromotion } = usePromotion();

  if (error) return <AppError error={error} />;

  const handleDateChange = (field: string, value: Date | null) => {
    formRef.current?.setFieldValue(field, value);
  };

  const handleToggle = (field: string, isChecked: boolean) => {
    if (isChecked) {
      formRef.current?.setFieldValue(field, null);
    }
    if (!isChecked) {
      formRef.current?.setFieldValue(field, new Date());
    }
  };

  return (
    <Formik
      initialValues={promotionInitialValues}
      onSubmit={(values) => createPromotion(values)}
      innerRef={formRef}
    >
      {(formik) => {
        console.log(formik.values);
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
                component={DatePicker}
                label={"Start Date"}
                onChange={(value: Moment) =>
                  handleDateChange("startDate", value.toDate())
                }
                value={formik.values.startDate}
                disabled={formik.values.startDate === null}
              />

              <Field
                name={"startDate"}
                component={Toggle}
                label={"Any"}
                onClick={(e: any) =>
                  handleToggle("startDate", e.target.checked)
                }
              />

              <Field
                name={"endDate"}
                component={DatePicker}
                label={"End Date"}
                onChange={(value: Moment) =>
                  handleDateChange("endDate", value.toDate())
                }
                value={formik.values.endDate}
                disabled={formik.values.endDate === null}
              />

              <Field
                name={"startDate"}
                component={Toggle}
                label={"Any"}
                onClick={(e: any) => handleToggle("endDate", e.target.checked)}
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
