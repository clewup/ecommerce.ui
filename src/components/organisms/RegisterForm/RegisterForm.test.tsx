import { screen, waitFor } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";

describe("RegisterForm", () => {
  it("should render the component with the expected fields and values", () => {
    renderHelper(
      <RegisterForm isLoading={false} error={null} registerUser={jest.fn()} />
    );

    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
  });

  it("should register the user on button click", () => {
    const mockedRegisterUser = jest.fn();
    renderHelper(
      <RegisterForm
        isLoading={false}
        error={null}
        registerUser={mockedRegisterUser}
      />
    );

    userEvent.type(
      screen.getByPlaceholderText("First Name"),
      "USER_FIRST_NAME"
    );
    userEvent.type(screen.getByPlaceholderText("Last Name"), "USER_LAST_NAME");
    userEvent.type(screen.getByPlaceholderText("Email"), "USER_EMAIL");
    userEvent.type(screen.getByPlaceholderText("Password"), "USER_PASSWORD");
    userEvent.type(
      screen.getByPlaceholderText("Confirm Password"),
      "USER_PASSWORD"
    );

    userEvent.click(
      screen.getByText("Register", { selector: 'button[type="submit"]' })
    );

    waitFor(() => {
      expect(mockedRegisterUser).toHaveBeenCalled();
    });
  });
});
