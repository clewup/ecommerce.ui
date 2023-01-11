import { Field, Form, Formik, FormikProps } from "formik";
import {
  promotionInitialValues,
  promotionValidationSchema,
} from "./utils/schema";
import usePromotion from "../../../hooks/usePromotion";
import Input from "../../atoms/Input/Input";
import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import "./promotion-form.scss";
import TextArea from "../../atoms/TextArea/TextArea";
import Subheading from "../../atoms/Subheading/Subheading";
import AppError from "../../molecules/AppError/AppError";
import { Moment } from "moment";
import DatePicker from "../../atoms/DatePicker/DatePicker";
import Toggle from "../../atoms/Toggle/Toggle";
import { IPromotion } from "../../../interfaces/IPromotion";
import {
  formatDateRangeText,
  formatDiscountSelectOptions,
} from "./utils/formatters";
import Text from "../../atoms/Text/Text";
import Select from "../../atoms/Select/Select";
import useDiscount from "../../../hooks/useDiscount";
import { textSize } from "../../../enums/typography";
import Loader from "../../atoms/Loader/Loader";

interface IProps {
  selectedPromotion?: IPromotion;
}

const PromotionForm: React.FC<IProps> = ({ selectedPromotion }) => {
  const formRef = useRef<FormikProps<IPromotion> | null>(null);
  const { isLoading, error, createPromotion, updatePromotion } = usePromotion();
  const { discounts, getDiscounts } = useDiscount();

  useEffect(() => {
    getDiscounts();
  }, []);

  const handleDateChange = (field: string, value: Date | null) => {
    let formattedDate = value;

    if (field === "startDate" && value) {
      formattedDate = new Date(value?.setHours(0, 0, 0, 0));
    }
    if (field === "endDate" && value) {
      formattedDate = new Date(value?.setHours(23, 59, 59, 999));
    }

    formRef.current?.setFieldValue(field, formattedDate);
  };

  const handleToggle = (field: string, isChecked: boolean) => {
    if (isChecked) {
      formRef.current?.setFieldValue(field, null);
    }
    if (!isChecked) {
      formRef.current?.setFieldValue(field, new Date());
    }
  };

  if (error) return <AppError error={error} />;

  return (
    <Formik
      initialValues={selectedPromotion ?? promotionInitialValues}
      validationSchema={promotionValidationSchema}
      onSubmit={(values) =>
        selectedPromotion ? updatePromotion(values) : createPromotion(values)
      }
      innerRef={formRef}
    >
      {(formik) => {
        return (
          <Form id={"promotion-form"}>
            {isLoading ? (
              <div className={"promotion-form-loader"}>
                <Loader />
              </div>
            ) : (
              <>
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
                    disabled={!formik.values.startDate}
                  />

                  <Field
                    name={"startDate"}
                    label={"Any"}
                    isChecked={!formik.values.startDate}
                    onClick={(e: any) =>
                      handleToggle("startDate", e.target.checked)
                    }
                    component={Toggle}
                  />

                  <Field
                    name={"endDate"}
                    component={DatePicker}
                    label={"End Date"}
                    onChange={(value: Moment) =>
                      handleDateChange("endDate", value.toDate())
                    }
                    value={formik.values.endDate}
                    disabled={!formik.values.endDate}
                  />

                  <Field
                    name={"startDate"}
                    label={"Any"}
                    isChecked={!formik.values.endDate}
                    onClick={(e: any) =>
                      handleToggle("endDate", e.target.checked)
                    }
                    component={Toggle}
                  />
                </div>

                <Field
                  name={"discountId"}
                  label={"Discount"}
                  options={formatDiscountSelectOptions(discounts)}
                  component={Select}
                  onChange={formik.handleChange}
                />

                <Text className={"date-range-text"} size={textSize.LARGE} bold>
                  {formatDateRangeText(
                    formik.values.startDate
                      ? new Date(formik.values.startDate)
                      : null,
                    formik.values.endDate
                      ? new Date(formik.values.endDate)
                      : null
                  )}
                </Text>

                <div className={"promotion-actions"}>
                  <Button
                    size={"large"}
                    type={"submit"}
                    variant={"contained"}
                    color={"success"}
                    disabled={!formik.isValid || !formik.dirty}
                  >
                    Save
                  </Button>
                </div>
              </>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};
export default PromotionForm;
