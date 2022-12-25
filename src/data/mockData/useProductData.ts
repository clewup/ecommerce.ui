import { mockedProduct, mockedProductInitialValues } from "./productData";

export const mockedUseProduct = {
  initialValues: mockedProductInitialValues,
  product: mockedProduct,
  isLoading: false,
  error: null,
  getProduct: jest.fn(),
  addProduct: jest.fn(),
  validationSchema: {},
};

export const mockedUseProductLoading = {
  initialValues: mockedProductInitialValues,
  product: {},
  isLoading: true,
  error: null,
  getProduct: jest.fn(),
  addProduct: jest.fn(),
  validationSchema: {},
};

export const mockedUseProductError = {
  initialValues: mockedProductInitialValues,
  product: {},
  isLoading: false,
  error: {
    code: "ERROR_CODE",
    message: "ERROR_MESSAGE",
  },
  getProduct: jest.fn(),
  addProduct: jest.fn(),
  validationSchema: {},
};
