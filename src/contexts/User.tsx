import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IUser } from "../types/IUser";

interface IProps {
  children: JSX.Element;
}

interface IUserContextProps {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

const initialUserContextProps: IUserContextProps = {
  user: null,
  setUser: (() => undefined) as Dispatch<any>,
};

const UserContext = createContext<IUserContextProps>(initialUserContextProps);

const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
