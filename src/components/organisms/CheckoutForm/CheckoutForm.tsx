import "./checkout-form.scss";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import useCheckout from "../../../hooks/useCheckout";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";
import BillingDetails from "./BillingDetails/BillingDetails";
import PurchaseComplete from "./PurchaseComplete/PurchaseComplete";
import ErrorMessage from "../../molecules/ErrorMessage/ErrorMessage";

const CheckoutForm = () => {
  const { initialValues, submitCheckout, order, isLoading, error } =
    useCheckout();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  useEffect(() => {
    if (order) {
      setTabIndex(2);
    }
  }, [order]);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div id={"checkout-form"}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Delivery" />
        <Tab label="Billing" />
        <Tab label="Complete" disabled={!order} />
      </Tabs>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          submitCheckout(values);
        }}
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
              {tabIndex === 2 && <PurchaseComplete order={order} />}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default CheckoutForm;
