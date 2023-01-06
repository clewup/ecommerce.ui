import { screen } from "@testing-library/react";
import AppError from "./AppError";
import renderHelper from "../../../utils/renderHelper";

describe("AppError", () => {
  it("should render the component with the expected values", async () => {
    renderHelper(
      <AppError error={{ code: "ERROR_CODE", message: "ERROR_MESSAGE" }} />
    );

    expect(screen.getByText("ERROR_CODE")).toBeInTheDocument();
    expect(screen.getByText("ERROR_MESSAGE")).toBeInTheDocument();
  });
});
