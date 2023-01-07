import { IUser } from "../interfaces/IUser";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { AxiosError } from "axios";
import putUser from "../api/PutUser";

interface IUseUserProps {
  isLoading: boolean;
  error: AxiosError | null;
  updateUser: (user: IUser) => void;
}

const useUser = (): IUseUserProps => {
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
