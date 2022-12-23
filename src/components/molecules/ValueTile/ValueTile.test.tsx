import { render } from "@testing-library/react";
import React from "react";
import ValueTile from "./ValueTile";

describe("ValueTile", () => {
  it("should render the component", () => {
    const { container } = render(
      <ValueTile
        icon={"VALUE_ICON"}
        text={"VALUE_TEXT"}
        tooltip={"VALUE_TOOLTIP"}
      />
    );

    const component = container.querySelector("#value-tile") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the value icon", () => {
    const { container } = render(
      <ValueTile
        icon={"VALUE_ICON"}
        text={"VALUE_TEXT"}
        tooltip={"VALUE_TOOLTIP"}
      />
    );

    const name = container.querySelector('[src="VALUE_ICON"]') as Element;

    expect(name).toBeInTheDocument();
  });

  it("should render the value name", () => {
    const { container } = render(
      <ValueTile
        icon={"VALUE_ICON"}
        text={"VALUE_TEXT"}
        tooltip={"VALUE_TOOLTIP"}
      />
    );

    const name = container.querySelector(".text") as Element;

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("VALUE_TEXT");
  });

  it("should render the value tooltip", () => {
    const { container } = render(
      <ValueTile
        icon={"VALUE_ICON"}
        text={"VALUE_TEXT"}
        tooltip={"VALUE_TOOLTIP"}
      />
    );

    const name = container.querySelector(
      '[aria-label="VALUE_TOOLTIP"]'
    ) as Element;

    expect(name).toBeInTheDocument();
  });
});
