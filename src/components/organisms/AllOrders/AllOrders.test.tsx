import { screen } from "@testing-library/react";
import AllOrders from "./AllOrders";
import renderHelper from "../../../utils/renderHelper";
import { mockedOrders } from "../../../types/IOrder";

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
  it("should render the component with the expected values", () => {
    renderHelper(<AllOrders />);

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("should fetch all orders", () => {
    renderHelper(<AllOrders />);

    expect(mockedUseOrder.getAllOrders).toHaveBeenCalled();
  });

  it("should render the loader when loading", () => {
    mockedUseOrder.isLoading = true;
    renderHelper(<AllOrders />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseOrder.error = { code: "ERROR_CODE", message: "ERROR_MESSAGE" };
    renderHelper(<AllOrders />);

    expect(screen.getByText("ERROR_CODE")).toBeInTheDocument();
  });
});
