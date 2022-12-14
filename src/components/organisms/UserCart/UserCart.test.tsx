import { screen } from "@testing-library/react";
import UserCart from "./UserCart";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";

const mockedUseCart = {
  getCart: jest.fn(),
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  error: null,
};

jest.mock("../../../hooks/useCart", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseCart;
    },
  };
});

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("UserCart", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<UserCart />);

    expect(screen.getAllByText("PRODUCT_NAME")).toHaveLength(3);
    expect(
      screen.getByText("CHECKOUT", { selector: 'button[type="submit"]' })
    ).toBeInTheDocument();
  });

  it("should navigate to checkout on button click", () => {
    renderHelper(<UserCart />);

    userEvent.click(
      screen.getByText("CHECKOUT", { selector: 'button[type="submit"]' })
    );

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/checkout");
  });
});
