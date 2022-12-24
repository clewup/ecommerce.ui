import useStatistics from "../../../hooks/useStatistics";
import { IProduct } from "../../../types/IProduct";
import { Guid } from "guid-typescript";
import { IImage } from "../../../types/IImage";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TrendingProducts from "./TrendingProducts";

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

describe("TrendingProducts", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <TrendingProducts />
      </Router>
    );
    const component = container.querySelector("#trending-products") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should fetch the popular products", () => {
    const { container } = render(
      <Router>
        <TrendingProducts />
      </Router>
    );
    expect(mockedUseStatistics.getMostPopular).toHaveBeenCalled();
  });

  it("should render the products", () => {
    const { container } = render(
      <Router>
        <TrendingProducts />
      </Router>
    );
    const products = container.querySelectorAll("#product-tile");

    expect(products).toHaveLength(3);
  });
});
