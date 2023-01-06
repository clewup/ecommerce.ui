import { fireEvent, render, screen } from "@testing-library/react";
import CartProducts from "./CartProducts";
import { AuthContext } from "../../../contexts/Auth";
import { CartContext } from "../../../contexts/Cart";
import { BrowserRouter as Router } from "react-router-dom";
import { mockedAuthContext } from "../../../data/mockData/authContextData";
import { mockedCartContext } from "data/mockData/cartContextData";
import { mockedUseCart } from "data/mockData/useCartData";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";

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

describe("CartProducts", () => {
  it("should render the component with the expected values", () => {
    const { container } = renderHelper(<CartProducts />);

    expect(container.querySelectorAll("#cart-product")).toHaveLength(3);
    expect(
      screen.getByText("CHECKOUT", { selector: 'button[type="submit"]' })
    ).toBeInTheDocument();
  });

  it("should navigate to checkout on button click", () => {
    renderHelper(<CartProducts />);

    userEvent.click(
      screen.getByText("CHECKOUT", { selector: 'button[type="submit"]' })
    );

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/checkout");
  });
});
