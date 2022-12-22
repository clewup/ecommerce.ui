import {
  render,
  act,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import React from "react";
import AccountForm from "./AccountForm";
import { IUser } from "../../../types/IUser";
import { Formik, FormikProps } from "formik";
import { Guid } from "guid-typescript";
import userEvent from "@testing-library/user-event";
import { debug } from "jest-preview";

const mockedOnSubmit = jest.fn();

const mockedUser: IUser = {
  city: "USER_CITY",
  country: "USER_COUNTRY",
  county: "USER_COUNTY",
  email: "USER_EMAIL",
  firstName: "USER_FIRST_NAME",
  id: Guid.parse("12345"),
  lastName: "USER_LAST_NAME",
  lineOne: "USER_LINE_ONE",
  lineThree: "USER_LINE_TWO",
  lineTwo: "USER_LINE_THREE",
  postcode: "USER_POSTCODE",
};

type TestElement = Document | Element | Window | Node;
function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe("AccountForm", () => {
  it("should render the account form", () => {
    const { container } = render(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const form = container.querySelector("#account-form");

    expect(form).toBeInTheDocument();
  });

  it("should render the account form with pre populated user information", () => {
    const { container } = render(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const firstName = container.querySelector('[name="firstName"]');
    const lastName = container.querySelector('[name="lastName"]');
    const email = container.querySelector('[name="email"]');

    expect(firstName).toBeInTheDocument();
    expect(firstName).toHaveValue("USER_FIRST_NAME");
    expect(lastName).toBeInTheDocument();
    expect(lastName).toHaveValue("USER_LAST_NAME");
    expect(email).toBeInTheDocument();
    expect(email).toHaveValue("USER_EMAIL");
  });

  it("should render the account form disabled if isEditing equals false", () => {
    const { container } = render(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const firstName = container.querySelector('[name="firstName"]');
    const lastName = container.querySelector('[name="lastName"]');
    const email = container.querySelector('[name="email"]');

    expect(firstName).toBeInTheDocument();
    expect(firstName).toBeDisabled();
    expect(lastName).toBeInTheDocument();
    expect(lastName).toBeDisabled();
    expect(email).toBeInTheDocument();
    expect(email).toBeDisabled();
  });

  it("should enable the account form when the edit button is clicked", () => {
    const { container } = render(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const editButton = container.querySelector('[type="button"]') as Element;
    const firstName = container.querySelector('[name="firstName"]');
    const lastName = container.querySelector('[name="lastName"]');
    const email = container.querySelector('[name="email"]');

    userEvent.click(editButton);

    expect(firstName).toBeInTheDocument();
    expect(firstName).toBeEnabled();
    expect(lastName).toBeInTheDocument();
    expect(lastName).toBeEnabled();
    expect(email).toBeInTheDocument();
    expect(email).toBeEnabled();
  });

  it("should keep the save button disabled when there are no value changes", () => {
    const { container } = render(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const editButton = container.querySelector('[type="button"]') as Element;
    const saveButton = container.querySelector('[type="submit"]') as Element;

    userEvent.click(editButton);

    expect(saveButton).toBeDisabled();
  });

  it("should enable the save button when there are value changes", () => {
    const { container } = render(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const editButton = container.querySelector('[type="button"]') as Element;
    const saveButton = container.querySelector('[type="submit"]') as Element;
    const firstName = container.querySelector('[name="firstName"]') as Element;

    act(() => {
      waitFor(() => userEvent.click(editButton));
      waitFor(() =>
        fireEvent.change(firstName, {
          target: { value: "USER_FIRST_NAME_MORE" },
        })
      );
    });

    expect(hasInputValue(firstName, "USER_FIRST_NAME_MORE")).toBe(true);
    expect(saveButton).toBeEnabled();
  });

  it("should submit the form on save", () => {
    const { container } = render(
      <Formik initialValues={mockedUser} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <AccountForm formik={formik} user={mockedUser} />;
        }}
      </Formik>
    );

    const editButton = container.querySelector('[type="button"]') as Element;
    const saveButton = container.querySelector('[type="submit"]') as Element;
    const firstName = container.querySelector('[name="firstName"]') as Element;

    act(() => {
      waitFor(() => userEvent.click(editButton));
      waitFor(() =>
        fireEvent.change(firstName, {
          target: { value: "USER_FIRST_NAME_MORE" },
        })
      );
      waitFor(() => userEvent.click(saveButton));
    });

    waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
      expect(mockedOnSubmit).toHaveBeenCalledWith(mockedUser);
    });
  });
});
