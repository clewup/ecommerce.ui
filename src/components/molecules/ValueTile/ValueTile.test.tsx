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

  it("should render the value name", () => {
    const { container } = render(<ValueTile value={mockedValue} />);

    const name = container.querySelector(".text") as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("VALUE_TEXT");
  });

  it("should render the value tooltip", () => {
    const { container } = render(<ValueTile value={mockedValue} />);

    const name = container.querySelector(
      '[aria-label="VALUE_TOOLTIP"]'
    ) as Element;

    expect(name).toBeInTheDocument();
  });
});
