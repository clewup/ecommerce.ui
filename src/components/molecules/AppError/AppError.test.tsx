import { render } from "@testing-library/react";
import AppError from "./AppError";
import { mockedError } from "../../../data/mockData/errorData";
import renderHelper from "../../../utils/renderHelper";

describe("AppError", () => {
  it("should render the component", () => {
    const { container } = renderHelper(<AppError error={mockedError} />);
    const component = container.querySelector("#app-error") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the error code", () => {
    const { container } = renderHelper(<AppError error={mockedError} />);
    const component = container.querySelector("#app-error") as Element;

    expect(component).toHaveTextContent("ERROR_CODE");
  });

  it("should render the error message", () => {
    const { container } = renderHelper(<AppError error={mockedError} />);
    const component = container.querySelector("#app-error") as Element;

    expect(component).toHaveTextContent("ERROR_MESSAGE");
  });
});
