import { screen } from "@testing-library/react";
import React from "react";
import RangeTile from "./RangeTile";
import renderHelper, {
  mockedProductContext,
} from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import { mockedRange } from "../../../types/IRange";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

const mockedUseNavigate = jest.fn();

describe("RangeTile", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<RangeTile range={mockedRange} />);

    expect(screen.getByText("RANGE_NAME")).toBeInTheDocument();
    expect(
      screen.getByText("DISCOVER", { selector: 'button[type="button"]' })
    ).toBeInTheDocument();
  });

  it("should navigate to the store on button click", () => {
    renderHelper(<RangeTile range={mockedRange} />);

    userEvent.click(
      screen.getByText("DISCOVER", { selector: 'button[type="button"]' })
    );

    expect(mockedUseNavigate).toHaveBeenCalledWith("store");
  });

  it("should update the range query on click", () => {
    renderHelper(<RangeTile range={mockedRange} />);

    userEvent.click(
      screen.getByText("DISCOVER", { selector: 'button[type="button"]' })
    );

    expect(mockedProductContext.setRangeQuery).toHaveBeenCalledWith(
      "RANGE_NAME"
    );
  });
});
