import { fireEvent, render } from "@testing-library/react";
import CartProducts from "./CartProducts";
import { IClaim } from "../../../types/IClaim";
import { AuthContext } from "../../../contexts/Auth";
import { CartContext } from "../../../contexts/Cart";
import { Guid } from "guid-typescript";
import { IImage } from "../../../types/IImage";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockedAuthContext = {
  isAuthenticated: true,
  setAuthenticated: jest.fn(),
  accessToken: "ACCESS_TOKEN",
  setAccessToken: jest.fn(),
  claims: [] as IClaim[],
  setClaims: jest.fn(),
  role: "ROLE",
  setRole: jest.fn(),
};

const mockedCartContext = {
  cart: {
    id: Guid.create(),
    userId: Guid.create(),
    products: [
      {
        id: Guid.create(),
        name: "PRODUCT_NAME",
        images: [
          {
            title: "IMAGE_TITLE",
            description: "IMAGE_DESCRIPTION",
            url: "HTTPS://IMAGE_URL.JPG",
          },
        ] as IImage[],
        description: "PRODUCT_DESCRIPTION",
        category: "PRODUCT_CATEGORY",
        color: "PRODUCT_COLOR",
        price: 12.34,
        discount: 0,
      },
      {
        id: Guid.create(),
        name: "PRODUCT_NAME",
        images: [
          {
            title: "IMAGE_TITLE",
            description: "IMAGE_DESCRIPTION",
            url: "HTTPS://IMAGE_URL.JPG",
          },
        ] as IImage[],
        description: "PRODUCT_DESCRIPTION",
        category: "PRODUCT_CATEGORY",
        color: "PRODUCT_COLOR",
        price: 56.78,
        discount: 0,
      },
    ],
    total: 69.12,
  },
  setCart: jest.fn(),
  isLoading: false,
  setLoading: jest.fn(),
};

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

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("CartProducts", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <CartContext.Provider value={mockedCartContext}>
            <CartProducts />
          </CartContext.Provider>
        </AuthContext.Provider>
      </Router>
    );
    const component = container.querySelector("#cart-products") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the cart products", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <CartContext.Provider value={mockedCartContext}>
            <CartProducts />
          </CartContext.Provider>
        </AuthContext.Provider>
      </Router>
    );

    const cartProducts = document.querySelectorAll("#cart-product");

    expect(cartProducts).toHaveLength(2);
  });

  it("should render the cart total", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <CartContext.Provider value={mockedCartContext}>
            <CartProducts />
          </CartContext.Provider>
        </AuthContext.Provider>
      </Router>
    );
    const total = container.querySelector(".cart-total") as Element;

    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent("£69.12");
  });

  it("should render the cart total to two decimal places", () => {
    mockedCartContext.cart.total = 69.1222222;
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <CartContext.Provider value={mockedCartContext}>
            <CartProducts />
          </CartContext.Provider>
        </AuthContext.Provider>
      </Router>
    );
    const total = container.querySelector(".cart-total") as Element;

    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent("£69.12");
    expect(total).not.toHaveTextContent("£69.1222222");
  });

  it("should render the checkout button", () => {
    mockedCartContext.cart.total = 69.1222222;
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <CartContext.Provider value={mockedCartContext}>
            <CartProducts />
          </CartContext.Provider>
        </AuthContext.Provider>
      </Router>
    );
    const button = container.querySelector('[type="submit"]') as Element;

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("CHECKOUT");
  });

  it("should navigate to checkout on button click", () => {
    const { container } = render(
      <Router>
        <AuthContext.Provider value={mockedAuthContext}>
          <CartContext.Provider value={mockedCartContext}>
            <CartProducts />
          </CartContext.Provider>
        </AuthContext.Provider>
      </Router>
    );
    const button = container.querySelector('[type="submit"]') as Element;

    fireEvent.click(button);

    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/checkout");
  });
});
