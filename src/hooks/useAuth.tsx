import jwt from "jwt-decode";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { IClaim } from "../types/IClaim";

interface IUseAuthProps {
  decodeAccessToken: (accessToken: string) => void;
}

const useAuth = (): IUseAuthProps => {
  const { setClaims, setRole } = useContext(AuthContext);

  const decodeAccessToken = (accessToken: string) => {
    const decodedAccessToken: object = jwt(accessToken);
    for (const [key, value] of Object.entries(decodedAccessToken)) {
      setClaims((prev: IClaim[]) => {
        return [
          ...prev,
          {
            key: key,
            value: value,
          },
        ];
      });
      if (key === "role") {
        setRole(value);
      }
    }
  };

  return { decodeAccessToken };
};
export default useAuth;
