import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import PurchaseComplete from "./PurchaseComplete";
import { IOrder, mockedOrder } from "../../../types/IOrder";
import renderHelper from "../../../utils/renderHelper";
import { checkoutInitialValues } from "../../organisms/CheckoutForm/utils/schema";

const mockedOnSubmit = jest.fn();

describe("PurchaseComplete", () => {
  it("should render the component with the expected values", () => {
    renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <PurchaseComplete order={mockedOrder} isLoading={false} />;
        }}
      </Formik>
    );

    expect(
      screen.getByText("831AAFCB-F559-4B5D-9F43-0A0389D653C8")
    ).toBeInTheDocument();
    expect(screen.getByText("£99.99")).toBeInTheDocument();
  });

  it("should render the order cart items", () => {
    const { container } = renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <PurchaseComplete order={mockedOrder} isLoading={false} />;
        }}
      </Formik>
    );
    const orderCartItems = container.querySelector(
      ".order-cart-items"
    ) as Element;
    const orderProducts = container.querySelectorAll("#order-product");

    expect(orderCartItems).toBeInTheDocument();
    expect(orderProducts).toHaveLength(3);
  });

  it("should render the loader when loading", () => {
    const { container } = renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <PurchaseComplete order={{} as IOrder} isLoading={true} />;
        }}
      </Formik>
    );
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });
});
