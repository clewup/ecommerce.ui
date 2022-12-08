import { useEffect, useState } from "react";
import { IProduct } from "../types/IProduct";
import { AxiosError } from "axios";
import { createGuid } from "../utils/CreateGuid";
import postProduct from "../api/PostProduct";

interface IUseAddProductProps {
  initialValues: IProduct;
  isLoading: boolean;
  error: AxiosError | null;
  formatProduct: (values: IProduct) => IProduct;
}

const useAddProduct = (product?: IProduct): IUseAddProductProps => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const initialValues: IProduct = {
    name: "",
    description: "",
    category: "",
    pricePerUnit: 0,
    discount: 0,
  };

  const formatProduct = (values: IProduct) => {
    return {
      id: createGuid(),
      name: values.name,
      description: values.description,
      category: values.category,
      pricePerUnit: values.pricePerUnit,
      discount: values.discount,
    } as IProduct;
  };

  useEffect(() => {
    if (product) {
      setLoading(true);
      postProduct(product)
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [product]);

  return {
    initialValues,
    isLoading,
    error,
    formatProduct,
  };
};
export default useAddProduct;
