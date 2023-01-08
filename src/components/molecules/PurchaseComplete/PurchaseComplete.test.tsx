import { screen } from "@testing-library/react";
import { Formik } from "formik";
import PurchaseComplete from "./PurchaseComplete";
import { IOrder } from "../../../interfaces/IOrder";
import renderHelper from "../../../utils/renderHelper";
import { checkoutInitialValues } from "../../organisms/CheckoutForm/utils/schema";
import { mockedOrder } from "../../organisms/UserOrders/data/mockData";

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
    expect(screen.getByText("Total: £99.99")).toBeInTheDocument();
  });

  it("should render the order cart items", () => {
    renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <PurchaseComplete order={mockedOrder} isLoading={false} />;
        }}
      </Formik>
    );

    expect(screen.getAllByText("PRODUCT_NAME")).toHaveLength(3);
  });

  it("should render the loader when loading", () => {
    renderHelper(
      <Formik initialValues={checkoutInitialValues} onSubmit={mockedOnSubmit}>
        {(formik) => {
          return <PurchaseComplete order={undefined} isLoading={true} />;
        }}
      </Formik>
    );
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
