import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "./Products";
import renderHelper from "../../../utils/renderHelper";
import { mockedProducts } from "../../../types/IProduct";
import { AxiosError } from "axios";

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
      <Products
        products={[]}
        isLoading={false}
        error={{ code: "ERROR_CODE", message: "ERROR_MESSAGE" } as AxiosError}
      />
    );
    const appError = container.querySelector("#app-error") as Element;

    expect(appError).toBeInTheDocument();
  });
});
