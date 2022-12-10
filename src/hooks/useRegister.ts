import { useState } from "react";
import { IRegister } from "../types/IRegister";
import postRegister from "../api/PostRegister";
import { AxiosError } from "axios";
import useLogin from "./useLogin";
import * as Yup from "yup";

interface IUseRegisterProps {
  isLoading: boolean;
  error: AxiosError | null;
  registerUser: (register: IRegister) => void;
  validationSchema: Yup.ObjectSchema<any>;
}

const useRegister = (): IUseRegisterProps => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const { loginUser } = useLogin();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email()
      .min(5, "Must be 5 at least characters.")
      .max(20, "Must be less than 20 characters.")
      .required("Required"),
    password: Yup.string()
      .min(5, "Must be at least 5 characters.")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const registerUser = (register: IRegister) => {
    postRegister(register)
      .then(() => {
        loginUser({ email: register.email, password: register.password });
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { isLoading, error, validationSchema, registerUser };
};
export default useRegister;
