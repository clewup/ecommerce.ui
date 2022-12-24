import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Formik } from "formik";
import RegisterForm from "./RegisterForm";
import { initialRegisterValues } from "../../../types/IRegister";
import userEvent from "@testing-library/user-event";

const mockedOnSubmit = jest.fn();

describe("RegisterForm", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <Formik initialValues={initialRegisterValues} onSubmit={mockedOnSubmit}>
          {(formik) => {
            return (
              <RegisterForm formik={formik} isLoading={false} error={null} />
            );
          }}
        </Formik>
      </Router>
    );
    const component = container.querySelector("#register-form") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should register the user on button click", () => {
    const { container } = render(
      <Router>
        <Formik initialValues={initialRegisterValues} onSubmit={mockedOnSubmit}>
          {(formik) => {
            return (
              <RegisterForm formik={formik} isLoading={false} error={null} />
            );
          }}
        </Formik>
      </Router>
    );
    const firstName = container.querySelector('[name="firstName"]') as Element;
    const lastName = container.querySelector('[name="lastName"]') as Element;
    const email = container.querySelector('[name="email"]') as Element;
    const password = container.querySelector('[name="password"]') as Element;
    const confirmPassword = container.querySelector(
      '[name="confirmPassword"]'
    ) as Element;
    const button = container.querySelector('[type="submit"]') as Element;

    act(() => {
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
      waitFor(() => userEvent.click(button));
    });

    waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
    });
  });
});
