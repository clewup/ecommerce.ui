import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { mockedUseCheckout } from "../../../data/mockData/useCheckoutData";

jest.mock("../../../hooks/useCheckout", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseCheckout;
    },
  };
});

describe("CheckoutForm", () => {
  it("should render the component", () => {
    const { container } = render(<CheckoutForm />);
    const component = container.querySelector("#checkout-form") as Element;

    expect(component).toBeInTheDocument();
  });
});
