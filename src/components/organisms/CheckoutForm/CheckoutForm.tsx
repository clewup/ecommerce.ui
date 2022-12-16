import "./checkout-form.scss";
import { Form, Formik, FormikProps } from "formik";
import useCheckout from "../../../hooks/useCheckout";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails";
import BillingDetails from "./BillingDetails/BillingDetails";
import PurchaseComplete from "./PurchaseComplete/PurchaseComplete";
import AppError from "../../molecules/AppError/AppError";
import { ICheckoutFormValues } from "../../../types/IOrder";

const CheckoutForm = () => {
  const {
    initialValues,
    validationSchema,
    submitCheckout,
    order,
    isLoading,
    error,
  } = useCheckout();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  useEffect(() => {
    if (order) {
      setTabIndex(2);
    }
  }, [order]);

  console.log(error);
  if (error) return <AppError error={error} />;

  return (
    <div id={"checkout-form"}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Delivery" />
        <Tab label="Billing" />
        <Tab label="Complete" disabled={!order} />
      </Tabs>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submitCheckout(values);
        }}
      >
        {(formik: FormikProps<ICheckoutFormValues>) => {
          return (
            <Form>
              {tabIndex === 0 && (
                <DeliveryDetails formik={formik} setTabIndex={setTabIndex} />
              )}
              {tabIndex === 1 && (
                <BillingDetails formik={formik} setTabIndex={setTabIndex} />
              )}
              {tabIndex === 2 && (
                <PurchaseComplete order={order} isLoading={isLoading} />
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default CheckoutForm;
