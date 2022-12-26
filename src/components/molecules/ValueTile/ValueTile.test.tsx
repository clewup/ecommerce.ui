import { render } from "@testing-library/react";
import React from "react";
import ValueTile from "./ValueTile";
import { mockedValue } from "../../../data/mockData/valueData";

describe("ValueTile", () => {
  it("should render the component", () => {
    const { container } = render(<ValueTile value={mockedValue} />);

    const component = container.querySelector("#value-tile") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the value icon", () => {
    const { container } = render(<ValueTile value={mockedValue} />);

    const name = container.querySelector('[src="VALUE_ICON"]') as Element;

    expect(name).toBeInTheDocument();
  });

  it("should render the value heading", () => {
    const { container } = render(<ValueTile value={mockedValue} />);

    const heading = container.querySelectorAll(".text")[0] as Element;

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("VALUE_HEADING");
  });

  it("should render the value text", () => {
    const { container } = render(<ValueTile value={mockedValue} />);

    const text = container.querySelectorAll(".text")[1] as Element;

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("VALUE_TEXT");
  });
});
