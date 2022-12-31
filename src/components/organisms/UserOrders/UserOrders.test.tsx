import UserOrders from "./UserOrders";
import { mockedUseOrder } from "../../../data/mockData/useOrderData";
import { mockedError } from "../../../data/mockData/errorData";
import renderHelper from "../../../utils/renderHelper";

jest.mock("../../../hooks/useOrder", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseOrder;
    },
  };
});

describe("UserOrders", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<UserOrders />);
    const component = container.querySelector("#user-orders") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch user orders", () => {
    const { container } = renderHelper(<UserOrders />);

    expect(mockedUseOrder.getUserOrders).toHaveBeenCalled();
  });

  it("should render the user orders", () => {
    const { container } = renderHelper(<UserOrders />);
    const orders = container.querySelectorAll("#order");

    expect(orders).toHaveLength(3);
  });

  it("should render the order products", () => {
    const { container } = renderHelper(<UserOrders />);
    const orderProducts = container.querySelector(".order-products") as Element;

    expect(orderProducts).toBeInTheDocument();
    expect(orderProducts).toHaveTextContent("PRODUCT_NAME");
  });

  it("should render 'no orders found' if no user orders", () => {
    mockedUseOrder.orders = [];

    const { container } = renderHelper(<UserOrders />);
    const orders = container.querySelector("#user-orders") as Element;

    expect(orders).toBeInTheDocument();
    expect(orders).toHaveTextContent("No orders found.");
  });

  it("should render the loader when loading", () => {
    mockedUseOrder.isLoading = true;

    const { container } = renderHelper(<UserOrders />);
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseOrder.error = mockedError;

    const { container } = renderHelper(<UserOrders />);
    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
