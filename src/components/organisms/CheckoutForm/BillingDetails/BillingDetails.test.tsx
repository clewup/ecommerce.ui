import { fireEvent, render, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import BillingDetails from "./BillingDetails";
import { mockedCheckoutInitialValues } from "../../../../data/mockData/checkoutData";

const mockedSetTabIndex = jest.fn();
const mockedOnSubmit = jest.fn();

describe("BillingDetails", () => {
  it("should render the component", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const component = container.querySelector("#billing-details") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render and pre populate the card number input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const cardNumber = container.querySelector(
      '[name="cardNumber"]'
    ) as Element;

    expect(cardNumber).toBeInTheDocument();
    expect(cardNumber).toHaveValue("1234-5678-9101-1121");
  });

  it("should render and pre populate the expiry month input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const expiryMonth = container.querySelector(
      '[name="expiryMonth"]'
    ) as Element;

    expect(expiryMonth).toBeInTheDocument();
    expect(expiryMonth).toHaveValue("12");
  });

  it("should render and pre populate the expiry year input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const expiryYear = container.querySelector(
      '[name="expiryYear"]'
    ) as Element;

    expect(expiryYear).toBeInTheDocument();
    expect(expiryYear).toHaveValue("34");
  });

  it("should render and pre populate the cvc input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const cvc = container.querySelector('[name="cvc"]') as Element;

    expect(cvc).toBeInTheDocument();
    expect(cvc).toHaveValue("567");
  });

  it("should render and pre populate the billing address checkbox", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const checkbox = container.querySelector('[type="checkbox"]') as Element;

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("checked");
  });

  it("should render the complete purchase button", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const completePurchaseButton = container.querySelector(
      '[type="submit"]'
    ) as Element;

    expect(completePurchaseButton).toBeInTheDocument();
    expect(completePurchaseButton).toHaveTextContent("COMPLETE PURCHASE");
  });

  it("should submit the form on complete purchase button click", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const completePurchaseButton = container.querySelector(
      '[type="submit"]'
    ) as Element;

    fireEvent.click(completePurchaseButton);

    waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
    });
  });

  it("should update the tab index on complete purchase button click", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <BillingDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const completePurchaseButton = container.querySelector(
      '[type="submit"]'
    ) as Element;

    fireEvent.click(completePurchaseButton);

    waitFor(() => {
      expect(mockedSetTabIndex).toHaveBeenCalled();
    });
  });
});
