import Subheading, {
  subheadingSize,
} from "../../../atoms/Subheading/Subheading";
import { Field, FormikProps, FormikValues } from "formik";
import Input from "../../../atoms/Input/Input";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import { Button } from "@mui/material";
import React from "react";

interface IProps {
  formik: FormikProps<FormikValues>;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BillingDetails: React.FC<IProps> = ({ formik, setTabIndex }) => {
  return (
    <>
      <Subheading size={subheadingSize.SMALL}>Billing Details</Subheading>

      <div className={"checkout-form-group"}>
        <Field
          name={"cardNumber"}
          component={Input}
          label={"Card Number"}
          onChange={formik.handleChange}
          value={formik.values.cardNumber}
          disabled
        />
      </div>

      <div className={"checkout-form-group"}>
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
      </div>

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
          onClick={() => setTabIndex(1)}
        >
          COMPLETE PURCHASE
        </Button>
      </div>
    </>
  );
};
export default BillingDetails;
