import { screen } from "@testing-library/react";
import Products from "./Products";
import renderHelper from "../../../utils/renderHelper";
import { mockedProducts } from "../../../types/IProduct";
import { AxiosError } from "axios";

describe("products", () => {
  it("should render the component with the expected values", () => {
    renderHelper(
      <Products products={mockedProducts} isLoading={false} error={null} />
    );

    expect(screen.getAllByText("PRODUCT_NAME")).toHaveLength(3);
  });

  it("should render the loader when loading", () => {
    renderHelper(<Products products={[]} isLoading={true} error={null} />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render the app error when there is an error", () => {
    renderHelper(
      <Products
        products={[]}
        isLoading={false}
        error={{ code: "ERROR_CODE", message: "ERROR_MESSAGE" } as AxiosError}
      />
    );

    expect(screen.getByText("ERROR_CODE")).toBeInTheDocument();
  });
});
