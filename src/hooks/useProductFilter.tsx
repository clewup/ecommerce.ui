import { useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { ProductContext } from "../contexts/Product";
import { IProduct } from "../types/IProduct";
import getProductsSearch from "../api/GetProductsSearch";
import { queryDefaultValues } from "../enums/defaultValues";

interface IUseProductFilterProps {
  products: IProduct[];
  isLoading: boolean;
  isQuerying: boolean;
  error: AxiosError | null;
}

const useProductFilter = (): IUseProductFilterProps => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isQuerying, setQuerying] = useState(false);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [query, setQuery] = useState("");

  const {
    searchQuery,
    categoryQuery,
    priceQuery,
    saleQuery,
    stockQuery,
    sortByQuery,
    rangeQuery,
  } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [query]);

  const getProducts = () => {
    setLoading(true);
    getProductsSearch(query)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const formatQuery = () => {
    setQuerying(true);
    let formattedQuery = "";
    if (searchQuery) {
      formattedQuery = `&SearchTerm=${searchQuery}`;
    }
    if (categoryQuery && categoryQuery !== queryDefaultValues.CATEGORY_QUERY) {
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
    if (sortByQuery && sortByQuery !== queryDefaultValues.SORT_BY_QUERY) {
      const values = sortByQuery.split(" ");
      formattedQuery = formattedQuery.concat(
        `&SortBy=${values[0]}&SortVariation=${values[1]}`
      );
    }
    if (rangeQuery && rangeQuery !== queryDefaultValues.RANGE_QUERY) {
      formattedQuery = formattedQuery.concat(`&Range=${rangeQuery}`);
    }

    formattedQuery = "?" + formattedQuery.slice(1);
    setQuery(formattedQuery);
    setQuerying(false);
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
    rangeQuery,
  ]);

  return {
    products,
    isLoading,
    isQuerying,
    error,
  };
};
export default useProductFilter;
