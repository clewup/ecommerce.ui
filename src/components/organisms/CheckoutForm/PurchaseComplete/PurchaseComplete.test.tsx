import { render } from "@testing-library/react";
import { Formik } from "formik";
import { mockedCheckoutInitialValues } from "../../../../data/mockData/checkoutData";
import PurchaseComplete from "./PurchaseComplete";
import { mockedOrder } from "../../../../data/mockData/orderData";
import { IOrder } from "../../../../types/IOrder";
import renderHelper from "../../../../utils/renderHelper";

const mockedOnSubmit = jest.fn();

describe("PurchaseComplete", () => {
  it("should render the component", () => {
    const { container } = renderHelper(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return <PurchaseComplete order={mockedOrder} isLoading={false} />;
        }}
      </Formik>
    );
    const component = container.querySelector("#purchase-complete") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the order id", () => {
    const { container } = renderHelper(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return <PurchaseComplete order={mockedOrder} isLoading={false} />;
        }}
      </Formik>
    );
    const orderDetails = container.querySelector(".order-details") as Element;

    expect(orderDetails).toHaveTextContent(
      "831AAFCB-F559-4B5D-9F43-0A0389D653C8"
    );
  });

  it("should render the order cart items", () => {
    const { container } = renderHelper(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
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

  it("should render the order total", () => {
    const { container } = renderHelper(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return <PurchaseComplete order={mockedOrder} isLoading={false} />;
        }}
      </Formik>
    );
    const total = container.querySelector(".order-total") as Element;

    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent("£69.12");
  });

  it("should render the loader when loading", () => {
    const { container } = renderHelper(
      <Formik
        initialValues={mockedCheckoutInitialValues}
        onSubmit={mockedOnSubmit}
      >
        {(formik) => {
          return <PurchaseComplete order={{} as IOrder} isLoading={true} />;
        }}
      </Formik>
    );
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });
});
