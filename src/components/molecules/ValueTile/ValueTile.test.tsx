import { render } from "@testing-library/react";
import React from "react";
import ValueTile from "./ValueTile";

describe("ValueTile", () => {
  it("should render the value icon", () => {
    const { container } = render(
      <ValueTile
        icon={"VALUE_ICON"}
        text={"VALUE_TEXT"}
        tooltip={"VALUE_TOOLTIP"}
      />
    );

    const name = container.querySelector('[src="VALUE_ICON"]');

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

    const name = container.querySelector(".text");

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

    const name = container.querySelector('[aria-label="VALUE_TOOLTIP"]');

    expect(name).toBeInTheDocument();
  });
});
