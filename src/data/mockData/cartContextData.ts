import { mockedCart } from "../../types/ICart";

export const mockedCartContext = {
  cart: mockedCart,
  setCart: jest.fn(),
  isLoading: false,
  setLoading: jest.fn(),
};
