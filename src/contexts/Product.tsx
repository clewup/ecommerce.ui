import React, { createContext, Dispatch, useState } from "react";
import { queryDefaultValues } from "../enums/defaultValues";
import { ILinkedSubcategory } from "../types/ILinkedSubcategory";

interface IProps {
  children: JSX.Element;
}

export interface IProductContextProps {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  subcategories: string[];
  setSubcategories: React.Dispatch<React.SetStateAction<string[]>>;
  linkedSubcategories: ILinkedSubcategory[];
  setLinkedSubcategories: React.Dispatch<
    React.SetStateAction<ILinkedSubcategory[]>
  >;
  ranges: string[];
  setRanges: React.Dispatch<React.SetStateAction<string[]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  categoryQuery: string;
  setCategoryQuery: React.Dispatch<React.SetStateAction<string>>;
  subcategoryQuery: string;
  setSubcategoryQuery: React.Dispatch<React.SetStateAction<string>>;
  rangeQuery: string;
  setRangeQuery: React.Dispatch<React.SetStateAction<string>>;
  priceQuery: number[];
  setPriceQuery: React.Dispatch<React.SetStateAction<number[]>>;
  saleQuery: boolean;
  setSaleQuery: React.Dispatch<React.SetStateAction<boolean>>;
  stockQuery: boolean;
  setStockQuery: React.Dispatch<React.SetStateAction<boolean>>;
  sortByQuery: string;
  setSortByQuery: React.Dispatch<React.SetStateAction<string>>;
  resetQueries: () => void;
}

const initialProductContextProps: IProductContextProps = {
  categories: [],
  setCategories: (() => undefined) as Dispatch<any>,
  subcategories: [],
  setSubcategories: (() => undefined) as Dispatch<any>,
  linkedSubcategories: [],
  setLinkedSubcategories: (() => undefined) as Dispatch<any>,
  ranges: [],
  setRanges: (() => undefined) as Dispatch<any>,
  searchQuery: queryDefaultValues.SEARCH_QUERY,
  setSearchQuery: (() => undefined) as Dispatch<any>,
  categoryQuery: queryDefaultValues.CATEGORY_QUERY,
  setCategoryQuery: (() => undefined) as Dispatch<any>,
  subcategoryQuery: queryDefaultValues.SUBCATEGORY_QUERY,
  setSubcategoryQuery: (() => undefined) as Dispatch<any>,
  rangeQuery: queryDefaultValues.RANGE_QUERY,
  setRangeQuery: (() => undefined) as Dispatch<any>,
  priceQuery: queryDefaultValues.PRICE_QUERY,
  setPriceQuery: (() => undefined) as Dispatch<any>,
  saleQuery: queryDefaultValues.SALE_QUERY,
  setSaleQuery: (() => undefined) as Dispatch<any>,
  stockQuery: queryDefaultValues.STOCK_QUERY,
  setStockQuery: (() => undefined) as Dispatch<any>,
  sortByQuery: queryDefaultValues.SORT_BY_QUERY,
  setSortByQuery: (() => undefined) as Dispatch<any>,
  resetQueries: () => null,
};

const ProductContext = createContext<IProductContextProps>(
  initialProductContextProps
);

const ProductProvider: React.FC<IProps> = ({ children }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const [linkedSubcategories, setLinkedSubcategories] = useState<
    ILinkedSubcategory[]
  >([]);
  const [ranges, setRanges] = useState<string[]>([]);

  const [searchQuery, setSearchQuery] = useState(
    queryDefaultValues.SEARCH_QUERY
  );
  const [categoryQuery, setCategoryQuery] = useState<string>(
    queryDefaultValues.CATEGORY_QUERY
  );
  const [subcategoryQuery, setSubcategoryQuery] = useState<string>(
    queryDefaultValues.SUBCATEGORY_QUERY
  );
  const [rangeQuery, setRangeQuery] = useState<string>(
    queryDefaultValues.RANGE_QUERY
  );
  const [priceQuery, setPriceQuery] = useState<number[]>(
    queryDefaultValues.PRICE_QUERY
  );
  const [saleQuery, setSaleQuery] = useState<boolean>(
    queryDefaultValues.SALE_QUERY
  );
  const [stockQuery, setStockQuery] = useState<boolean>(
    queryDefaultValues.STOCK_QUERY
  );
  const [sortByQuery, setSortByQuery] = useState<string>(
    queryDefaultValues.SORT_BY_QUERY
  );

  const resetQueries = () => {
    setSearchQuery(queryDefaultValues.SEARCH_QUERY);
    setCategoryQuery(queryDefaultValues.CATEGORY_QUERY);
    setSubcategoryQuery(queryDefaultValues.CATEGORY_QUERY);
    setRangeQuery(queryDefaultValues.RANGE_QUERY);
    setPriceQuery(queryDefaultValues.PRICE_QUERY);
    setSaleQuery(queryDefaultValues.SALE_QUERY);
    setStockQuery(queryDefaultValues.STOCK_QUERY);
    setSortByQuery(queryDefaultValues.SORT_BY_QUERY);
  };

  return (
    <ProductContext.Provider
      value={{
        categories,
        setCategories,
        subcategories,
        setSubcategories,
        linkedSubcategories,
        setLinkedSubcategories,
        ranges,
        setRanges,
        searchQuery,
        setSearchQuery,
        categoryQuery,
        setCategoryQuery,
        subcategoryQuery,
        setSubcategoryQuery,
        rangeQuery,
        setRangeQuery,
        priceQuery,
        setPriceQuery,
        saleQuery,
        setSaleQuery,
        stockQuery,
        setStockQuery,
        sortByQuery,
        setSortByQuery,
        resetQueries,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
