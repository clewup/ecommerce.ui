import { useState } from "react";
import { IProduct } from "../types/IProduct";
import { Guid } from "guid-typescript";
import getProductById from "../api/GetProductById";
import { AxiosError } from "axios";
import postProduct from "../api/PostProduct";
import * as Yup from "yup";
import { createGuid } from "../utils/createGuid";

interface IUseProductProps {
  initialValues: IProduct;
  product: IProduct;
  isLoading: boolean;
  error: AxiosError | null;
  getProduct: (id: Guid) => void;
  addProduct: (product: IProduct, images: string[]) => void;
  validationSchema: Yup.ObjectSchema<any>;
}

const useProduct = (): IUseProductProps => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const initialValues: IProduct = {
    id: createGuid(),
    name: "",
    description: "",
    color: "",
    images: [],

    category: "",
    subcategory: "",
    range: "",

    oneSize: true,
    sizes: [],
    price: 0,
    discount: 0,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    images: Yup.array()
      .of(Yup.string())
      .min(1, "Must be at least one image.")
      .required("Required"),
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
      .moreThan(0, "Must be 0 or greater")
      .lessThan(75, "Must be less than 75")
      .test("is-decimal", "Maximum two decimal places", (value: any) => {
        if (value !== undefined) {
          return /^[0-9]*(\.[0-9]{0,2})?$/.test(value);
        }
        return true;
      })
      .required("Required"),
  });

  const formatProduct = (values: IProduct, images: string[]) => {
    return {
      id: values.id,
      name: values.name,
      description: values.description,
      color: values.color,
      images: images,

      category: values.category,
      subcategory: values.subcategory,
      range: values.range,

      oneSize: values.oneSize,
      sizes: values.sizes,
      price: values.price,
      discount: values.discount,
    } as IProduct;
  };

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
