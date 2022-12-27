import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import AccountForm from "./AccountForm";
import { Formik } from "formik";
import { mockedUser } from "data/mockData/userData";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../styles/theme";
import renderHelper from "../../../utils/renderHelper";

const mockedOnSubmit = jest.fn();

type TestElement = Document | Element | Window | Node;
function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe("AccountForm", () => {
  it("should render the component", () => {
    const { container } = renderHelper(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const component = container.querySelector("#account-form") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render with pre populated user information", () => {
    const { container } = renderHelper(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const firstName = container.querySelector('[name="firstName"]') as Element;
    const lastName = container.querySelector('[name="lastName"]') as Element;
    const email = container.querySelector('[name="email"]') as Element;

    expect(firstName).toBeInTheDocument();
    expect(firstName).toHaveValue("USER_FIRST_NAME");
    expect(lastName).toBeInTheDocument();
    expect(lastName).toHaveValue("USER_LAST_NAME");
    expect(email).toBeInTheDocument();
    expect(email).toHaveValue("USER_EMAIL");
  });

  it("should render the inputs disabled if isEditing equals false", () => {
    const { container } = renderHelper(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const firstName = container.querySelector('[name="firstName"]') as Element;
    const lastName = container.querySelector('[name="lastName"]') as Element;
    const email = container.querySelector('[name="email"]') as Element;

    expect(firstName).toBeInTheDocument();
    expect(firstName).toBeDisabled();
    expect(lastName).toBeInTheDocument();
    expect(lastName).toBeDisabled();
    expect(email).toBeInTheDocument();
    expect(email).toBeDisabled();
  });

  it("should enable the inputs when the edit button is clicked", () => {
    const { container } = renderHelper(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const editButton = container.querySelector('[type="button"]') as Element;
    const firstName = container.querySelector('[name="firstName"]') as Element;
    const lastName = container.querySelector('[name="lastName"]') as Element;
    const email = container.querySelector('[name="email"]') as Element;

    fireEvent.click(editButton);

    expect(firstName).toBeInTheDocument();
    expect(firstName).toBeEnabled();
    expect(lastName).toBeInTheDocument();
    expect(lastName).toBeEnabled();
    expect(email).toBeInTheDocument();
    expect(email).toBeEnabled();
  });

  it("should keep the save button disabled when there are no value changes", () => {
    const { container } = renderHelper(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const editButton = container.querySelector('[type="button"]') as Element;
    const saveButton = container.querySelector('[type="submit"]') as Element;

    fireEvent.click(editButton);

    expect(saveButton).toBeDisabled();
  });

  it("should enable the save button when there are value changes", () => {
    const { container } = renderHelper(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const editButton = container.querySelector('[type="button"]') as Element;
    const saveButton = container.querySelector('[type="submit"]') as Element;
    const firstName = container.querySelector('[name="firstName"]') as Element;

    waitFor(() => {
      fireEvent.click(editButton);
    });
    waitFor(() =>
      fireEvent.change(firstName, {
        target: { value: "USER_FIRST_NAME_MORE" },
      })
    );

    expect(hasInputValue(firstName, "USER_FIRST_NAME_MORE")).toBe(true);
    expect(saveButton).toBeEnabled();
  });

  it("should submit the form on save", () => {
    const { container } = renderHelper(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const editButton = container.querySelector('[type="button"]') as Element;
    const saveButton = container.querySelector('[type="submit"]') as Element;
    const firstName = container.querySelector('[name="firstName"]') as Element;

    waitFor(() => fireEvent.click(editButton));
    waitFor(() =>
      fireEvent.change(firstName, {
        target: { value: "USER_FIRST_NAME_MORE" },
      })
    );
    waitFor(() => fireEvent.click(saveButton));

    waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
      expect(mockedOnSubmit).toHaveBeenCalledWith(mockedUser);
    });
  });
});
