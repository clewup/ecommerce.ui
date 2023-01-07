import { render, screen } from "@testing-library/react";
import ValuesBanner from "./ValuesBanner";
import renderHelper from "../../../utils/renderHelper";

describe("ValuesBanner", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<ValuesBanner />);

    expect(screen.getAllByRole("img")).toHaveLength(5);
  });
});
