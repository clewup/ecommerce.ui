import Product from "../../molecules/Product/Product";
import "./products.scss";
import { IProduct } from "../../../types/IProduct";
import Loader from "../../atoms/Loader/Loader";
import useProductFilter from "../../../hooks/useProductFilter";

const Products = () => {
  const { products, filteredProducts, isLoading, error } = useProductFilter();

  if (!products || isLoading) return <Loader />;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <div id={"products"}>
      {filteredProducts.map((product: IProduct) => {
        return <Product product={product} />;
      })}
    </div>
  );
};
export default Products;
