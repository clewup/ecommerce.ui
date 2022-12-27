import { render } from "@testing-library/react";
import AccountOrders from "./AccountOrders";
import { mockedUseOrder } from "../../../data/mockData/useOrderData";
import { mockedError } from "../../../data/mockData/errorData";
import { theme } from "../../../styles/theme";
import { ThemeProvider } from "@mui/material";
import renderHelper from "../../../utils/renderHelper";

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
    const { container } = renderHelper(<AccountOrders />);
    const component = container.querySelector("#account-orders") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch user orders", () => {
    const { container } = renderHelper(<AccountOrders />);

    expect(mockedUseOrder.getUserOrders).toHaveBeenCalled();
  });

  it("should render the user orders", () => {
    const { container } = renderHelper(<AccountOrders />);
    const orders = container.querySelectorAll("#order");

    expect(orders).toHaveLength(3);
  });

  it("should render the order products", () => {
    const { container } = renderHelper(<AccountOrders />);
    const orderProducts = container.querySelector(".order-products") as Element;

    expect(orderProducts).toBeInTheDocument();
    expect(orderProducts).toHaveTextContent("PRODUCT_NAME");
  });

  it("should render 'no orders found' if no user orders", () => {
    mockedUseOrder.orders = [];

    const { container } = renderHelper(<AccountOrders />);
    const orders = container.querySelector(".orders") as Element;

    expect(orders).toBeInTheDocument();
    expect(orders).toHaveTextContent("No orders found.");
  });

  it("should render the loader when loading", () => {
    mockedUseOrder.isLoading = true;

    const { container } = renderHelper(<AccountOrders />);
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseOrder.error = mockedError;

    const { container } = renderHelper(<AccountOrders />);
    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
