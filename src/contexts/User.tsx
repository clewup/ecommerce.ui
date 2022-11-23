import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IUser } from "../types/IUser";

interface IProps {
  children: JSX.Element;
}

interface UserContextProps {
  user?: IUser;
  setUser?: Dispatch<SetStateAction<IUser | undefined>>;
}

const UserContext = createContext<UserContextProps>({});

const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
