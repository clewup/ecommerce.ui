import { mockedAuthContext } from "../../../data/mockData/authContextData";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Admin from "./Admin";
import renderHelper from "../../../utils/renderHelper";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Admin", () => {
  it("should render the app error if not developer or employee", () => {
    const { container } = renderHelper(<Admin />);
    const appError = container.querySelector("#app-error");

    expect(appError).toBeInTheDocument();
    expect(appError).toHaveTextContent(
      "You do not have permission to view this page."
    );
  });

  it("should navigate to the login page if not logged in", () => {
    mockedAuthContext.isAuthenticated = false;
    const { container } = renderHelper(<Admin />);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });

  it("should render the component if developer", () => {
    mockedAuthContext.role = "Developer";
    const { container } = renderHelper(<Admin />);
    const component = container.querySelector("#admin");

    expect(component).toBeInTheDocument();
  });

  it("should render the component if employee", () => {
    mockedAuthContext.role = "Employee";
    const { container } = renderHelper(<Admin />);
    const component = container.querySelector("#admin");

    expect(component).toBeInTheDocument();
  });

  it("should render the add product tab by default", () => {
    mockedAuthContext.role = "Developer";
    const { container } = renderHelper(<Admin />);
    const addProductForm = container.querySelector("#add-product-form");
    const allOrders = container.querySelector("#all-orders");

    expect(addProductForm).toBeInTheDocument();
    expect(allOrders).not.toBeInTheDocument();
  });

  it("should render the tabs", () => {
    mockedAuthContext.role = "Developer";
    const { container } = renderHelper(<Admin />);
    const tabs = container.querySelector('[role="tablist"]');

    expect(tabs).toBeInTheDocument();
  });

  it("should update the tab index on tab click", () => {
    mockedAuthContext.role = "Developer";
    const { container } = renderHelper(<Admin />);
    const tabs = container.querySelectorAll('[role="tab"]');
    const allOrdersTab = tabs[1] as Element;

    fireEvent.click(allOrdersTab);

    const addProductForm = container.querySelector("#add-product-form");
    const allOrders = container.querySelector("#all-orders");

    expect(allOrders).toBeInTheDocument();
    expect(addProductForm).not.toBeInTheDocument();
  });
});
