import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RangeTile from "./RangeTile";
import { IRange } from "../../../types/IRange";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

const mockedUseNavigate = jest.fn();

const mockedRange: IRange = {
  name: "RANGE_NAME",
  image: "RANGE_IMAGE",
};

describe("RangeTile", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <RangeTile range={mockedRange} />
      </Router>
    );
    const component = container.querySelector("#range-tile") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the range name", () => {
    const { container } = render(
      <Router>
        <RangeTile range={mockedRange} />
      </Router>
    );
    const name = container.querySelector(".subheading") as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("RANGE_NAME");
  });

  it("should render the discover button", () => {
    const { container } = render(
      <Router>
        <RangeTile range={mockedRange} />
      </Router>
    );
    const button = container.querySelector('[type="button"]') as Element;

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("DISCOVER");
  });

  it("should navigate to the store on button click", () => {
    const { container } = render(
      <Router>
        <RangeTile range={mockedRange} />
      </Router>
    );
    const button = container.querySelector('[type="button"]') as Element;

    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("store");
  });
});
