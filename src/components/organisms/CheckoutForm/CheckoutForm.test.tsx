import { fireEvent, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { mockedUseCheckout } from "../../../data/mockData/useCheckoutData";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";
import { mockedAuthContext } from "../../../data/mockData/authContextData";
import Account from "../../pages/Account/Account";
import React from "react";

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
});
