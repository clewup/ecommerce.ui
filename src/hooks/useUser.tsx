import { IUser } from "../types/IUser";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { AxiosError } from "axios";
import putUser from "../api/PutUser";
import * as Yup from "yup";

interface IUseUserProps {
  validationSchema: Yup.ObjectSchema<any>;
  isLoading: boolean;
  error: AxiosError | null;
  updateUser: (user: IUser) => void;
}

const useUser = (): IUseUserProps => {
  const { setUser } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Must be a valid email").required("Required"),
    lineOne: Yup.string().required("Required"),
    lineTwo: Yup.string(),
    lineThree: Yup.string(),
    postcode: Yup.string()
      .matches(
        /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i,
        "Must be a valid postcode"
      )
      .required("Required"),
    city: Yup.string().required("Required"),
    county: Yup.string(),
    country: Yup.string().required("Required"),
  });

  const updateUser = (user: IUser) => {
    setLoading(true);
    putUser(user)
      .then((res) => setUser(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };
  return { validationSchema, isLoading, error, updateUser };
};
export default useUser;
