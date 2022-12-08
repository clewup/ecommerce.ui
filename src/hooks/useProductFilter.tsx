import { useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import getProductCategories from "../api/GetProductCategories";
import { ProductContext } from "../contexts/Product";
import { IProduct } from "../types/IProduct";
import getProducts from "../api/GetProducts";

const useProductFilter = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const {
    searchQuery,
    categoryQuery,
    priceQuery,
    //stockQuery,
    saleQuery,
  } = useContext(ProductContext);

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

  useEffect(() => {
    setLoading(true);
    getProductCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err));
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
    if (priceQuery) {
      return joinedFilter.filter(
        (product: IProduct) =>
          product.pricePerUnit >= priceQuery[0] &&
          product.pricePerUnit <= priceQuery[1]
      );
    } else {
      return joinedFilter;
    }
  };

  // TODO: Add stock query

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
    //joinedFilter = filterByStock(joinedFilter);
    joinedFilter = filterBySale(joinedFilter);
    setFilteredProducts(joinedFilter);
    // eslint-disable-next-line
  }, [
    searchQuery,
    categoryQuery,
    priceQuery,
    //stockQuery,
    saleQuery,
  ]);

  return {
    products,
    filteredProducts,
    // @ts-ignore
    categories: [...new Set(categories)], // Removes duplicates from the array.
    // @ts-ignore
    isLoading,
    error,
  };
};
export default useProductFilter;
