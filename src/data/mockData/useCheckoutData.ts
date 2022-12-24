import { mockedOrder, mockedOrders } from "./orderData";
import { ICheckoutFormValues, IOrder } from "../../types/IOrder";
import { AxiosError } from "axios";
import * as Yup from "yup";
import { mockedCheckoutInitialValues } from "./checkoutData";

export const mockedUseCheckout = {
  initialValues: mockedCheckoutInitialValues,
  submitCheckout: jest.fn(),
  order: mockedOrder,
  isLoading: false,
  error: null,
  validationSchema: {},
};

export const mockedUseCheckoutNoOrder = {
  initialValues: mockedCheckoutInitialValues,
  submitCheckout: jest.fn(),
  order: [],
  isLoading: false,
  error: null,
  validationSchema: {},
};

export const mockedUseCheckoutLoading = {
  initialValues: mockedCheckoutInitialValues,
  submitCheckout: jest.fn(),
  order: [],
  isLoading: true,
  error: null,
  validationSchema: {},
};

export const mockedUseCheckoutError = {
  initialValues: mockedCheckoutInitialValues,
  submitCheckout: jest.fn(),
  order: [],
  isLoading: false,
  error: {
    code: "ERROR_CODE",
    message: "ERROR_MESSAGE",
  },
  validationSchema: {},
};
