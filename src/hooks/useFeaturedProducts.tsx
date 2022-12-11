import { useState } from "react";
import { IProduct } from "../types/IProduct";
import { AxiosError } from "axios";
import getMostDiscountedProducts from "../api/GetMostDiscountedProducts";

interface IUseFeaturedProducts {
  products: IProduct[] | null;
  isLoading: boolean;
  error: AxiosError | null;
  getFeaturedProducts: (amount: number) => void;
}

const useFeaturedProducts = (): IUseFeaturedProducts => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const getFeaturedProducts = (amount: number) => {
    setLoading(true);
    getMostDiscountedProducts(amount)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { products, isLoading, error, getFeaturedProducts };
};
export default useFeaturedProducts;
