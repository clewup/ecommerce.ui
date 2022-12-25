import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "./Products";
import { mockedProducts } from "../../../data/mockData/productData";

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