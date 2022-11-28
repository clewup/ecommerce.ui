import { ILogin } from "../types/ILogin";
import postLogin from "../api/PostLogin";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { AuthContext } from "../contexts/Auth";
import { AxiosError, AxiosResponse } from "axios";
import { IAccessToken } from "../types/IAccessToken";

const useLogin = (login?: ILogin) => {
  const { setUser } = useContext(UserContext);
  const { setAuthenticated, setAccessToken } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    if (login) {
      setLoading(true);
      postLogin(login)
        .then((res: AxiosResponse<IAccessToken>) => {
          setUser?.(res.data.user);
          setAccessToken?.(res.data.accessToken);
          setAuthenticated?.(true);
          localStorage.setItem("AT", res.data.accessToken);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
    //eslint-disable-next-line
  }, [login]);

  return { isLoading, error };
};
export default useLogin;
