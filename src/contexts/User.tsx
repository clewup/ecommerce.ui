import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IUser } from "../interfaces/IUser";

interface IProps {
  children: JSX.Element;
}

interface IUserContextProps {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}

const initialUserContextProps: IUserContextProps = {
  user: undefined,
  setUser: (() => undefined) as Dispatch<any>,
};

const UserContext = createContext<IUserContextProps>(initialUserContextProps);

const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
