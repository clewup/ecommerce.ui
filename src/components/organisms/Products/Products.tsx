import Product from "../../molecules/Product/Product";
import "./products.scss";
import GetProducts from "../../../api/GetProducts";
import { IProduct } from "../../../types/IProduct";

const Products = () => {
  const { data: products, loading, error } = GetProducts();

  if (!products || loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <div id={"products"}>
      {products.map((product: IProduct) => {
        return <Product product={product} />;
      })}
    </div>
  );
};
export default Products;
