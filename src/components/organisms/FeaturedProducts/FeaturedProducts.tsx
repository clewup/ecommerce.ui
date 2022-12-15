import Subheading, {
  subheadingColor,
  subheadingSize,
} from "../../atoms/Subheading/Subheading";
import "./featured-products.scss";
import useStatistics from "../../../hooks/useStatistics";
import { useEffect } from "react";
import Product from "../../molecules/Product/Product";
import AppError from "../../molecules/AppError/AppError";

const FeaturedProducts = () => {
  const {
    discountedProducts,
    popularProducts,
    error,
    getMostDiscounted,
    getMostPopular,
  } = useStatistics();

  useEffect(() => {
    getMostDiscounted(4);
    getMostPopular(4);
    // eslint-disable-next-line
  }, []);

  if (error) return <AppError error={error} />;

  return (
    <div id={"featured-products"}>
      <Subheading size={subheadingSize.SMALL}>TRENDING</Subheading>
      <div className={"featured-products"}>
        {popularProducts.map((product) => {
          return (
            <div key={String(product.id)}>
              <Product product={product} />
            </div>
          );
        })}
      </div>

      <Subheading size={subheadingSize.SMALL} color={subheadingColor.RED}>
        SALE!
      </Subheading>
      <div className={"featured-products"}>
        {discountedProducts.map((product) => {
          return (
            <div key={String(product.id)}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedProducts;
