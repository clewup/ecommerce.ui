import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import React from "react";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import { mockedOrder } from "../../../types/IOrder";

const mockedUseCheckout = {
  submitCheckout: jest.fn(),
  order: mockedOrder,
  isLoading: false,
  error: null,
};

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
    renderHelper(<CheckoutForm />);

    userEvent.click(screen.getAllByRole("tab")[1] as Element);

    expect(
      screen.getByRole("textbox", { name: "Card Number" })
    ).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseCheckout.error = { code: "ERROR_CODE", message: "ERROR_MESSAGE" };
    renderHelper(<CheckoutForm />);

    expect(screen.getByText("ERROR_CODE")).toBeInTheDocument();
  });
});
