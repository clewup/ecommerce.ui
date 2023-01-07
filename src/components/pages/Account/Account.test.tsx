import React from "react";
import Account from "./Account";
import { screen } from "@testing-library/react";
import renderHelper, { mockedAuthContext } from "../../../utils/renderHelper";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Account", () => {
  it("should render the component in the expected initial state", () => {
    renderHelper(<Account />);

    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "First Name" })
    ).toBeInTheDocument();
  });

  it("should navigate to the login page if not logged in", () => {
    mockedAuthContext.isAuthenticated = false;
    renderHelper(<Account />);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });
});
