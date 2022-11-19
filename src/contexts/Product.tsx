import React, { createContext, useState } from "react";

interface IProps {
  children: JSX.Element;
}

export interface ProductContextProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  variantQuery: string;
  setVariantQuery: React.Dispatch<React.SetStateAction<string>>;
  priceQuery: string;
  setPriceQuery: React.Dispatch<React.SetStateAction<string>>;
  stockQuery: boolean;
  setStockQuery: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductContext = createContext({} as ProductContextProps);

const ProductProvider: React.FC<IProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [variantQuery, setVariantQuery] = useState("");
  const [priceQuery, setPriceQuery] = useState("");
  const [stockQuery, setStockQuery] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        variantQuery,
        setVariantQuery,
        priceQuery,
        setPriceQuery,
        stockQuery,
        setStockQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
