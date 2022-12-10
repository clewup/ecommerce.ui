import { useState } from "react";
import { IProduct } from "../types/IProduct";
import { Guid } from "guid-typescript";
import getProductById from "../api/GetProductById";
import { AxiosError } from "axios";
import { IImage } from "../types/IImage";
import postProduct from "../api/PostProduct";
import * as Yup from "yup";

interface IUseProductProps {
  initialValues: IProduct;
  product: IProduct | null;
  isLoading: boolean;
  error: AxiosError | null;
  getProduct: (id: Guid) => void;
  addProduct: (product: IProduct, images: IImage[]) => void;
  validationSchema: Yup.ObjectSchema<any>;
}

const useProduct = (): IUseProductProps => {
  const [product, setProduct] = useState<IProduct | null>(null);
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

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    images: Yup.array().required(),
    description: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    pricePerUnit: Yup.number().required("Required"),
    discount: Yup.number().required("Required"),
  });

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

  const getProduct = (id: Guid) => {
    setLoading(true);
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return {
    initialValues,
    validationSchema,
    product,
    isLoading,
    error,
    addProduct,
    getProduct,
  };
};
export default useProduct;
