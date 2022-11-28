import Product from "../../molecules/Product/Product";
import "./products.scss";
import { IProduct, IStock } from "../../../types/IProduct";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";
import Loader from "../../atoms/Loader/Loader";
import useProduct from "../../../hooks/useProduct";

const Products = () => {
  const { products, isLoading, error } = useProduct();

  const {
    searchQuery,
    categoryQuery,
    variantQuery,
    priceQuery,
    stockQuery,
    saleQuery,
  } = useContext(ProductContext);

  if (!products || isLoading) return <Loader />;
  if (error) return <p>ERROR: {error.message}</p>;

  // Search Query
  if (searchQuery && searchQuery !== "") {
    return (
      <div id={"products"}>
        {products
          .filter(
            (product: IProduct) =>
              new RegExp(searchQuery, "i").test(product.name) // Case insensitive query.
          )
          .map((product: IProduct) => {
            return <Product product={product} />;
          })}
      </div>
    );
  }

  // Category Query
  if (categoryQuery && categoryQuery !== "all") {
    return (
      <div id={"products"}>
        {products
          .filter((product: IProduct) => product.category === categoryQuery)
          .map((product: IProduct) => {
            return <Product product={product} />;
          })}
      </div>
    );
  }

  // Variant Query
  if (variantQuery && variantQuery !== "all") {
    return (
      <div id={"products"}>
        {products
          .filter((product: IProduct) =>
            product.stock
              .map((stock: IStock) => stock.variant)
              .filter((variant: string) => variant)
              .includes(variantQuery)
          )
          .map((product: IProduct) => {
            return <Product product={product} />;
          })}
      </div>
    );
  }

  // Price Query
  if (priceQuery) {
    return (
      <div id={"products"}>
        {products
          .filter(
            (product: IProduct) =>
              product.pricePerUnit === parseFloat(priceQuery)
          )
          .map((product: IProduct) => {
            return <Product product={product} />;
          })}
      </div>
    );
  }

  // Stock Query
  if (stockQuery) {
    return (
      <div id={"products"}>
        {products
          .filter((product: IProduct) =>
            product.stock
              .map((stock: IStock) => stock.count)
              .filter((count: number) => count > 0)
          )
          .map((product: IProduct) => {
            return <Product product={product} />;
          })}
      </div>
    );
  }

  // Sale Query
  if (saleQuery) {
    return (
      <div id={"products"}>
        {products
          .filter((product: IProduct) => product.isDiscounted)
          .map((product: IProduct) => {
            return <Product product={product} />;
          })}
      </div>
    );
  }

  // All Products
  return (
    <div id={"products"}>
      {products.map((product: IProduct) => {
        return <Product product={product} />;
      })}
    </div>
  );
};
export default Products;
