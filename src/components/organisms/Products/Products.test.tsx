import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "./Products";
import { mockedProducts } from "../../../data/mockData/productData";
import { mockedError } from "../../../data/mockData/errorData";
import renderHelper from "../../../utils/renderHelper";

describe("products", () => {
  it("should render the component", () => {
    const { container } = renderHelper(
      <Products products={mockedProducts} isLoading={false} error={null} />
    );
    const component = container.querySelector("#products") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the products", () => {
    const { container } = renderHelper(
      <Products products={mockedProducts} isLoading={false} error={null} />
    );
    const products = container.querySelectorAll("#product-tile");

    expect(products).toHaveLength(3);
  });

  it("should render the loader when loading", () => {
    const { container } = renderHelper(
      <Products products={[]} isLoading={true} error={null} />
    );
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    const { container } = renderHelper(
      <Products products={[]} isLoading={false} error={mockedError} />
    );
    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
