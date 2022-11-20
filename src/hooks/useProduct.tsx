import { useState } from "react";
import { IProduct, IStock } from "../types/IProduct";
import axios, { AxiosError } from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { FormikValues } from "formik";
import { createGuid } from "../utils/CreateGuid";

const useProduct = () => {
  const [variant, setVariant] = useState("");
  const [count, setCount] = useState("0");
  const [stock, setStock] = useState<IStock[]>([]);

  // Stock is created externally.
  const initialValues = {
    name: "",
    description: "",
    category: "",
    pricePerUnit: "",
    discount: 0,
  };

  const addStock = () => {
    setStock((prev: IStock[]) => {
      return [
        ...prev,
        {
          variant,
          count: parseInt(count),
        },
      ];
    });
  };

  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const createProduct = (values: FormikValues) => {
    const payload = {
      id: createGuid(),
      name: values.name,
      description: values.description,
      category: values.category,
      stock: stock,
      pricePerUnit: parseFloat(values.pricePerUnit),
      isDiscounted: parseFloat(values.discount) > 0,
      discount: parseFloat(values.discount),
    };

    setLoading(true);
    axios
      .post(`${apiUrls.ECOMMERCE}${apiEndpoints.PRODUCT}`, payload)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return {
    initialValues,
    product,
    loading,
    error,
    variant,
    setVariant,
    count,
    setCount,
    stock,
    addStock,
    createProduct,
  };
};
export default useProduct;
