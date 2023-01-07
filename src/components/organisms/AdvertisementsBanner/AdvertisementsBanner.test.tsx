import AdvertisementsBanner from "./AdvertisementsBanner";
import { screen } from "@testing-library/react";
import renderHelper from "../../../utils/renderHelper";

describe("AdvertisementsBanner", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<AdvertisementsBanner />);

    expect(
      screen.getAllByText("DISCOVER", { selector: 'button[type="button"]' })
    ).toHaveLength(3);
  });
});
