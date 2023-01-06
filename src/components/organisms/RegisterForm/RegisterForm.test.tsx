import { fireEvent, render, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import RegisterForm from "./RegisterForm";
import renderHelper from "../../../utils/renderHelper";

const mockedOnSubmit = jest.fn();

describe("RegisterForm", () => {
  it("should render the component", () => {
    const { container } = renderHelper(
      <RegisterForm
        isLoading={false}
        error={null}
        registerUser={mockedOnSubmit}
      />
    );
    const component = container.querySelector("#register-form") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should register the user on button click", () => {
    const { container } = renderHelper(
      <RegisterForm
        isLoading={false}
        error={null}
        registerUser={mockedOnSubmit}
      />
    );
    const firstName = container.querySelector('[name="firstName"]') as Element;
    const lastName = container.querySelector('[name="lastName"]') as Element;
    const email = container.querySelector('[name="email"]') as Element;
    const password = container.querySelector('[name="password"]') as Element;
    const confirmPassword = container.querySelector(
      '[name="confirmPassword"]'
    ) as Element;
    const button = container.querySelector('[type="submit"]') as Element;

    waitFor(() =>
      fireEvent.change(firstName, {
        target: { value: "USER_FIRST_NAME" },
      })
    );
    waitFor(() =>
      fireEvent.change(lastName, {
        target: { value: "USER_LAST_NAME" },
      })
    );
    waitFor(() =>
      fireEvent.change(email, {
        target: { value: "USER_EMAIL" },
      })
    );
    waitFor(() =>
      fireEvent.change(password, {
        target: { value: "USER_PASSWORD" },
      })
    );
    waitFor(() =>
      fireEvent.change(confirmPassword, {
        target: { value: "USER_PASSWORD" },
      })
    );
    waitFor(() => fireEvent.click(button));

    waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
    });
  });
});
