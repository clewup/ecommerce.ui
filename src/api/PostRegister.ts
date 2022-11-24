import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IAccessToken } from "../types/IAccessToken";
import { IRegister } from "../types/IRegister";
import { IUser } from "../types/IUser";

const PostRegister = (register?: IRegister) => {
  const [data, setData] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    if (register) {
      setLoading(true);
      axios
        .post(`${apiUrls.AUTH}${apiEndpoints.USER}`, register)
        .then((res) => setData(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [register]);

  return { data, loading, error };
};
export default PostRegister;
