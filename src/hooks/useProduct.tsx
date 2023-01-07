import { useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import { Guid } from "guid-typescript";
import getProductById from "../api/GetProductById";
import { AxiosError } from "axios";
import postProduct from "../api/PostProduct";
import { formatProduct } from "../components/organisms/ProductForm/utils/formatters";

interface IUseProductProps {
  product: IProduct | undefined;
  isLoading: boolean;
  error: AxiosError | null;
  getProduct: (id: Guid) => void;
  addProduct: (product: IProduct, images: string[]) => void;
}

const useProduct = (): IUseProductProps => {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const addProduct = (product: IProduct, images: string[]) => {
    const formattedProduct = formatProduct(product, images);
    setLoading(true);
    postProduct(formattedProduct)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const getProduct = (id: Guid) => {
    setLoading(true);
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return {
    product,
    isLoading,
    error,
    addProduct,
    getProduct,
  };
};
export default useProduct;
