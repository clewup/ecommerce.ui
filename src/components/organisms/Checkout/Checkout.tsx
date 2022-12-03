import "./checkout.scss";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import { Field, Form, Formik, FormikProps, FormikValues } from "formik";
import useCheckout from "../../../hooks/useCheckout";
import Input from "../../atoms/Input/Input";
import React from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { Button } from "@mui/material";

interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  email: string;
  lineOne: string;
  lineTwo: string;
  lineThree: string;
  postcode: string;
  city: string;
  county: string;
  country: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}

const Checkout = () => {
  const { initialValues } = useCheckout();

  const handleCheckout = (values: FormikValues) => {};

  return (
    <div id={"checkout"}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleCheckout(values)}
      >
        {(formik: FormikProps<FormikValues>) => {
          return (
            <Form>
              <Subheading size={subheadingSize.SMALL}>
                Delivery Details
              </Subheading>
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

              <Subheading size={subheadingSize.SMALL}>
                Billing Details
              </Subheading>

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
                  type={"submit"}
                  variant={"contained"}
                  color={"success"}
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  CHECKOUT
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Checkout;
