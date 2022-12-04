import React, { createContext, useState } from "react";

interface IProps {
  children: JSX.Element;
}

export interface ProductContextProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  categoryQuery: string;
  setCategoryQuery: React.Dispatch<React.SetStateAction<string>>;
  priceQuery: number[] | undefined;
  setPriceQuery: React.Dispatch<React.SetStateAction<number[] | undefined>>;
  stockQuery: boolean;
  setStockQuery: React.Dispatch<React.SetStateAction<boolean>>;
  saleQuery: boolean;
  setSaleQuery: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductContext = createContext({} as ProductContextProps);

const ProductProvider: React.FC<IProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("all");
  const [priceQuery, setPriceQuery] = useState<number[]>();
  const [stockQuery, setStockQuery] = useState(true);
  const [saleQuery, setSaleQuery] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        categoryQuery,
        setCategoryQuery,
        priceQuery,
        setPriceQuery,
        stockQuery,
        setStockQuery,
        saleQuery,
        setSaleQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
