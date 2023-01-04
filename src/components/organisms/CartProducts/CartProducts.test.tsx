import { fireEvent, render } from "@testing-library/react";
import CartProducts from "./CartProducts";
import { AuthContext } from "../../../contexts/Auth";
import { CartContext } from "../../../contexts/Cart";
import { BrowserRouter as Router } from "react-router-dom";
import { mockedAuthContext } from "../../../data/mockData/authContextData";
import { mockedCartContext } from "data/mockData/cartContextData";
import { mockedUseCart } from "data/mockData/useCartData";
import renderHelper from "../../../utils/renderHelper";

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
  it("should render the component", () => {
    const { container } = renderHelper(<CartProducts />);
    const component = container.querySelector("#cart-products") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the cart products", () => {
    const { container } = renderHelper(<CartProducts />);

    const cartProducts = document.querySelectorAll("#cart-product");

    expect(cartProducts).toHaveLength(3);
  });

  it("should render the cart total", () => {
    const { container } = renderHelper(<CartProducts />);
    const total = container.querySelector(".cart-total") as Element;

    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent("£69.12");
  });

  it("should render the checkout button", () => {
    mockedCartContext.cart.total = 69.1222222;
    const { container } = renderHelper(<CartProducts />);
    const button = container.querySelector('[type="submit"]') as Element;

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("CHECKOUT");
  });

  it("should navigate to checkout on button click", () => {
    const { container } = renderHelper(<CartProducts />);
    const button = container.querySelector('[type="submit"]') as Element;

    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/checkout");
  });
});
