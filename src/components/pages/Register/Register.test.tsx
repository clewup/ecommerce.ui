import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";
import { mockedAuthContext } from "../../../data/mockData/authContextData";
import Register from "./Register";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Register", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <Register />
      </Router>
    );
    const component = container.querySelector("#register");

    expect(component).toBeInTheDocument();
  });

  it("should navigate to the home page on register", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <Register />
        </AuthContext.Provider>
      </Router>
    );

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });
});
