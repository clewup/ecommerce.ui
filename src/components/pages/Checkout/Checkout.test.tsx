import React from "react";
import Checkout from "./Checkout";
import renderHelper, { mockedAuthContext } from "../../../utils/renderHelper";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Cart", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<Checkout />);
    const component = container.querySelector("#checkout");

    expect(component).toBeInTheDocument();
  });

  it("should navigate to the login page if not logged in", () => {
    mockedAuthContext.isAuthenticated = false;
    const { container } = renderHelper(<Checkout />);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
  });
});
