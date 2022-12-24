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
