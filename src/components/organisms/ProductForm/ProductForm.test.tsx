import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import { Formik } from "formik";
import React from "react";
import ProductForm from "./ProductForm";
import renderHelper from "../../../utils/renderHelper";
import userEvent from "@testing-library/user-event";
import { mockedProduct } from "../../../types/IProduct";
import { AxiosError } from "axios";
import { productInitialValues } from "./utils/schema";

const mockedUseProduct = {
  product: mockedProduct,
  isLoading: false,
  error: null,
  getProduct: jest.fn(),
  addProduct: jest.fn(),
};

jest.mock("../../../hooks/useProduct", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseProduct;
    },
  };
});

const mockedUseImageUpload = {
  images: [],
  isLoading: false,
  error: null,
  uploadImages: jest.fn(),
  clearImages: jest.fn(),
};

jest.mock("../../../hooks/useImageUpload", () => {
  return {
    __esModule: true,
    default: () => {
      return mockedUseImageUpload;
    },
  };
});

describe("ProductForm", () => {
  it("should render the component with the expected values", () => {
    renderHelper(<ProductForm />);

    expect(
      screen.getByRole("button", { name: "Upload Images" })
    ).toBeInTheDocument();

    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Description" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Category", { selector: 'div[id*="react-select"]' })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Subcategory", { selector: 'div[id*="react-select"]' })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Range", { selector: 'div[id*="react-select"]' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("checkbox", { name: "controlled" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "XSmall" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Small" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Medium" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Large" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "XLarge" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Color" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Price" })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Discount" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Add Product" })
    ).toBeInTheDocument();
  });
});
