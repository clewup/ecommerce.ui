import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdvertisementTile from "./AdvertisementTile";
import { IAdvertisement } from "../../../types/IAdvertisement";
import renderHelper from "../../../utils/renderHelper";
import { mockedAdvertisement } from "../../../data/mockData/advertisementData";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

const mockedUseNavigate = jest.fn();

describe("AdvertisementTile", () => {
  it("should render the component", () => {
    const { container } = renderHelper(
      <AdvertisementTile advertisement={mockedAdvertisement} />
    );
    const component = container.querySelector("#advertisement-tile") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the advertisement title", () => {
    const { container } = renderHelper(
      <AdvertisementTile advertisement={mockedAdvertisement} />
    );
    const title = container.querySelector(".subheading") as Element;

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("ADVERTISEMENT_TITLE");
  });

  it("should render the advertisement caption", () => {
    const { container } = renderHelper(
      <AdvertisementTile advertisement={mockedAdvertisement} />
    );
    const caption = container.querySelector(".text") as Element;

    expect(caption).toBeInTheDocument();
    expect(caption).toHaveTextContent("ADVERTISEMENT_CAPTION");
  });

  it("should render the discover button", () => {
    const { container } = renderHelper(
      <AdvertisementTile advertisement={mockedAdvertisement} />
    );
    const button = container.querySelector('[type="button"]') as Element;

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("DISCOVER");
  });

  it("should navigate to the store on button click", () => {
    const { container } = renderHelper(
      <AdvertisementTile advertisement={mockedAdvertisement} />
    );
    const button = container.querySelector('[type="button"]') as Element;

    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("store");
  });
});
