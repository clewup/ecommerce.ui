import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdvertisementTile from "./AdvertisementTile";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const mockedUsedNavigate = jest.fn();

const mockAdvertisement = {
  title: "ADVERTISEMENT_TITLE",
  caption: "ADVERTISEMENT_CAPTION",
  image: "ADVERTISEMENT_IMAGE",
  buttonText: "ADVERTISEMENT_BUTTON_TEXT",
  onClick: () => mockedUsedNavigate("store"),
};

describe("AdvertisementTile", () => {
  it("should render the advertisement title", () => {
    const { container } = render(
      <Router>
        <AdvertisementTile advertisement={mockAdvertisement} />
      </Router>
    );

    const title = container.querySelector(".subheading") as Element;

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("ADVERTISEMENT_TITLE");
  });

  it("should render the advertisement caption", () => {
    const { container } = render(
      <Router>
        <AdvertisementTile advertisement={mockAdvertisement} />
      </Router>
    );

    const caption = container.querySelector(".text") as Element;

    expect(caption).toBeInTheDocument();
    expect(caption).toHaveTextContent("ADVERTISEMENT_CAPTION");
  });

  it("should render the advertisement button", () => {
    const { container } = render(
      <Router>
        <AdvertisementTile advertisement={mockAdvertisement} />
      </Router>
    );

    const button = container.querySelector('[type="button"]') as Element;

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("ADVERTISEMENT_BUTTON_TEXT");
  });

  it("should navigate to the store on button click", () => {
    const { container } = render(
      <Router>
        <AdvertisementTile advertisement={mockAdvertisement} />
      </Router>
    );

    const button = container.querySelector('[type="button"]') as Element;

    userEvent.click(button);

    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("store");
  });
});
