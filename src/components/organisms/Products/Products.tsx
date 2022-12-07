import Product from "../../molecules/Product/Product";
import "./products.scss";
import { IProduct } from "../../../types/IProduct";
import Loader from "../../atoms/Loader/Loader";
import useProductFilter from "../../../hooks/useProductFilter";
import ErrorMessage from "../../molecules/ErrorMessage/ErrorMessage";
import React from "react";

const Products = () => {
  const { products, filteredProducts, isLoading, error } = useProductFilter();

  if (!products || isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div id={"products"}>
      {filteredProducts.map((product: IProduct) => {
        return (
          <div key={"product"}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};
export default Products;
