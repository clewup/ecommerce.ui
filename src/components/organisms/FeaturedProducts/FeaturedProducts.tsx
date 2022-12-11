import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import "./featured-products.scss";
import useFeaturedProducts from "../../../hooks/useFeaturedProducts";
import { useEffect } from "react";
import Product from "../../molecules/Product/Product";
import Loader from "../../atoms/Loader/Loader";
import AppError from "../../molecules/AppError/AppError";

const FeaturedProducts = () => {
  const { products, isLoading, error, getFeaturedProducts } =
    useFeaturedProducts();

  useEffect(() => {
    getFeaturedProducts(4);
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <AppError error={error} />;

  return (
    <div id={"featured-products"}>
      <Subheading size={subheadingSize.MEDIUM}>Featured Products</Subheading>
      <div className={"featured-products"}>
        {products?.map((product) => {
          return (
            <div key={product.name}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedProducts;
