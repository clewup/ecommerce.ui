import AdvertisementsBanner from "./AdvertisementsBanner";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import renderHelper from "../../../utils/renderHelper";

describe("AdvertisementsBanner", () => {
  it("should render the component with the expected values", () => {
    const { container } = renderHelper(<AdvertisementsBanner />);
    const advertisements = container.querySelectorAll("#advertisement-tile");

    expect(advertisements).toHaveLength(3);
  });
});
