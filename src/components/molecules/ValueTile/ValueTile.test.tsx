import { screen } from "@testing-library/react";
import React from "react";
import ValueTile from "./ValueTile";
import renderHelper from "../../../utils/renderHelper";
import { mockedValue } from "../../../types/IValue";

describe("ValueTile", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<ValueTile value={mockedValue} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", "VALUE_ICON");
    expect(screen.getByText("VALUE_HEADING")).toBeInTheDocument();
    expect(screen.getByText("VALUE_TEXT")).toBeInTheDocument();
  });
});
