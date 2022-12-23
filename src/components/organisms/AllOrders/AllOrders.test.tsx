import { render, waitFor } from "@testing-library/react";
import useOrder from "../../../hooks/useOrder";
import { IOrder } from "../../../types/IOrder";
import { Guid } from "guid-typescript";
import { IImage } from "../../../types/IImage";
import getAllOrders from "../../../api/GetAllOrders";
import AllOrders from "./AllOrders";

const mockedOrders: IOrder[] = [
  {
    id: Guid.parse("831AAFCB-F559-4B5D-9F43-0A0389D653C8"),
    userId: Guid.create(),
    firstName: "ORDER_FIRST_NAME",
    lastName: "ORDER_LAST_NAME",
    email: "ORDER_EMAIL",
    deliveryAddress: {
      lineOne: "ORDER_LINE_ONE",
      lineThree: "ORDER_LINE_TWO",
      lineTwo: "ORDER_LINE_THREE",
      postcode: "ORDER_POSTCODE",
      city: "ORDER_CITY",
      country: "ORDER_COUNTRY",
      county: "ORDER_COUNTY",
    },
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
    orderDate: new Date(),
  },
];

const mockedUseOrder = {
  orders: mockedOrders,
  isLoading: false,
  error: null,
  getUserOrders: jest.fn(),
  getAllOrders: jest.fn(),
};
jest.mock("../../../hooks/useOrder", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseOrder;
    },
  };
});

describe("AllOrders", () => {
  it("should render the component", () => {
    const { container } = render(<AllOrders />);
    const component = container.querySelector("#all-orders") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch all orders", () => {
    const { container } = render(<AllOrders />);

    expect(mockedUseOrder.getAllOrders).toHaveBeenCalled();
  });

  it("should render all user orders", () => {
    const { container } = render(<AllOrders />);
    const orders = container.querySelector(".orders") as Element;

    expect(orders).toBeInTheDocument();
    expect(orders).toHaveTextContent("831AAFCB-F559-4B5D-9F43-0A0389D653C8");
  });

  it("should render the order products", () => {
    const { container } = render(<AllOrders />);
    const orderProducts = container.querySelector(".order-products") as Element;

    expect(orderProducts).toBeInTheDocument();
    expect(orderProducts).toHaveTextContent("PRODUCT_NAME");
  });

  it("should render nothing if no orders", () => {
    mockedUseOrder.orders = [];

    const { container } = render(<AllOrders />);
    const orders = container.querySelector(".orders") as Element;

    expect(orders).toBeInTheDocument();
    expect(orders).not.toHaveTextContent(
      "831AAFCB-F559-4B5D-9F43-0A0389D653C8"
    );
  });

  it("should render the loader when loading", () => {
    mockedUseOrder.isLoading = true;

    const { container } = render(<AllOrders />);
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });
});
