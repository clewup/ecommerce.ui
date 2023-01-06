import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import DeliveryDetails from "./DeliveryDetails";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import { checkoutInitialValues } from "../../organisms/CheckoutForm/utils/schema";

const mockedSetTabIndex = jest.fn();
const mockedOnSubmit = jest.fn();

describe("DeliveryDetails", () => {
  it("should render the component with the expected values", () => {
    const { container } = renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );

    expect(
      screen.getByRole("textbox", { name: "First Name" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Last Name" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Line One" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Line Two" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Line Three" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Postcode" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "City" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "County" })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Country" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("CONTINUE", { selector: 'button[type="button"]' })
    ).toBeInTheDocument();
  });

  it("should pre populate the fields", () => {
    renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );

    expect(screen.getByRole("textbox", { name: "First Name" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "Last Name" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "Email" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "Line One" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "Line Two" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "Line Three" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "Postcode" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "City" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "County" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "Country" })).toHaveValue("");
  });

  it("should update the tab index on continue button click", () => {
    renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );

    userEvent.click(
      screen.getByText("CONTINUE", { selector: 'button[type="button"]' })
    );

    expect(mockedSetTabIndex).toHaveBeenCalled();
  });
});
