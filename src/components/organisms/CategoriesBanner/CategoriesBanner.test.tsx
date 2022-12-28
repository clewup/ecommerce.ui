import { render } from "@testing-library/react";
import CategoriesBanner from "./CategoriesBanner";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext } from "../../../contexts/Product";
import { mockedProductContext } from "../../../data/mockData/productContextData";
import renderHelper from "../../../utils/renderHelper";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("CategoriesBanner", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<CategoriesBanner />);
    const component = container.querySelector("#categories-banner");

    expect(component).toBeInTheDocument();
  });

  it("should render the categories", () => {
    const { container } = renderHelper(<CategoriesBanner />);
    const categories = container.querySelectorAll("#category-tile");

    expect(categories).toHaveLength(5);
  });

  it("should render the loader when loading", () => {
    mockedProductContext.categories = [];
    const { container } = renderHelper(<CategoriesBanner />);
    const loader = container.querySelector("#loader") as Element;

    expect(loader).toBeInTheDocument();
  });
});
