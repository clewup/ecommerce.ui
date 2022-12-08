import React, { createContext, Dispatch, useState } from "react";

interface IProps {
  children: JSX.Element;
}

export interface IProductContextProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  categoryQuery: string;
  setCategoryQuery: React.Dispatch<React.SetStateAction<string>>;
  priceQuery: number[] | null;
  setPriceQuery: React.Dispatch<React.SetStateAction<number[] | null>>;
  saleQuery: boolean;
  setSaleQuery: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialProductContextProps: IProductContextProps = {
  searchQuery: "",
  setSearchQuery: (() => undefined) as Dispatch<any>,
  categoryQuery: "all",
  setCategoryQuery: (() => undefined) as Dispatch<any>,
  priceQuery: null,
  setPriceQuery: (() => undefined) as Dispatch<any>,
  saleQuery: false,
  setSaleQuery: (() => undefined) as Dispatch<any>,
};

const ProductContext = createContext<IProductContextProps>(
  initialProductContextProps
);

const ProductProvider: React.FC<IProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState<string>("all");
  const [priceQuery, setPriceQuery] = useState<number[] | null>(null);
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
        saleQuery,
        setSaleQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
