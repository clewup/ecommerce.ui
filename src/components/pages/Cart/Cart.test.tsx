import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Cart from "./Cart";
import renderHelper from "../../../utils/renderHelper";

describe("Cart", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<Cart />);
    const component = container.querySelector("#cart");

    expect(component).toBeInTheDocument();
  });
});
