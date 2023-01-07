import Register from "./Register";
import renderHelper from "../../../utils/renderHelper";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

// TODO: Extend coverage

describe("Register", () => {
  it("should render the component with the expected values", () => {});

  it("should navigate to the home page on register", () => {
    renderHelper(<Register />);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });
});
