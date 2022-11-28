import { useEffect, useState } from "react";
import { IProduct, IStock } from "../types/IProduct";
import { AxiosError } from "axios";
import { FormikValues } from "formik";
import { createGuid } from "../utils/CreateGuid";
import postProduct from "../api/PostProduct";
import getProducts from "../api/GetProducts";

const useProduct = (product?: IProduct) => {
  const [products, setProducts] = useState<IProduct[]>();

  const [variant, setVariant] = useState("");
  const [count, setCount] = useState("0");
  const [stock, setStock] = useState<IStock[]>([]);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const initialValues = {
    name: "",
    description: "",
    category: "",
    pricePerUnit: "",
    discount: 0,
  };

  const formatProduct = (values: FormikValues) => {
    return {
      id: createGuid(),
      name: values.name,
      description: values.description,
      category: values.category,
      stock: stock,
      pricePerUnit: parseFloat(values.pricePerUnit),
      isDiscounted: parseFloat(values.discount) > 0,
      discount: parseFloat(values.discount),
    };
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

  useEffect(() => {
    if (product) {
      setLoading(true);
      postProduct(product)
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [product]);

  return {
    products,
    initialValues,
    isLoading,
    error,
    variant,
    setVariant,
    count,
    setCount,
    stock,
    addStock,
    formatProduct,
  };
};
export default useProduct;
