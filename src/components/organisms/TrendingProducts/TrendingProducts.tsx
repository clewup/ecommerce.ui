import "./trending-products.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import Loader from "../../atoms/Loader/Loader";
import ProductTile from "../../molecules/ProductTile/ProductTile";
import useStatistics from "../../../hooks/useStatistics";
import { useEffect } from "react";
import AppError from "../../molecules/AppError/AppError";

const TrendingProducts = () => {
  const { popularProducts, isLoading, error, getMostPopular } = useStatistics();
  useEffect(() => {
    getMostPopular(4);
    // eslint-disable-next-line
  }, []);

  if (error) return <AppError error={error} />;

  return (
    <div id={"trending-products"}>
      <Subheading align={"center"}>Top rated</Subheading>
      {isLoading ? (
        <div className={"trending-products-loader"}>
          <Loader />
        </div>
      ) : (
        <div className={"trending-products-row"}>
          {popularProducts.map((product) => {
            return (
              <div key={String(product.id)}>
                <ProductTile product={product} />
              </div>
            );
          })}{" "}
        </div>
      )}
    </div>
  );
};
export default TrendingProducts;
