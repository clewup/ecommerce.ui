import { ILogin } from "../types/ILogin";
import postLogin from "../api/PostLogin";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/User";

const useLogin = (login: ILogin) => {
  const { setAuthenticated, setUser } = useContext(UserContext);
  const { data, loading, error } = postLogin(login);

  useEffect(() => {
    if (data && Object.keys(data)) {
      setUser?.(data);
      setAuthenticated?.(true);
    }
    //eslint-disable-next-line
  }, [data]);

  return { loading, error };
};
export default useLogin;
