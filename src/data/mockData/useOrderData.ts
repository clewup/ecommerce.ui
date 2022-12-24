import { mockedOrders } from "./orderData";

export const mockedUseOrder = {
  orders: mockedOrders,
  isLoading: false,
  error: null,
  getUserOrders: jest.fn(),
  getAllOrders: jest.fn(),
};
