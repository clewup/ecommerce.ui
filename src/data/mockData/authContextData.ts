import { IClaim } from "../../types/IClaim";

export const mockedAuthContext = {
  isAuthenticated: true,
  setAuthenticated: jest.fn(),
  accessToken: "ACCESS_TOKEN",
  setAccessToken: jest.fn(),
  claims: [] as IClaim[],
  setClaims: jest.fn(),
  role: "ROLE",
  setRole: jest.fn(),
};

export const mockedDeveloperAuthContext = {
  isAuthenticated: true,
  setAuthenticated: jest.fn(),
  accessToken: "ACCESS_TOKEN",
  setAccessToken: jest.fn(),
  claims: [] as IClaim[],
  setClaims: jest.fn(),
  role: "Developer",
  setRole: jest.fn(),
};

export const mockedEmployeeAuthContext = {
  isAuthenticated: true,
  setAuthenticated: jest.fn(),
  accessToken: "ACCESS_TOKEN",
  setAccessToken: jest.fn(),
  claims: [] as IClaim[],
  setClaims: jest.fn(),
  role: "Employee",
  setRole: jest.fn(),
};
