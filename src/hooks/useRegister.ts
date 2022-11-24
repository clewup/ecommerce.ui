import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { AuthContext } from "../contexts/Auth";
import { IRegister } from "../types/IRegister";
import postRegister from "../api/PostRegister";
import postLogin from "../api/PostLogin";
import { ILogin } from "../types/ILogin";

const useRegister = (register?: IRegister) => {
  const [login, setLogin] = useState<ILogin>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);
  const { setAuthenticated, setAccessToken } = useContext(AuthContext);
  const {
    data: registerData,
    loading: registerLoading,
    error: registerError,
  } = postRegister(register);
  const {
    data: loginData,
    loading: loginLoading,
    error: loginError,
  } = postLogin(login);

  useEffect(() => {
    if (registerData && register) {
      setLogin({
        email: register.email,
        password: register.password,
      });
    }
  }, [registerData]);

  useEffect(() => {
    if (loginData && Object.keys(loginData)) {
      setUser?.(loginData.user);
      setAuthenticated?.(true);
      setAccessToken?.(loginData.accessToken);

      // Set access token in local storage.
      localStorage.setItem("AT", loginData.accessToken);
    }
    //eslint-disable-next-line
  }, [loginData]);

  useEffect(() => {
    if (registerLoading || loginLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [registerLoading, loginLoading]);

  return { isLoading, error };
};
export default useRegister;
