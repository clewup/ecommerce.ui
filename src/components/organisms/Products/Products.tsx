import Product from "../../molecules/Product/Product";
import "./products.scss";
import { IProduct } from "../../../types/IProduct";
import useProductFilter from "../../../hooks/useProductFilter";
import AppError from "../../molecules/AppError/AppError";
import React from "react";

const Products = () => {
  const { filteredProducts, error } = useProductFilter();

  if (error) return <AppError error={error} />;

  return (
    <div id={"products"}>
      {filteredProducts.map((product: IProduct) => {
        return (
          <div key={`product-${product.id}`}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};
export default Products;
