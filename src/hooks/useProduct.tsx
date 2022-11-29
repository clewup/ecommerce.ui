import { useEffect, useState } from "react";
import { IProduct } from "../types/IProduct";
import { Guid } from "guid-typescript";
import getProductById from "../api/GetProductById";
import { AxiosError } from "axios";

const useProduct = (id: Guid) => {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    if (id && !product) {
      setLoading(true);
      getProductById(id)
        .then((res) => setProduct(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return { product, isLoading, error };
};
export default useProduct;
