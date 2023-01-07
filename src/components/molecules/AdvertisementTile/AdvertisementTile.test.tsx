import { screen } from "@testing-library/react";
import React from "react";
import AdvertisementTile from "./AdvertisementTile";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import { mockedAdvertisement } from "./data/mockData";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

const mockedUseNavigate = jest.fn();

describe("AdvertisementTile", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<AdvertisementTile advertisement={mockedAdvertisement} />);

    expect(screen.getByText("ADVERTISEMENT_TITLE")).toBeInTheDocument();
    expect(screen.getByText("ADVERTISEMENT_CAPTION")).toBeInTheDocument();
    expect(screen.getByText("DISCOVER", { selector: 'button[type="button"]' }));
  });

  it("should navigate to the store on button click", () => {
    renderHelper(<AdvertisementTile advertisement={mockedAdvertisement} />);

    userEvent.click(
      screen.getByText("DISCOVER", { selector: 'button[type="button"]' })
    );

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("store");
  });
});
