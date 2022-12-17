import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IClaim } from "../types/IClaim";

interface IProps {
  children: JSX.Element;
}

interface IAuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  claims: IClaim[];
  setClaims: Dispatch<SetStateAction<IClaim[]>>;
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
}

const initialAuthContextProps: IAuthContextProps = {
  isAuthenticated: false,
  setAuthenticated: (() => undefined) as Dispatch<any>,
  accessToken: "",
  setAccessToken: (() => undefined) as Dispatch<any>,
  claims: [],
  setClaims: (() => undefined) as Dispatch<any>,
  role: "",
  setRole: (() => undefined) as Dispatch<any>,
};

const AuthContext = createContext<IAuthContextProps>(initialAuthContextProps);

const AuthProvider = ({ children }: IProps) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [claims, setClaims] = useState<IClaim[]>([]);
  const [role, setRole] = useState<string>("");

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
