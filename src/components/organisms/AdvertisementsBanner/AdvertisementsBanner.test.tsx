import AdvertisementsBanner from "./AdvertisementsBanner";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("AdvertisementsBanner", () => {
  it("should render the component", () => {
    const { container } = render(
      <Router>
        <AdvertisementsBanner />
      </Router>
    );
    const component = container.querySelector(
      "#advertisement-banner"
    ) as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render three advertisements", () => {
    const { container } = render(
      <Router>
        <AdvertisementsBanner />
      </Router>
    );
    const advertisements = document.querySelectorAll("#advertisement-tile");

    expect(advertisements).toHaveLength(3);
  });
});
