import { fireEvent, render, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import { mockedCheckoutInitialValues } from "../../../../data/mockData/checkoutData";
import DeliveryDetails from "./DeliveryDetails";

const mockedSetTabIndex = jest.fn();
const mockedOnSubmit = jest.fn();

describe("DeliveryDetails", () => {
  it("should render the component", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const component = container.querySelector("#delivery-details") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render and pre populate the first name input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const firstName = container.querySelector('[name="firstName"]') as Element;

    expect(firstName).toBeInTheDocument();
    expect(firstName).toHaveValue("USER_FIRST_NAME");
  });

  it("should render and pre populate the last name input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const lastName = container.querySelector('[name="lastName"]') as Element;

    expect(lastName).toBeInTheDocument();
    expect(lastName).toHaveValue("USER_LAST_NAME");
  });

  it("should render and pre populate the email input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const email = container.querySelector('[name="email"]') as Element;

    expect(email).toBeInTheDocument();
    expect(email).toHaveValue("USER_EMAIL");
  });

  it("should render and pre populate the line one input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const lineOne = container.querySelector('[name="lineOne"]') as Element;

    expect(lineOne).toBeInTheDocument();
    expect(lineOne).toHaveValue("USER_LINE_ONE");
  });

  it("should render and pre populate the line two input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const lineTwo = container.querySelector('[name="lineTwo"]') as Element;

    expect(lineTwo).toBeInTheDocument();
    expect(lineTwo).toHaveValue("USER_LINE_TWO");
  });

  it("should render and pre populate the line three input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const lineThree = container.querySelector('[name="lineThree"]') as Element;

    expect(lineThree).toBeInTheDocument();
    expect(lineThree).toHaveValue("USER_LINE_THREE");
  });

  it("should render and pre populate the postcode input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const postcode = container.querySelector('[name="postcode"]') as Element;

    expect(postcode).toBeInTheDocument();
    expect(postcode).toHaveValue("USER_POSTCODE");
  });

  it("should render and pre populate the city input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const city = container.querySelector('[name="city"]') as Element;

    expect(city).toBeInTheDocument();
    expect(city).toHaveValue("USER_CITY");
  });

  it("should render and pre populate the county input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const county = container.querySelector('[name="county"]') as Element;

    expect(county).toBeInTheDocument();
    expect(county).toHaveValue("USER_COUNTY");
  });

  it("should render and pre populate the country input", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const country = container.querySelector('[name="country"]') as Element;

    expect(country).toBeInTheDocument();
    expect(country).toHaveValue("USER_COUNTRY");
  });

  it("should render the continue button", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const continueButton = container.querySelector(
      '[type="button"]'
    ) as Element;

    expect(continueButton).toBeInTheDocument();
    expect(continueButton).toHaveTextContent("CONTINUE");
  });

  it("should update the tab index on continue button click", () => {
    const { container } = render(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return (
            <DeliveryDetails formik={formik} setTabIndex={mockedSetTabIndex} />
          );
        }}
      </Formik>
    );
    const continueButton = container.querySelector(
      '[type="button"]'
    ) as Element;

    fireEvent.click(continueButton);

    waitFor(() => {
      expect(mockedSetTabIndex).toHaveBeenCalled();
    });
  });
});
