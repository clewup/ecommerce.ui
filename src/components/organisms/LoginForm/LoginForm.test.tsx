import { screen, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";

const mockedUseLogin = {
  isLoading: false,
  error: null,
  loginUser: jest.fn(),
};

jest.mock("../../../hooks/useLogin", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseLogin;
    },
  };
});

describe("LoginForm", () => {
  it("should render the component with the expected fields and values", () => {
    renderHelper(
      <LoginForm
        isLoading={mockedUseLogin.isLoading}
        error={mockedUseLogin.error}
        loginUser={mockedUseLogin.loginUser}
      />
    );

    expect(screen.getByPlaceholderText("Email")).toHaveValue("");
    expect(screen.getByPlaceholderText("Password")).toHaveValue("");
    expect(
      screen.getByText("Register", { selector: 'button[type="button"]' })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Login", { selector: 'button[type="submit"]' })
    ).toBeInTheDocument();
  });

  it("should login the user on button click", () => {
    renderHelper(
      <LoginForm
        isLoading={mockedUseLogin.isLoading}
        error={mockedUseLogin.error}
        loginUser={mockedUseLogin.loginUser}
      />
    );

    userEvent.type(screen.getByPlaceholderText("Email"), "USER_EMAIL");
    userEvent.type(screen.getByPlaceholderText("Password"), "USER_PASSWORD");
    userEvent.click(
      screen.getByText("Login", { selector: 'button[type="submit"]' })
    );

    waitFor(() => expect(mockedUseLogin.loginUser).toHaveBeenCalled());
  });

  it("should display an error message if incorrect credentials", () => {
    // @ts-ignore
    mockedUseLogin.error = {
      code: "ERROR_CODE",
      message: "ERROR_MESSAGE",
      response: { data: "CUSTOM_ERROR_MESSAGE" },
    };

    renderHelper(
      <LoginForm
        isLoading={mockedUseLogin.isLoading}
        error={mockedUseLogin.error}
        loginUser={mockedUseLogin.loginUser}
      />
    );

    expect(screen.getByText("CUSTOM_ERROR_MESSAGE")).toBeInTheDocument();
  });
});
