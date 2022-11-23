import { IUser } from "./IUser";

export interface IAccessToken {
  accessToken: string;
  user: IUser;
}
