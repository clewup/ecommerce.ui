import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IProps {
  children: JSX.Element;
}

interface IAuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
}

const initialAuthContextProps: IAuthContextProps = {
  isAuthenticated: false,
  setAuthenticated: (() => undefined) as Dispatch<any>,
  accessToken: null,
  setAccessToken: (() => undefined) as Dispatch<any>,
};

const AuthContext = createContext<IAuthContextProps>(initialAuthContextProps);

const AuthProvider = ({ children }: IProps) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, accessToken, setAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
