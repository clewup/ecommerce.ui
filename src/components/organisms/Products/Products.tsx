import Product from "../../molecules/Product/Product";
import "./products.scss";
import GetProducts from "../../../api/GetProducts";
import { IProduct, IStock } from "../../../types/IProduct";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";

const Products = () => {
  const { data: products, loading, error } = GetProducts();

  const { searchQuery, variantQuery, priceQuery, stockQuery, saleQuery } =
    useContext(ProductContext);

  if (!products || loading) return <p>Loading...</p>;
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

  // Variant Query
  if (variantQuery) {
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
          .filter((product: IProduct) => product.isDiscounted === true)
          .map((product: IProduct) => {
            return <Product product={product} />;
          })}
      </div>
    );
  }

  return (
    <div id={"products"}>
      {products.map((product: IProduct) => {
        return <Product product={product} />;
      })}
    </div>
  );
};
export default Products;
