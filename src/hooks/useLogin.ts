import { ILogin } from "../types/ILogin";
import postLogin from "../api/PostLogin";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { AuthContext } from "../contexts/Auth";
import { AxiosError, AxiosResponse } from "axios";
import { IAccessToken } from "../types/IAccessToken";
import useAuth from "./useAuth";
import * as Yup from "yup";

interface IUseLoginProps {
  isLoading: boolean;
  error: AxiosError | null;
  loginUser: (login: ILogin) => void;
  validationSchema: Yup.ObjectSchema<any>;
}

const useLogin = (): IUseLoginProps => {
  const { setUser } = useContext(UserContext);
  const { setAuthenticated, setAccessToken } = useContext(AuthContext);
  const { decodeAccessToken } = useAuth();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required"),
  });

  const loginUser = (login: ILogin) => {
    setLoading(true);
    postLogin(login)
      .then((res: AxiosResponse<IAccessToken>) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
        decodeAccessToken(res.data.accessToken);
        setAuthenticated(true);
        localStorage.setItem("AT", res.data.accessToken);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { isLoading, error, validationSchema, loginUser };
};
export default useLogin;
