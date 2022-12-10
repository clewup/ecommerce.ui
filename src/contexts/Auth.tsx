import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IClaim } from "../types/IClaim";

interface IProps {
  children: JSX.Element;
}

interface IAuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  claims: IClaim[];
  setClaims: Dispatch<SetStateAction<IClaim[]>>;
  role: string | null;
  setRole: Dispatch<SetStateAction<string | null>>;
}

const initialAuthContextProps: IAuthContextProps = {
  isAuthenticated: false,
  setAuthenticated: (() => undefined) as Dispatch<any>,
  accessToken: null,
  setAccessToken: (() => undefined) as Dispatch<any>,
  claims: [],
  setClaims: (() => undefined) as Dispatch<any>,
  role: null,
  setRole: (() => undefined) as Dispatch<any>,
};

const AuthContext = createContext<IAuthContextProps>(initialAuthContextProps);

const AuthProvider = ({ children }: IProps) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [claims, setClaims] = useState<IClaim[]>([]);
  const [role, setRole] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        accessToken,
        setAccessToken,
        claims,
        setClaims,
        role,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
