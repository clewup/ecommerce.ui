import React from "react";
import Checkout from "./Checkout";
import renderHelper, { mockedAuthContext } from "../../../utils/renderHelper";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

// TODO: Extend coverage

describe("Checkout", () => {
  it("should render the component with the expected values", () => {});

  it("should navigate to the login page if not logged in", () => {
    mockedAuthContext.isAuthenticated = false;
    renderHelper(<Checkout />);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });
});
