import "./checkout-form.scss";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import useCheckout from "../../../hooks/useCheckout";
import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";
import BillingDetails from "./BillingDetails/BillingDetails";
import PurchaseComplete from "./PurchaseComplete/PurchaseComplete";

const CheckoutForm = () => {
  const { initialValues } = useCheckout();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  const handleCheckout = (values: FormikValues) => {};

  return (
    <div id={"checkout-form"}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Delivery" />
        <Tab label="Billing" />
        <Tab label="Complete" disabled />
      </Tabs>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleCheckout(values)}
      >
        {(formik: FormikProps<FormikValues>) => {
          return (
            <Form>
              {tabIndex === 0 && (
                <DeliveryDetails formik={formik} setTabIndex={setTabIndex} />
              )}
              {tabIndex === 1 && (
                <BillingDetails formik={formik} setTabIndex={setTabIndex} />
              )}
              {tabIndex === 2 && <PurchaseComplete />}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default CheckoutForm;
