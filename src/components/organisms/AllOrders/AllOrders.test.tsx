import { render, screen } from "@testing-library/react";
import AllOrders from "./AllOrders";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../styles/theme";
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
    const { container } = renderHelper(<AllOrders />);

    expect(container.querySelector("#loader")).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    // @ts-ignore
    mockedUseOrder.error = mockedError;
    const { container } = renderHelper(<AllOrders />);

    expect(container.querySelector("#app-error")).toBeInTheDocument();
  });
});
