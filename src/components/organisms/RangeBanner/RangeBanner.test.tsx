import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import RangeBanner from "./RangeBanner";
import renderHelper from "../../../utils/renderHelper";

describe("RangeBanner", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<RangeBanner />);
    const component = container.querySelector("#range-banner");

    expect(component).toBeInTheDocument();
  });

  it("should render three ranges", () => {
    const { container } = renderHelper(<RangeBanner />);
    const ranges = container.querySelectorAll("#range-tile");

    expect(ranges).toHaveLength(3);
  });
});
