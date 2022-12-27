import { render } from "@testing-library/react";
import ValuesBanner from "./ValuesBanner";
import renderHelper from "../../../utils/renderHelper";

describe("ValuesBanner", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<ValuesBanner />);
    const component = container.querySelector("#values-banner") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the values", () => {
    const { container } = renderHelper(<ValuesBanner />);
    const values = container.querySelectorAll("#value-tile");

    expect(values).toHaveLength(5);
  });
});
