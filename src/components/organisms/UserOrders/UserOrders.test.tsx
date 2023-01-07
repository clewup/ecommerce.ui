import UserOrders from "./UserOrders";
import renderHelper from "../../../utils/renderHelper";
import { IOrder, mockedOrders } from "../../../types/IOrder";
import { AxiosError } from "axios";
import { screen } from "@testing-library/react";

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

describe("UserOrders", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<UserOrders />);

    expect(screen.getAllByText("Total: £99.99")).toHaveLength(3);
    expect(screen.getAllByText("PRODUCT_NAME")).toHaveLength(9);
  });

  it("should fetch user orders", () => {
    renderHelper(<UserOrders />);

    expect(mockedUseOrder.getUserOrders).toHaveBeenCalled();
  });

  it("should render 'no orders found' if no user orders", () => {
    mockedUseOrder.orders = [];
    renderHelper(<UserOrders />);

    expect(screen.getByText("No orders found.")).toBeInTheDocument();
  });

  it("should render the loader when loading", () => {
    mockedUseOrder.isLoading = true;
    renderHelper(<UserOrders />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
