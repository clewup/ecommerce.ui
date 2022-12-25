import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";
import { mockedAuthContext } from "../../../data/mockData/authContextData";
import React from "react";
import Account from "./Account";
import { fireEvent, render } from "@testing-library/react";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Account", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Account />
        </AuthContext.Provider>
      </Router>
    );
    const component = container.querySelector("#account");

    expect(component).toBeInTheDocument();
  });

  it("should navigate to the login page if not logged in", () => {
    const { container } = render(
      <Router>
        <Account />
      </Router>
    );

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });

  it("should render the account form tab by default", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Account />
        </AuthContext.Provider>
      </Router>
    );
    const accountForm = container.querySelector("#account-form");
    const accountOrders = container.querySelector("#account-orders");

    expect(accountForm).toBeInTheDocument();
    expect(accountOrders).not.toBeInTheDocument();
  });

  it("should render the tabs", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Account />
        </AuthContext.Provider>
      </Router>
    );
    const tabs = container.querySelector('[role="tablist"]');

    expect(tabs).toBeInTheDocument();
  });

  it("should update the tab index on tab click", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Account />
        </AuthContext.Provider>
      </Router>
    );
    const tabs = container.querySelectorAll('[role="tab"]');
    const ordersTab = tabs[1] as Element;

    fireEvent.click(ordersTab);

    const accountForm = container.querySelector("#account-form");
    const accountOrders = container.querySelector("#account-orders");

    expect(accountOrders).toBeInTheDocument();
    expect(accountForm).not.toBeInTheDocument();
  });
});
