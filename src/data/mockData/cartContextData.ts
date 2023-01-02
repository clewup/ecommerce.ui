import { Guid } from "guid-typescript";
import { mockedProducts } from "./productData";

export const mockedCartContext = {
  cart: {
    id: Guid.create(),
    userId: Guid.create(),
    products: mockedProducts,
    total: 69.12,
  },
  setCart: jest.fn(),
  isLoading: false,
  setLoading: jest.fn(),
};
