import "./trending-products.scss";
import { Divider } from "@mui/material";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import Loader from "../../atoms/Loader/Loader";
import Product from "../../molecules/Product/Product";
import useStatistics from "../../../hooks/useStatistics";
import { useEffect } from "react";
import AppError from "../../molecules/AppError/AppError";

const TrendingProducts = () => {
  const { popularProducts, isLoading, error, getMostPopular } = useStatistics();

  useEffect(() => {
    getMostPopular(5);
    // eslint-disable-next-line
  }, []);

  if (error) return <AppError error={error} />;

  return (
    <div id={"trending-products"}>
      <Divider>
        <Subheading size={subheadingSize.SMALL}>TRENDING</Subheading>
      </Divider>
      {isLoading ? (
        <div className={"trending-products-loader"}>
          <Loader />
        </div>
      ) : (
        <div className={"trending-products-row"}>
          {popularProducts.map((product) => {
            return (
              <div key={String(product.id)}>
                <Product product={product} />
              </div>
            );
          })}{" "}
        </div>
      )}
    </div>
  );
};
export default TrendingProducts;
