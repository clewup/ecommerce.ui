import { ILogin } from "../types/ILogin";
import postLogin from "../api/PostLogin";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/User";
import { AuthContext } from "../contexts/Auth";

const useLogin = (login: ILogin) => {
  const { setUser } = useContext(UserContext);
  const { setAuthenticated, setAccessToken } = useContext(AuthContext);
  const { data, loading, error } = postLogin(login);

  useEffect(() => {
    if (data && Object.keys(data)) {
      setUser?.(data.user);
      setAuthenticated?.(true);
      setAccessToken?.(data.accessToken);

      // Set access token in local storage.
      localStorage.setItem("AT", data.accessToken);
    }
    //eslint-disable-next-line
  }, [data]);

  return { loading, error };
};
export default useLogin;
