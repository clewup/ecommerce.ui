import "./checkout.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import { Field, Form, Formik, FormikProps, FormikValues } from "formik";
import useCheckout from "../../../hooks/useCheckout";
import Input from "../../atoms/Input/Input";
import React from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";

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
              <Subheading>Checkout</Subheading>
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
              <Field
                name={"cardNumber"}
                component={Input}
                label={"Card Number"}
                onChange={formik.handleChange}
                value={formik.values.cardNumber}
              />
              <Field
                name={"expiryMonth"}
                component={Input}
                label={"Expiry Month"}
                onChange={formik.handleChange}
                value={formik.values.expiryMonth}
              />
              <Field
                name={"expiryYear"}
                component={Input}
                label={"Expiry Year"}
                onChange={formik.handleChange}
                value={formik.values.expiryYear}
              />
              <Field
                name={"cvc"}
                component={Input}
                label={"CVC"}
                onChange={formik.handleChange}
                value={formik.values.cvc}
              />
              <Checkbox
                label={"Billing address is the same as shipping address."}
                value={true}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Checkout;
