import { render } from "@testing-library/react";
import AllOrders from "./AllOrders";
import { mockedOrders } from "../../../data/mockData/orderData";

const mockedUseOrder = {
  orders: mockedOrders,
  isLoading: false,
  error: null,
  getUserOrders: jest.fn(),
  getAllOrders: jest.fn(),
};
jest.mock("../../../hooks/useOrder", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseOrder;
    },
  };
});

describe("AllOrders", () => {
  it("should render the component", () => {
    const { container } = render(<AllOrders />);
    const component = container.querySelector("#all-orders") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch all orders", () => {
    const { container } = render(<AllOrders />);

    expect(mockedUseOrder.getAllOrders).toHaveBeenCalled();
  });

  it("should render all user orders", () => {
    const { container } = render(<AllOrders />);
    const orders = container.querySelectorAll(".order");

    expect(orders).toHaveLength(3);
  });

  it("should render the order products", () => {
    const { container } = render(<AllOrders />);
    const orderProducts = container.querySelector(".order-products") as Element;

    expect(orderProducts).toBeInTheDocument();
    expect(orderProducts).toHaveTextContent("PRODUCT_NAME");
  });

  it("should render nothing if no orders", () => {
    mockedUseOrder.orders = [];

    const { container } = render(<AllOrders />);
    const orders = container.querySelector(".orders") as Element;

    expect(orders).toBeInTheDocument();
    expect(orders).not.toHaveTextContent(
      "831AAFCB-F559-4B5D-9F43-0A0389D653C8"
    );
  });

  it("should render the loader when loading", () => {
    mockedUseOrder.isLoading = true;

    const { container } = render(<AllOrders />);
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });
});
