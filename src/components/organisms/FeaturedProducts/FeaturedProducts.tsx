import Subheading from "../../atoms/Subheading/Subheading";
import Product from "../../molecules/Product/Product";
import "./featured-products.scss";
import GetProducts from "../../../api/GetProducts";
import { IProduct } from "../../../types/IProduct";

const FeaturedProducts = () => {
  const { data: products, loading, error } = GetProducts();

  if (!products || loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <div id={"featured-products"}>
      <Subheading>Featured Products</Subheading>
      <div className={"featured-products"}>
        {products.map((product: IProduct) => {
          return <Product product={product} key={product.name} />;
        })}
      </div>
    </div>
  );
};
export default FeaturedProducts;
