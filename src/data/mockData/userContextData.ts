import { mockedUser } from "../../types/IUser";

export const mockedUserContext = {
  user: mockedUser,
  setUser: jest.fn(),
};
