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
  product: IProduct;
  isLoading: boolean;
  error: AxiosError | null;
  getProduct: (id: Guid) => void;
  addProduct: (product: IProduct, images: IImage[]) => void;
  validationSchema: Yup.ObjectSchema<any>;
}

const useProduct = (): IUseProductProps => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const initialValues: IProduct = {
    id: Guid.create(),
    name: "",
    images: [],
    description: "",
    category: "",
    range: "",
    color: "",
    stock: 0,
    price: 0,
    discount: 0,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    images: Yup.array().required("Required"),
    description: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    range: Yup.string().required("Required"),
    color: Yup.string().required("Required"),
    stock: Yup.number()
      .integer("Must be a whole number")
      .positive("Must be greater than 0")
      .required("Required"),
    price: Yup.number()
      .positive("Must be greater than 0")
      .test("is-decimal", "Maximum two decimal places", (value: any) => {
        if (value !== undefined) {
          return /^[0-9]*(\.[0-9]{0,2})?$/.test(value);
        }
        return true;
      })
      .required("Required"),
    discount: Yup.number()
      .moreThan(-1, "Must be 0 or greater")
      .test("is-decimal", "Maximum two decimal places", (value: any) => {
        if (value !== undefined) {
          return /^[0-9]*(\.[0-9]{0,2})?$/.test(value);
        }
        return true;
      })
      .required("Required"),
  });

  const formatProduct = (values: IProduct, images: IImage[]) => {
    return {
      id: values.id,
      name: values.name,
      images: images,
      description: values.description,
      category: values.category,
      range: values.range,
      color: values.color,
      stock: values.stock,
      price: values.price,
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
