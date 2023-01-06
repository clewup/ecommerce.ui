import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { mockedUseCheckout } from "../../../data/mockData/useCheckoutData";
import React from "react";
import { mockedError } from "../../../data/mockData/errorData";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";

jest.mock("../../../hooks/useCheckout", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseCheckout;
    },
  };
});

describe("CheckoutForm", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<CheckoutForm />);

    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });

  it("should update the tab index on tab click", () => {
    const { container } = renderHelper(<CheckoutForm />);

    userEvent.click(screen.getAllByRole("tab")[1] as Element);

    expect(container.querySelector("#billing-details")).toBeInTheDocument();
    expect(
      container.querySelector("#delivery-details")
    ).not.toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseCheckout.error = mockedError;
    const { container } = renderHelper(<CheckoutForm />);

    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
