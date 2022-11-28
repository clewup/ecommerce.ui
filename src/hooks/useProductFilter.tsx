import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import getProductVariants from "../api/GetProductVariants";
import getProductCategories from "../api/GetProductCategories";

const useProductFilter = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const [categories, setCategories] = useState();
  const [variants, setVariants] = useState();

  useEffect(() => {
    setLoading(true);
    getProductCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err));
    getProductVariants()
      .then((res) => setVariants(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    // @ts-ignore
    categories: [...new Set(categories)], // Removes duplicates from the array.
    // @ts-ignore
    variants: [...new Set(variants)], // Removes duplicates from the array.
    isLoading,
    error,
  };
};
export default useProductFilter;
