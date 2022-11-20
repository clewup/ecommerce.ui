import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetProductCategories = () => {
  const [data, setData] = useState<string[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrls.ECOMMERCE}${apiEndpoints.PRODUCT_CATEGORIES}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
export default GetProductCategories;
