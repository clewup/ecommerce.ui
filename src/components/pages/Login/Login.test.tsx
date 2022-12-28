import { render } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";
import { mockedAuthContext } from "../../../data/mockData/authContextData";
import renderHelper from "../../../utils/renderHelper";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Login", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<Login />);
    const component = container.querySelector("#login");

    expect(component).toBeInTheDocument();
  });

  it("should navigate to the previous page on login", () => {
    const { container } = renderHelper(<Login />);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith(-1);
  });
});
