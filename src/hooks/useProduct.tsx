import { useState } from "react";
import { IProduct } from "../types/IProduct";
import { Guid } from "guid-typescript";
import getProductById from "../api/GetProductById";
import { AxiosError } from "axios";

interface IUseProductProps {
  product: IProduct | null;
  isLoading: boolean;
  error: AxiosError | null;
  getProduct: (id: Guid) => void;
}

const useProduct = (): IUseProductProps => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const getProduct = (id: Guid) => {
    setLoading(true);
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { product, isLoading, error, getProduct };
};
export default useProduct;
