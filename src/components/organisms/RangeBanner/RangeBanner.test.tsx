import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import RangeBanner from "./RangeBanner";
import renderHelper from "../../../utils/renderHelper";

describe("RangeBanner", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<RangeBanner />);

    expect(
      screen.getAllByText("DISCOVER", {
        selector: 'button[type="button"]',
      })
    ).toHaveLength(3);
  });
});
