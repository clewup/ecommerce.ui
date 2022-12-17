import { useState } from "react";
import { IProduct } from "../types/IProduct";
import { AxiosError } from "axios";
import getMostDiscountedProducts from "../api/GetMostDiscountedProducts";
import getMostPopularProducts from "../api/GetMostPopularProducts";

interface IUseStatistics {
  popularProducts: IProduct[];
  discountedProducts: IProduct[];
  isLoading: boolean;
  error: AxiosError | null;
  getMostDiscounted: (amount: number) => void;
  getMostPopular: (amount: number) => void;
}

const useStatistics = (): IUseStatistics => {
  const [popularProducts, setPopularProducts] = useState<IProduct[]>([]);
  const [discountedProducts, setDiscountedProducts] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const getMostDiscounted = (amount: number) => {
    setLoading(true);
    getMostDiscountedProducts(amount)
      .then((res) => setDiscountedProducts(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const getMostPopular = (amount: number) => {
    setLoading(true);
    getMostPopularProducts(amount)
      .then((res) => setPopularProducts(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return {
    popularProducts,
    discountedProducts,
    isLoading,
    error,
    getMostDiscounted,
    getMostPopular,
  };
};
export default useStatistics;
