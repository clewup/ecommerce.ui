import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RangeTile from "./RangeTile";
import { mockedProductContext } from "../../../data/mockData/productContextData";
import { ProductContext } from "../../../contexts/Product";
import { mockedRange } from "../../../data/mockData/rangeData";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

const mockedUseNavigate = jest.fn();

describe("RangeTile", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <RangeTile range={mockedRange} />
        </ProductContext.Provider>
      </Router>
    );
    const component = container.querySelector("#range-tile") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the range name", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <RangeTile range={mockedRange} />
        </ProductContext.Provider>
      </Router>
    );
    const name = container.querySelector(".subheading") as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("RANGE_NAME");
  });

  it("should render the discover button", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <RangeTile range={mockedRange} />
        </ProductContext.Provider>
      </Router>
    );
    const button = container.querySelector('[type="button"]') as Element;

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("DISCOVER");
  });

  it("should navigate to the store on button click", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <RangeTile range={mockedRange} />
        </ProductContext.Provider>
      </Router>
    );
    const button = container.querySelector('[type="button"]') as Element;

    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("store");
  });

  it("should update the range query on click", () => {
    const { container } = render(
      <Router>
        <ProductContext.Provider value={mockedProductContext}>
          <RangeTile range={mockedRange} />
        </ProductContext.Provider>
      </Router>
    );
    const button = container.querySelector('[type="button"]') as Element;

    fireEvent.click(button);

    expect(mockedProductContext.setRangeQuery).toHaveBeenCalled();
    expect(mockedProductContext.setRangeQuery).toHaveBeenCalledWith(
      "RANGE_NAME"
    );
  });
});
