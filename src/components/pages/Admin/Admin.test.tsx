import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Admin from "./Admin";
import renderHelper, { mockedAuthContext } from "../../../utils/renderHelper";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Admin", () => {
  it("should render the app error if not developer or employee", () => {
    renderHelper(<Admin />);

    expect(
      screen.getByText("You do not have permission to view this page.")
    ).toBeInTheDocument();
  });

  it("should navigate to the login page if not logged in", () => {
    mockedAuthContext.isAuthenticated = false;
    renderHelper(<Admin />);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });

  it("should render the component if developer", () => {
    mockedAuthContext.role = "Developer";
    renderHelper(<Admin />);

    expect(screen.getByText("Add Product")).toBeInTheDocument();
  });

  it("should render the component if employee", () => {
    mockedAuthContext.role = "Employee";
    renderHelper(<Admin />);

    expect(screen.getByText("Add Product")).toBeInTheDocument();
  });

  it("should render the tabs", () => {
    mockedAuthContext.role = "Developer";
    renderHelper(<Admin />);

    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });
});
