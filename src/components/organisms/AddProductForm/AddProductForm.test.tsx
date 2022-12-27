import { fireEvent, render, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import React from "react";
import AddProductForm from "./AddProductForm";
import { mockedProductInitialValues } from "../../../data/mockData/productData";

const mockedOnSubmit = jest.fn();

describe("AddProductForm", () => {
  it("should render the component", () => {
    const { container } = render(
      <Formik
        initialValues={mockedProductInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return <AddProductForm />;
        }}
      </Formik>
    );

    const component = container.querySelector("#add-product-form") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should submit the form on add product", () => {
    const { container } = render(
      <Formik
        initialValues={mockedProductInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return <AddProductForm />;
        }}
      </Formik>
    );
    const submitButton = container.querySelector('[type="submit"]') as Element;
    const name = container.querySelector('[name="name"]') as Element;
    const description = container.querySelector(
      '[name="description"]'
    ) as Element;
    const color = container.querySelector('[name="color"]') as Element;
    const stock = container.querySelector('[name="stock"]') as Element;
    const price = container.querySelector('[name="price"]') as Element;
    const discount = container.querySelector('[name="discount"]') as Element;

    fireEvent.change(name, {
      target: { value: "PRODUCT_NAME" },
    });
    fireEvent.change(description, {
      target: { value: "PRODUCT_DESCRIPTION" },
    });
    fireEvent.change(color, {
      target: { value: "PRODUCT_COLOR" },
    });
    fireEvent.change(stock, {
      target: { value: 10 },
    });
    fireEvent.change(price, {
      target: { value: 12.34 },
    });
    fireEvent.change(discount, {
      target: { value: 23.45 },
    });

    fireEvent.click(submitButton);

    waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
    });
  });
});
