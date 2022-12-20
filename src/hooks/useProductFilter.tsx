import { useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { ProductContext } from "../contexts/Product";
import { IProduct } from "../types/IProduct";
import getProductsSearch from "../api/GetProductsSearch";
import { useSearchParams } from "react-router-dom";

interface IUseProductFilterProps {
  products: IProduct[];
  isLoading: boolean;
  error: AxiosError | null;
}

const useProductFilter = (): IUseProductFilterProps => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [query, setQuery] = useState("");

  const {
    searchQuery,
    categoryQuery,
    priceQuery,
    saleQuery,
    stockQuery,
    sortByQuery,
  } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [searchParams]);

  const getProducts = () => {
    setLoading(true);
    getProductsSearch(query)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const formatQuery = () => {
    setLoading(true);
    let formattedQuery = "";
    if (searchQuery) {
      formattedQuery = `&SearchTerm=${searchQuery}`;
    }
    if (categoryQuery && categoryQuery !== "all") {
      formattedQuery = formattedQuery.concat(`&Category=${categoryQuery}`);
    }
    if (priceQuery) {
      formattedQuery = formattedQuery.concat(
        `&MinPrice=${priceQuery[0]}&MaxPrice=${priceQuery[1]}`
      );
    }
    if (saleQuery) {
      formattedQuery = formattedQuery.concat(`&OnSale=${saleQuery}`);
    }
    if (stockQuery) {
      formattedQuery = formattedQuery.concat(`&InStock=${stockQuery}`);
    }
    if (sortByQuery && sortByQuery !== "any") {
      const values = sortByQuery.split(" ");
      formattedQuery = formattedQuery.concat(
        `&SortBy=${values[0]}&SortVariation=${values[1]}`
      );
    }

    formattedQuery = "?" + formattedQuery.slice(1);
    setQuery(formattedQuery);
    setSearchParams(formattedQuery);
    setLoading(false);
  };

  useEffect(() => {
    formatQuery();
    // eslint-disable-next-line
  }, [
    searchQuery,
    categoryQuery,
    priceQuery,
    saleQuery,
    stockQuery,
    sortByQuery,
  ]);

  return {
    products,
    isLoading,
    error,
  };
};
export default useProductFilter;
