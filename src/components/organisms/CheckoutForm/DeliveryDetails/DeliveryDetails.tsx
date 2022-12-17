import Subheading, {
  subheadingSize,
} from "../../../atoms/Subheading/Subheading";
import "./delivery-details.scss";
import { Field, FormikProps } from "formik";
import Input from "../../../atoms/Input/Input";
import React from "react";
import { Button } from "@mui/material";
import { ICheckoutFormValues } from "../../../../types/IOrder";

interface IProps {
  formik: FormikProps<ICheckoutFormValues>;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DeliveryDetails: React.FC<IProps> = ({ formik, setTabIndex }) => {
  return (
    <div id={"delivery-details"}>
      <Subheading size={subheadingSize.SMALL}>Delivery Details</Subheading>
      <Field
        name={"firstName"}
        component={Input}
        label={"First Name"}
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <Field
        name={"lastName"}
        component={Input}
        label={"Last Name"}
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <Field
        name={"email"}
        component={Input}
        label={"Email"}
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Field
        name={"lineOne"}
        component={Input}
        label={"Line One"}
        onChange={formik.handleChange}
        value={formik.values.lineOne}
      />

      <Field
        name={"lineTwo"}
        component={Input}
        label={"Line Two"}
        onChange={formik.handleChange}
        value={formik.values.lineTwo}
      />

      <Field
        name={"lineThree"}
        component={Input}
        label={"Line Three"}
        onChange={formik.handleChange}
        value={formik.values.lineThree}
      />

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
    </div>
  );
};
export default DeliveryDetails;
