import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";
import {
  mockedAuthContext,
  mockedDeveloperAuthContext,
  mockedEmployeeAuthContext,
} from "../../../data/mockData/authContextData";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Admin from "./Admin";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Admin", () => {
  it("should render the component if developer", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedDeveloperAuthContext}>
          <Admin />
        </AuthContext.Provider>
      </Router>
    );
    const component = container.querySelector("#admin");

    expect(component).toBeInTheDocument();
  });

  it("should render the component if employee", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedEmployeeAuthContext}>
          <Admin />
        </AuthContext.Provider>
      </Router>
    );
    const component = container.querySelector("#admin");

    expect(component).toBeInTheDocument();
  });

  it("should render the app error if not developer or employee", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Admin />
        </AuthContext.Provider>
      </Router>
    );
    const appError = container.querySelector("#app-error");

    expect(appError).toBeInTheDocument();
    expect(appError).toHaveTextContent(
      "You do not have permission to view this page."
    );
  });

  it("should navigate to the login page if not logged in", () => {
    const { container } = render(
      <Router>
        <Admin />
      </Router>
    );

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });

  it("should render the add product tab by default", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedDeveloperAuthContext}>
          <Admin />
        </AuthContext.Provider>
      </Router>
    );
    const addProductForm = container.querySelector("#add-product-form");
    const allOrders = container.querySelector("#all-orders");

    expect(addProductForm).toBeInTheDocument();
    expect(allOrders).not.toBeInTheDocument();
  });

  it("should render the tabs", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedDeveloperAuthContext}>
          <Admin />
        </AuthContext.Provider>
      </Router>
    );
    const tabs = container.querySelector('[role="tablist"]');

    expect(tabs).toBeInTheDocument();
  });

  it("should update the tab index on tab click", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedDeveloperAuthContext}>
          <Admin />
        </AuthContext.Provider>
      </Router>
    );
    const tabs = container.querySelectorAll('[role="tab"]');
    const allOrdersTab = tabs[1] as Element;

    fireEvent.click(allOrdersTab);

    const addProductForm = container.querySelector("#add-product-form");
    const allOrders = container.querySelector("#all-orders");

    expect(allOrders).toBeInTheDocument();
    expect(addProductForm).not.toBeInTheDocument();
  });
});
