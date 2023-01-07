import Login from "./Login";
import renderHelper from "../../../utils/renderHelper";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

// TODO: Extend coverage

describe("Login", () => {
  it("should render the component with the expected values", () => {});

  it("should navigate to the previous page on login", () => {
    renderHelper(<Login />);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith(-1);
  });
});
