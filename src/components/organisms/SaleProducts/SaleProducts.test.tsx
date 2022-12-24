import useStatistics from "../../../hooks/useStatistics";
import { IProduct } from "../../../types/IProduct";
import { Guid } from "guid-typescript";
import { IImage } from "../../../types/IImage";
import { render } from "@testing-library/react";
import SaleProducts from "./SaleProducts";
import { BrowserRouter as Router } from "react-router-dom";

const mockedProducts: IProduct[] = [
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
    stock: 10,
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
    stock: 10,
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
    stock: 10,
  },
];

const mockedUseStatistics = {
  popularProducts: mockedProducts,
  discountedProducts: mockedProducts,
  isLoading: false,
  error: null,
  getMostDiscounted: jest.fn(),
  getMostPopular: jest.fn(),
};

jest.mock("../../../hooks/useStatistics", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseStatistics;
    },
  };
});

describe("SaleProducts", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <SaleProducts />
      </Router>
    );
    const component = container.querySelector("#sale-products") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch the sale products", () => {
    const { container } = render(
      <Router>
        <SaleProducts />
      </Router>
    );
    expect(mockedUseStatistics.getMostDiscounted).toHaveBeenCalled();
  });

  it("should render the products", () => {
    const { container } = render(
      <Router>
        <SaleProducts />
      </Router>
    );
    const products = container.querySelectorAll("#product-tile");

    expect(products).toHaveLength(3);
  });
});
