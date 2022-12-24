import { render } from "@testing-library/react";
import CategoriesBanner from "./CategoriesBanner";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext } from "../../../contexts/Product";
import { mockedProductContext } from "../../../data/mockData/productContextData";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("CategoriesBanner", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <CategoriesBanner />
        </ProductContext.Provider>
      </Router>
    );
    const component = container.querySelector("#categories-banner");

    expect(component).toBeInTheDocument();
  });

  it("should render the categories", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <CategoriesBanner />
        </ProductContext.Provider>
      </Router>
    );
    const categories = container.querySelectorAll("#category-tile");

    expect(categories).toHaveLength(5);
  });
});
