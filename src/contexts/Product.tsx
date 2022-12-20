import React, { createContext, Dispatch, useState } from "react";
import { queryDefaultValues } from "../enums/defaultValues";

interface IProps {
  children: JSX.Element;
}

export interface IProductContextProps {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  categoryQuery: string;
  setCategoryQuery: React.Dispatch<React.SetStateAction<string>>;
  priceQuery: number[];
  setPriceQuery: React.Dispatch<React.SetStateAction<number[]>>;
  saleQuery: boolean;
  setSaleQuery: React.Dispatch<React.SetStateAction<boolean>>;
  stockQuery: boolean;
  setStockQuery: React.Dispatch<React.SetStateAction<boolean>>;
  sortByQuery: string;
  setSortByQuery: React.Dispatch<React.SetStateAction<string>>;
}

const initialProductContextProps: IProductContextProps = {
  categories: [],
  setCategories: (() => undefined) as Dispatch<any>,
  searchQuery: queryDefaultValues.SEARCH_QUERY,
  setSearchQuery: (() => undefined) as Dispatch<any>,
  categoryQuery: queryDefaultValues.CATEGORY_QUERY,
  setCategoryQuery: (() => undefined) as Dispatch<any>,
  priceQuery: queryDefaultValues.PRICE_QUERY,
  setPriceQuery: (() => undefined) as Dispatch<any>,
  saleQuery: queryDefaultValues.SALE_QUERY,
  setSaleQuery: (() => undefined) as Dispatch<any>,
  stockQuery: queryDefaultValues.STOCK_QUERY,
  setStockQuery: (() => undefined) as Dispatch<any>,
  sortByQuery: queryDefaultValues.SORT_BY_QUERY,
  setSortByQuery: (() => undefined) as Dispatch<any>,
};

const ProductContext = createContext<IProductContextProps>(
  initialProductContextProps
);

const ProductProvider: React.FC<IProps> = ({ children }) => {
  const [categories, setCategories] = useState<string[]>([]);

  const [searchQuery, setSearchQuery] = useState(
    queryDefaultValues.SEARCH_QUERY
  );
  const [categoryQuery, setCategoryQuery] = useState<string>(
    queryDefaultValues.CATEGORY_QUERY
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

  return (
    <ProductContext.Provider
      value={{
        categories,
        setCategories,
        searchQuery,
        setSearchQuery,
        categoryQuery,
        setCategoryQuery,
        priceQuery,
        setPriceQuery,
        saleQuery,
        setSaleQuery,
        stockQuery,
        setStockQuery,
        sortByQuery,
        setSortByQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
