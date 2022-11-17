import { useEffect, useState } from "react";
import { ILogin } from "../types/ILogin";
import axios, { AxiosError } from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IUser } from "../types/IUser";

const PostLogin = (login: ILogin) => {
  const [data, setData] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    if (login && Object.values(login)) {
      setLoading(true);
      axios
        .post(`${apiUrls.AUTH}${apiEndpoints.LOGIN}`, login)
        .then((res) => setData(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [login]);

  return { data, loading, error };
};
export default PostLogin;
