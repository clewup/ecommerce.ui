import "./checkout-form.scss";
import { Form, Formik, FormikProps } from "formik";
import useCheckout from "../../../hooks/useCheckout";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import DeliveryDetails from "../../molecules/DeliveryDetails/DeliveryDetails";
import BillingDetails from "../../molecules/BillingDetails/BillingDetails";
import PurchaseComplete from "../../molecules/PurchaseComplete/PurchaseComplete";
import AppError from "../../molecules/AppError/AppError";
import {
  checkoutInitialValues,
  checkoutValidationSchema,
} from "./utils/schema";
import { ICheckout } from "../../../interfaces/IOrder";
import Loader from "../../atoms/Loader/Loader";

const CheckoutForm = () => {
  const { submitCheckout, order, isLoading, error } = useCheckout();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  useEffect(() => {
    if (order && order.id) {
      setTabIndex(2);
    }
  }, [order]);

  if (error) return <AppError error={error} />;

  return (
    <div id={"checkout-form"}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Delivery" />
        <Tab label="Billing" />
        <Tab label="Complete" disabled />
      </Tabs>
      {isLoading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={checkoutInitialValues}
          validationSchema={checkoutValidationSchema}
          onSubmit={(values) => {
            submitCheckout(values);
          }}
        >
          {(formik: FormikProps<ICheckout>) => {
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
      )}
    </div>
  );
};
export default CheckoutForm;
