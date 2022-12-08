import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { AuthContext } from "../contexts/Auth";
import { IRegister } from "../types/IRegister";
import postRegister from "../api/PostRegister";
import postLogin from "../api/PostLogin";
import { ILogin } from "../types/ILogin";
import { AxiosError, AxiosResponse } from "axios";
import { IAccessToken } from "../types/IAccessToken";

interface IUseRegisterProps {
  isLoading: boolean;
  error: AxiosError | null;
}

const useRegister = (register?: IRegister): IUseRegisterProps => {
  const [login, setLogin] = useState<ILogin>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const { setUser } = useContext(UserContext);
  const { setAuthenticated, setAccessToken } = useContext(AuthContext);

  useEffect(() => {
    if (register) {
      postRegister(register)
        .then(() => {
          setLogin({
            email: register.email,
            password: register.password,
          });
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [register]);

  useEffect(() => {
    if (login) {
      setLoading(true);
      postLogin(login)
        .then((res: AxiosResponse<IAccessToken>) => {
          setUser(res.data.user);
          setAccessToken(res.data.accessToken);
          setAuthenticated(true);
          localStorage.setItem("AT", res.data.accessToken);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
    //eslint-disable-next-line
  }, [login]);

  return { isLoading, error };
};
export default useRegister;
