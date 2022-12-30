import "./billing-details.scss";
import Subheading from "../../../atoms/Subheading/Subheading";
import { Field, FormikProps } from "formik";
import Input from "../../../atoms/Input/Input";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import { Button } from "@mui/material";
import React from "react";
import { ICheckoutFormValues } from "../../../../types/IOrder";

interface IProps {
  formik: FormikProps<ICheckoutFormValues>;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BillingDetails: React.FC<IProps> = ({ formik, setTabIndex }) => {
  return (
    <div id={"billing-details"}>
      <Field
        name={"cardNumber"}
        component={Input}
        label={"Card Number"}
        onChange={formik.handleChange}
        value={formik.values.cardNumber}
        disabled
      />

      <Field
        name={"expiryMonth"}
        component={Input}
        label={"Expiry Month"}
        onChange={formik.handleChange}
        value={formik.values.expiryMonth}
        disabled
      />

      <Field
        name={"expiryYear"}
        component={Input}
        label={"Expiry Year"}
        onChange={formik.handleChange}
        value={formik.values.expiryYear}
        disabled
      />

      <Field
        name={"cvc"}
        component={Input}
        label={"CVC"}
        onChange={formik.handleChange}
        value={formik.values.cvc}
        disabled
      />

      <div className={"billing-address"}>
        <Checkbox
          label={"Billing address is the same as shipping address."}
          value={true}
        />
      </div>

      <div className={"checkout-action-buttons"}>
        <Button
          size={"large"}
          type={"submit"}
          variant={"contained"}
          color={"success"}
          disabled={!formik.isValid}
          onClick={() => setTabIndex(1)}
        >
          COMPLETE PURCHASE
        </Button>
      </div>
    </div>
  );
};
export default BillingDetails;
