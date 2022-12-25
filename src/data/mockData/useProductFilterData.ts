import { mockedProducts } from "./productData";

export const mockedUseProductFilter = {
  products: mockedProducts,
  isLoading: false,
  error: null,
};

export const mockedUseProductFilterLoading = {
  products: [],
  isLoading: true,
  error: null,
};

export const mockedUseProductFilterError = {
  products: [],
  isLoading: false,
  error: {
    code: "ERROR_CODE",
    message: "ERROR_MESSAGE",
  },
};
