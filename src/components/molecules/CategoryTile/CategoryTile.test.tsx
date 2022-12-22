import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryTile from "./CategoryTile";
import userEvent from "@testing-library/user-event";
import React from "react";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("CategoryTile", () => {
  it("should render the category name", () => {
    const { container } = render(
      <Router>
        <CategoryTile category={"CATEGORY"} />
      </Router>
    );

    const name = container.querySelector(".subheading");

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("CATEGORY");
  });

  it("should navigate to the store on click", () => {
    const { container } = render(
      <Router>
        <CategoryTile category={"CATEGORY"} />
      </Router>
    );

    const tile = container.querySelector("#category-tile") as Element;

    expect(tile).toBeInTheDocument();

    userEvent.click(tile);

    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("store");
  });
});
