import { useState } from "react";
import { IRegister } from "../types/IRegister";
import postRegister from "../api/PostRegister";
import { AxiosError } from "axios";
import useLogin from "./useLogin";

interface IUseRegisterProps {
  isLoading: boolean;
  error: AxiosError | null;
  registerUser: (register: IRegister) => void;
}

const useRegister = (): IUseRegisterProps => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const { loginUser } = useLogin();

  const registerUser = (register: IRegister) => {
    postRegister(register)
      .then(() => {
        loginUser({ email: register.email, password: register.password });
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { isLoading, error, registerUser };
};
export default useRegister;
