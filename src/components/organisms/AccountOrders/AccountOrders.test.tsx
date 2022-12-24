import { render, waitFor } from "@testing-library/react";
import AccountOrders from "./AccountOrders";
import { mockedUseOrder } from "../../../data/mockData/useOrderData";

jest.mock("../../../hooks/useOrder", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseOrder;
    },
  };
});

describe("AccountOrders", () => {
  it("should render the component", () => {
    const { container } = render(<AccountOrders />);
    const component = container.querySelector("#account-orders") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch user orders", () => {
    const { container } = render(<AccountOrders />);

    expect(mockedUseOrder.getUserOrders).toHaveBeenCalled();
  });

  it("should render the user orders", () => {
    const { container } = render(<AccountOrders />);
    const orders = container.querySelectorAll(".order");

    expect(orders).toHaveLength(3);
  });

  it("should render the order products", () => {
    const { container } = render(<AccountOrders />);
    const orderProducts = container.querySelector(".order-products") as Element;

    expect(orderProducts).toBeInTheDocument();
    expect(orderProducts).toHaveTextContent("PRODUCT_NAME");
  });

  it("should render nothing if no user orders", () => {
    mockedUseOrder.orders = [];

    const { container } = render(<AccountOrders />);
    const orders = container.querySelector(".orders") as Element;

    expect(orders).toBeInTheDocument();
    expect(orders).not.toHaveTextContent(
      "831AAFCB-F559-4B5D-9F43-0A0389D653C8"
    );
  });

  it("should render the loader when loading", () => {
    mockedUseOrder.isLoading = true;

    const { container } = render(<AccountOrders />);
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });
});
