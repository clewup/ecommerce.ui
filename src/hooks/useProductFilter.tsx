import GetProductCategories from "../api/GetProductCategories";
import GetProductVariants from "../api/GetProductVariants";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

const useProductFilter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = GetProductCategories();

  const {
    data: variants,
    loading: variantsLoading,
    error: variantsError,
  } = GetProductVariants();

  useEffect(() => {
    if (categoriesLoading || variantsLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [categoriesLoading, variantsLoading]);

  useEffect(() => {
    if (categoriesError || variantsError) {
      setError(categoriesError || variantsError);
    } else {
      setError(null);
    }
  }, [categoriesError, variantsError]);

  return { categories, variants, loading, error };
};
export default useProductFilter;
