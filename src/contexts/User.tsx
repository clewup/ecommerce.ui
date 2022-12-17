import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IUser } from "../types/IUser";

interface IProps {
  children: JSX.Element;
}

interface IUserContextProps {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

const initialUserContextProps: IUserContextProps = {
  user: {} as IUser,
  setUser: (() => undefined) as Dispatch<any>,
};

const UserContext = createContext<IUserContextProps>(initialUserContextProps);

const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
