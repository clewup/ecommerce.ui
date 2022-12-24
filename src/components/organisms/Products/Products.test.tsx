import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "./Products";
import { Guid } from "guid-typescript";
import { IImage } from "../../../types/IImage";
import { IProduct } from "../../../types/IProduct";
import { AxiosError } from "axios";

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

describe("products", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <Products products={mockedProducts} isLoading={false} error={null} />
      </Router>
    );
    const component = container.querySelector("#products") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the products", () => {
    const { container } = render(
      <Router>
        <Products products={mockedProducts} isLoading={false} error={null} />
      </Router>
    );
    const products = container.querySelectorAll("#product-tile");

    expect(products).toHaveLength(3);
  });

  it("should render the loader if loading", () => {
    const { container } = render(
      <Router>
        <Products products={mockedProducts} isLoading={true} error={null} />
      </Router>
    );
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });
});
