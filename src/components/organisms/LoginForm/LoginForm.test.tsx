import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Formik } from "formik";
import userEvent from "@testing-library/user-event";
import { initialLoginValues } from "../../../types/ILogin";
import LoginForm from "./LoginForm";

const mockedOnSubmit = jest.fn();

describe("LoginForm", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <Formik initialValues={initialLoginValues} onSubmit={mockedOnSubmit}>
          {(formik) => {
            return <LoginForm formik={formik} isLoading={false} error={null} />;
          }}
        </Formik>
      </Router>
    );
    const component = container.querySelector("#login-form") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should login the user on button click", () => {
    const { container } = render(
      <Router>
        <Formik initialValues={initialLoginValues} onSubmit={mockedOnSubmit}>
          {(formik) => {
            return <LoginForm formik={formik} isLoading={false} error={null} />;
          }}
        </Formik>
      </Router>
    );
    const email = container.querySelector('[name="email"]') as Element;
    const password = container.querySelector('[name="password"]') as Element;
    const button = container.querySelector('[type="submit"]') as Element;

    act(() => {
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
      waitFor(() => userEvent.click(button));
    });

    waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
    });
  });
});
