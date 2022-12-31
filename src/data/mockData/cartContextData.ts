import { Guid } from "guid-typescript";

export const mockedCartContext = {
  cart: {
    id: Guid.create(),
    userId: Guid.create(),
    products: [
      {
        id: Guid.create(),
        name: "PRODUCT_NAME",
        images: ["HTTPS://IMAGE_URL.JPG"] as string[],
        description: "PRODUCT_DESCRIPTION",
        category: "PRODUCT_CATEGORY",
        subcategory: "PRODUCT_SUBCATEGORY",
        range: "PRODUCT_RANGE",
        color: "PRODUCT_COLOR",
        price: 12.34,
        discountedPrice: undefined,
        totalSavings: undefined,
        discount: 0,
      },
      {
        id: Guid.create(),
        name: "PRODUCT_NAME",
        images: ["HTTPS://IMAGE_URL.JPG"] as string[],
        description: "PRODUCT_DESCRIPTION",
        category: "PRODUCT_CATEGORY",
        subcategory: "PRODUCT_SUBCATEGORY",
        range: "PRODUCT_RANGE",
        color: "PRODUCT_COLOR",
        price: 56.78,
        discountedPrice: undefined,
        totalSavings: undefined,
        discount: 0,
      },
    ],
    total: 69.12,
    discountedTotal: undefined,
    totalSavings: undefined,
  },
  setCart: jest.fn(),
  isLoading: false,
  setLoading: jest.fn(),
};
