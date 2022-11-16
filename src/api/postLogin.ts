import { useEffect, useState } from "react";
import { ILogin } from "../types/ILogin";
import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const PostLogin = (login: ILogin) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .post(`${apiUrls.AUTH}${apiEndpoints.LOGIN}`, login)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [login]);

  return { data, loading, error };
};
export default PostLogin;
