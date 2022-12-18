import Subheading, {
  subheadingColor,
  subheadingSize,
} from "../../atoms/Subheading/Subheading";
import "./featured-products.scss";
import useStatistics from "../../../hooks/useStatistics";
import { useEffect } from "react";
import Product from "../../molecules/Product/Product";
import AppError from "../../molecules/AppError/AppError";
import Loader from "../../atoms/Loader/Loader";
import { Divider } from "@mui/material";

const FeaturedProducts = () => {
  const {
    discountedProducts,
    popularProducts,
    isLoading,
    error,
    getMostDiscounted,
    getMostPopular,
  } = useStatistics();

  useEffect(() => {
    getMostDiscounted(5);
    getMostPopular(5);
    // eslint-disable-next-line
  }, []);

  if (error) return <AppError error={error} />;

  return (
    <div id={"featured-products"}>
      <Divider>
        <Subheading size={subheadingSize.SMALL}>TRENDING</Subheading>
      </Divider>
      {isLoading ? (
        <div className={"featured-products-loader"}>
          <Loader />
        </div>
      ) : (
        <div className={"featured-products"}>
          {popularProducts.map((product) => {
            return (
              <div key={String(product.id)}>
                <Product product={product} />
              </div>
            );
          })}{" "}
        </div>
      )}

      <Divider>
        <Subheading size={subheadingSize.SMALL} color={subheadingColor.RED}>
          SALE!
        </Subheading>
      </Divider>
      {isLoading ? (
        <div className={"featured-products-loader"}>
          <Loader />
        </div>
      ) : (
        <div className={"featured-products"}>
          {discountedProducts.map((product) => {
            return (
              <div key={String(product.id)}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default FeaturedProducts;
