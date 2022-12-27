import { mockedOrder } from "./orderData";
import { mockedCheckoutInitialValues } from "./checkoutData";

export const mockedUseCheckout = {
  initialValues: mockedCheckoutInitialValues,
  submitCheckout: jest.fn(),
  order: mockedOrder,
  isLoading: false,
  error: null,
  validationSchema: {},
};
