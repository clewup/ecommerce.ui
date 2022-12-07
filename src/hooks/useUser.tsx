import { IUser } from "../types/IUser";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { AxiosError } from "axios";
import putUser from "../api/PutUser";

const useUser = () => {
  const { setUser } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const updateUser = (user: IUser) => {
    setLoading(true);
    putUser(user)
      .then((res) => setUser(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };
  return { isLoading, error, updateUser };
};
export default useUser;
