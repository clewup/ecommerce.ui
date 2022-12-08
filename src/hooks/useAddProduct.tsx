import { useState } from "react";
import { IProduct } from "../types/IProduct";
import { AxiosError } from "axios";
import postProduct from "../api/PostProduct";
import { IImage } from "../types/IImage";

interface IUseAddProductProps {
  initialValues: IProduct;
  isLoading: boolean;
  error: AxiosError | null;
  addProduct: (product: IProduct, images: IImage[]) => void;
}

const useAddProduct = (): IUseAddProductProps => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const initialValues: IProduct = {
    name: "",
    images: [],
    description: "",
    category: "",
    pricePerUnit: 0,
    discount: 0,
  };

  const formatProduct = (values: IProduct, images: IImage[]) => {
    return {
      name: values.name,
      images: images,
      description: values.description,
      category: values.category,
      pricePerUnit: values.pricePerUnit,
      discount: values.discount,
    } as IProduct;
  };

  const addProduct = (product: IProduct, images: IImage[]) => {
    const formattedProduct = formatProduct(product, images);

    setLoading(true);
    postProduct(formattedProduct)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return {
    initialValues,
    isLoading,
    error,
    addProduct,
  };
};
export default useAddProduct;
