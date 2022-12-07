import Subheading, {
  subheadingSize,
} from "../../../atoms/Subheading/Subheading";
import { Field, FormikProps, FormikValues } from "formik";
import Input from "../../../atoms/Input/Input";
import React from "react";
import { Button } from "@mui/material";

interface IProps {
  formik: FormikProps<FormikValues>;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DeliveryDetails: React.FC<IProps> = ({ formik, setTabIndex }) => {
  return (
    <>
      <Subheading size={subheadingSize.SMALL}>Delivery Details</Subheading>
      <div className={"checkout-form-group"}>
        <Field
          name={"firstName"}
          component={Input}
          label={"First Name"}
          onChange={formik.handleChange}
          value={formik.values.lineOne}
        />
        <Field
          name={"lastName"}
          component={Input}
          label={"Last Name"}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>

      <div className={"checkout-form-group"}>
        <Field
          name={"email"}
          component={Input}
          label={"Email"}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>

      <div className={"checkout-form-group"}>
        <Field
          name={"lineOne"}
          component={Input}
          label={"Line One"}
          onChange={formik.handleChange}
          value={formik.values.lineOne}
        />
      </div>

      <div className={"checkout-form-group"}>
        <Field
          name={"lineTwo"}
          component={Input}
          label={"Line Two"}
          onChange={formik.handleChange}
          value={formik.values.lineTwo}
        />
      </div>

      <div className={"checkout-form-group"}>
        <Field
          name={"lineThree"}
          component={Input}
          label={"Line Three"}
          onChange={formik.handleChange}
          value={formik.values.lineThree}
        />
      </div>

      <div className={"checkout-form-group"}>
        <Field
          name={"postcode"}
          component={Input}
          label={"Postcode"}
          onChange={formik.handleChange}
          value={formik.values.postcode}
        />
        <Field
          name={"city"}
          component={Input}
          label={"City"}
          onChange={formik.handleChange}
          value={formik.values.city}
        />
      </div>

      <div className={"checkout-form-group"}>
        <Field
          name={"county"}
          component={Input}
          label={"County"}
          onChange={formik.handleChange}
          value={formik.values.county}
        />
        <Field
          name={"country"}
          component={Input}
          label={"Country"}
          onChange={formik.handleChange}
          value={formik.values.country}
        />
      </div>

      <div className={"checkout-action-buttons"}>
        <Button
          size={"large"}
          type={"button"}
          variant={"contained"}
          color={"success"}
          onClick={() => setTabIndex(1)}
        >
          CONTINUE
        </Button>
      </div>
    </>
  );
};
export default DeliveryDetails;
