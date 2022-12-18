import React, { createContext, Dispatch, useState } from "react";

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
  priceQuery: number[] | null;
  setPriceQuery: React.Dispatch<React.SetStateAction<number[] | null>>;
  saleQuery: boolean;
  setSaleQuery: React.Dispatch<React.SetStateAction<boolean>>;
  sortByQuery: string;
  setSortByQuery: React.Dispatch<React.SetStateAction<string>>;
}

const initialProductContextProps: IProductContextProps = {
  categories: [],
  setCategories: (() => undefined) as Dispatch<any>,
  searchQuery: "",
  setSearchQuery: (() => undefined) as Dispatch<any>,
  categoryQuery: "all",
  setCategoryQuery: (() => undefined) as Dispatch<any>,
  priceQuery: null,
  setPriceQuery: (() => undefined) as Dispatch<any>,
  saleQuery: false,
  setSaleQuery: (() => undefined) as Dispatch<any>,
  sortByQuery: "any",
  setSortByQuery: (() => undefined) as Dispatch<any>,
};

const ProductContext = createContext<IProductContextProps>(
  initialProductContextProps
);

const ProductProvider: React.FC<IProps> = ({ children }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState<string>("all");
  const [priceQuery, setPriceQuery] = useState<number[] | null>(null);
  const [saleQuery, setSaleQuery] = useState(false);
  const [sortByQuery, setSortByQuery] = useState<string>("any");

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
        sortByQuery,
        setSortByQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
