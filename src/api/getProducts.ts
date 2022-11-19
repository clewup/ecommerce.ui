import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IProduct } from "../types/IProduct";

const GetProducts = () => {
  const [data, setData] = useState<IProduct[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .post(`${apiUrls.ECOMMERCE}${apiEndpoints.PRODUCT}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
export default GetProducts;
