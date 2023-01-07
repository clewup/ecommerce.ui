import { screen, fireEvent, waitFor, act } from "@testing-library/react";
import React from "react";
import UserForm from "./UserForm";
import renderHelper from "../../../utils/renderHelper";
import { mockedUser } from "types/IUser";
import userEvent from "@testing-library/user-event";

describe("UserForm", () => {
  it("should render the component with the expected fields and values", () => {
    renderHelper(<UserForm user={mockedUser} updateUser={jest.fn()} />);

    expect(screen.getByRole("textbox", { name: "First Name" })).toHaveValue(
      "USER_FIRST_NAME"
    );
    expect(screen.getByRole("textbox", { name: "Last Name" })).toHaveValue(
      "USER_LAST_NAME"
    );
    expect(screen.getByRole("textbox", { name: "Email" })).toHaveValue(
      "USER_EMAIL"
    );
    expect(screen.getByText("USER_LINE_ONE")).toBeInTheDocument();
    expect(screen.getByText("USER_LINE_TWO")).toBeInTheDocument();
    expect(screen.getByText("USER_LINE_THREE")).toBeInTheDocument();
    expect(screen.getByText("USER_POSTCODE")).toBeInTheDocument();
    expect(screen.getByText("USER_CITY")).toBeInTheDocument();
    expect(screen.getByText("USER_COUNTY")).toBeInTheDocument();
    expect(screen.getByText("USER_COUNTRY")).toBeInTheDocument();
  });

  it("should render the inputs disabled if isEditing equals false", () => {
    renderHelper(<UserForm user={mockedUser} updateUser={jest.fn()} />);

    expect(screen.getByRole("textbox", { name: "First Name" })).toBeDisabled();
    expect(screen.getByRole("textbox", { name: "Last Name" })).toBeDisabled();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeDisabled();
  });

  it("should enable the inputs when the edit button is clicked", () => {
    renderHelper(<UserForm user={mockedUser} updateUser={jest.fn()} />);

    userEvent.click(
      screen.getByText("Edit", { selector: 'button[type="button"]' })
    );

    expect(screen.getByRole("textbox", { name: "First Name" })).toBeEnabled();
    expect(screen.getByRole("textbox", { name: "Last Name" })).toBeEnabled();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeEnabled();
  });

  it("should keep the save button disabled when there are no value changes", () => {
    renderHelper(<UserForm user={mockedUser} updateUser={jest.fn()} />);

    userEvent.click(
      screen.getByText("Edit", { selector: 'button[type="button"]' })
    );

    expect(
      screen.getByText("Save", { selector: 'button[type="submit"]' })
    ).toBeDisabled();
  });

  it("should enable the save button when there are value changes", () => {
    renderHelper(<UserForm user={mockedUser} updateUser={jest.fn()} />);

    userEvent.click(
      screen.getByText("Edit", { selector: 'button[type="button"]' })
    );

    userEvent.type(
      screen.getByRole("textbox", { name: "First Name" }),
      "EDITED_FIRST_NAME"
    );

    expect(
      screen.getByText("Save", { selector: 'button[type="submit"]' })
    ).toBeEnabled();
  });

  it("should submit the form on save", () => {
    const mockedUpdateUser = jest.fn();
    renderHelper(<UserForm user={mockedUser} updateUser={mockedUpdateUser} />);

    userEvent.click(
      screen.getByText("Edit", { selector: 'button[type="button"]' })
    );

    userEvent.type(
      screen.getByRole("textbox", { name: "First Name" }),
      "EDITED_FIRST_NAME"
    );

    userEvent.click(
      screen.getByText("Save", { selector: 'button[type="submit"]' })
    );

    waitFor(() => {
      expect(mockedUpdateUser).toHaveBeenCalledWith(mockedUser);
    });
  });
});
