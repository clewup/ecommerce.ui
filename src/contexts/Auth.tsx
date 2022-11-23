import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IProps {
  children: JSX.Element;
}

interface AuthContextProps {
  isAuthenticated?: boolean;
  setAuthenticated?: Dispatch<SetStateAction<boolean>>;
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string | undefined>>;
}

const AuthContext = createContext<AuthContextProps>({});

const AuthProvider = ({ children }: IProps) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string>();

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, accessToken, setAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
