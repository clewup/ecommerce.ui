import { fireEvent, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { mockedUseCheckout } from "../../../data/mockData/useCheckoutData";
import React from "react";
import { mockedError } from "../../../data/mockData/errorData";

jest.mock("../../../hooks/useCheckout", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseCheckout;
    },
  };
});

describe("CheckoutForm", () => {
  it("should render the component", () => {
    const { container } = render(<CheckoutForm />);
    const component = container.querySelector("#checkout-form") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the tabs", () => {
    const { container } = render(<CheckoutForm />);
    const tabs = container.querySelector('[role="tablist"]');

    expect(tabs).toBeInTheDocument();
  });

  it("should update the tab index on tab click", () => {
    const { container } = render(<CheckoutForm />);
    const tabs = container.querySelectorAll('[role="tab"]');
    const billingTab = tabs[1] as Element;

    fireEvent.click(billingTab);

    const deliveryDetails = container.querySelector("#delivery-details");
    const billingDetails = container.querySelector("#billing-details");

    expect(billingDetails).toBeInTheDocument();
    expect(deliveryDetails).not.toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseCheckout.error = mockedError;
    const { container } = render(<CheckoutForm />);

    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
