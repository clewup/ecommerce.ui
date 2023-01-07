import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import BillingDetails from "./BillingDetails";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import { checkoutInitialValues } from "../../organisms/CheckoutForm/utils/schema";

const mockedSetTabIndex = jest.fn();
const mockedOnSubmit = jest.fn();

describe("BillingDetails", () => {
  it("should render the component with the expected fields", () => {
    renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );

    expect(
      screen.getByRole("textbox", { name: "Card Number" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Expiry Month" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Expiry Year" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "CVC" })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "controlled" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("COMPLETE PURCHASE", {
        selector: 'button[type="submit"]',
      })
    );
  });

  it("should pre populate the fields", () => {
    renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );

    expect(screen.getByRole("textbox", { name: "Card Number" })).toHaveValue(
      "1234-5678-9101-1121"
    );
    expect(screen.getByRole("textbox", { name: "Expiry Month" })).toHaveValue(
      "12"
    );
    expect(screen.getByRole("textbox", { name: "Expiry Year" })).toHaveValue(
      "34"
    );
    expect(screen.getByRole("textbox", { name: "CVC" })).toHaveValue("567");
    expect(
      screen.getByRole("checkbox", { name: "controlled" })
    ).toHaveAttribute("checked");
  });

  it("should submit the form on complete purchase button click", () => {
    renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );

    userEvent.click(
      screen.getByText("COMPLETE PURCHASE", {
        selector: 'button[type="submit"]',
      })
    );

    waitFor(() => expect(mockedOnSubmit).toHaveBeenCalled());
  });

  it("should update the tab index on complete purchase button click", () => {
    renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );

    userEvent.click(
      screen.getByText("COMPLETE PURCHASE", {
        selector: 'button[type="submit"]',
      })
    );

    expect(mockedSetTabIndex).toHaveBeenCalled();
  });
});
