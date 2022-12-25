import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Cart from "./Cart";

describe("Cart", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <Cart />
      </Router>
    );
    const component = container.querySelector("#cart");

    expect(component).toBeInTheDocument();
  });
});
