import { render } from "@testing-library/react";
import AppError from "./AppError";

const mockError = {
  code: "ERROR_CODE",
  message: "ERROR_MESSAGE",
};

describe("AppError", () => {
  it("should render the component", () => {
    const { container } = render(<AppError error={mockError} />);
    const component = container.querySelector("#app-error") as Element;

    expect(component).toBeInTheDocument();
  });

  it("should render the error code", () => {
    const { container } = render(<AppError error={mockError} />);
    const component = container.querySelector("#app-error") as Element;

    expect(component).toHaveTextContent("ERROR_CODE");
  });

  it("should render the error message", () => {
    const { container } = render(<AppError error={mockError} />);
    const component = container.querySelector("#app-error") as Element;

    expect(component).toHaveTextContent("ERROR_MESSAGE");
  });
});
