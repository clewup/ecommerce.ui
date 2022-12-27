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
