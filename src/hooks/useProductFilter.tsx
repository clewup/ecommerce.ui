import { useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { ProductContext } from "../contexts/Product";
import { IProduct } from "../types/IProduct";
import getProducts from "../api/GetProducts";

interface IUseProductFilterProps {
  products: IProduct[];
  filteredProducts: IProduct[];
  isLoading: boolean;
  error: AxiosError | null;
}

const useProductFilter = (): IUseProductFilterProps => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const { searchQuery, categoryQuery, priceQuery, saleQuery } =
    useContext(ProductContext);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const filterBySearch = (joinedFilter: any[]) => {
    return joinedFilter.filter(
      (product: IProduct) => new RegExp(searchQuery, "i").test(product.name) // Case insensitive query.
    );
  };

  const filterByCategory = (joinedFilter: any[]) => {
    if (categoryQuery && categoryQuery !== "all") {
      return joinedFilter.filter(
        (product: IProduct) => product.category === categoryQuery
      );
    } else {
      return joinedFilter;
    }
  };

  const filterByPrice = (joinedFilter: any[]) => {
    if (priceQuery && priceQuery.length === 2) {
      return joinedFilter.filter(
        (product: IProduct) =>
          product.price >= priceQuery[0]! && product.price <= priceQuery[1]!
      );
    } else {
      return joinedFilter;
    }
  };

  const filterBySale = (joinedFilter: any[]) => {
    if (saleQuery) {
      return joinedFilter.filter((product: IProduct) => product.discount);
    } else {
      return joinedFilter;
    }
  };

  useEffect(() => {
    let joinedFilter = products;
    joinedFilter = filterBySearch(joinedFilter);
    joinedFilter = filterByCategory(joinedFilter);
    joinedFilter = filterByPrice(joinedFilter);
    joinedFilter = filterBySale(joinedFilter);
    setFilteredProducts(joinedFilter);
    // eslint-disable-next-line
  }, [searchQuery, categoryQuery, priceQuery, saleQuery]);

  return {
    products,
    filteredProducts,
    isLoading,
    error,
  };
};
export default useProductFilter;
