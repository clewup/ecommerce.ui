import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";
import { mockedAuthContext } from "../../../data/mockData/authContextData";
import React from "react";
import Account from "./Account";
import { fireEvent, render } from "@testing-library/react";
import renderHelper from "../../../utils/renderHelper";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Account", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<Account />);
    const component = container.querySelector("#account");

    expect(component).toBeInTheDocument();
  });

  it("should navigate to the login page if not logged in", () => {
    mockedAuthContext.isAuthenticated = false;
    const { container } = renderHelper(<Account />);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });

  it("should render the account form tab by default", () => {
    const { container } = renderHelper(<Account />);
    const accountForm = container.querySelector("#account-form");
    const accountOrders = container.querySelector("#account-orders");

    expect(accountForm).toBeInTheDocument();
    expect(accountOrders).not.toBeInTheDocument();
  });

  it("should render the tabs", () => {
    const { container } = renderHelper(<Account />);
    const tabs = container.querySelector('[role="tablist"]');

    expect(tabs).toBeInTheDocument();
  });

  it("should update the tab index on tab click", () => {
    const { container } = renderHelper(<Account />);
    const tabs = container.querySelectorAll('[role="tab"]');
    const ordersTab = tabs[1] as Element;

    fireEvent.click(ordersTab);

    const accountForm = container.querySelector("#account-form");
    const accountOrders = container.querySelector("#account-orders");

    expect(accountOrders).toBeInTheDocument();
    expect(accountForm).not.toBeInTheDocument();
  });
});
