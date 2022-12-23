import "./sale-products.scss";
import { Divider } from "@mui/material";
import Subheading from "../../atoms/Subheading/Subheading";
import Loader from "../../atoms/Loader/Loader";
import ProductTile from "../../molecules/ProductTile/ProductTile";
import useStatistics from "../../../hooks/useStatistics";
import { useEffect } from "react";
import AppError from "../../molecules/AppError/AppError";
import { fontColor, subheadingSize } from "../../../enums/typography";

const SaleProducts = () => {
  const { discountedProducts, isLoading, error, getMostDiscounted } =
    useStatistics();

  useEffect(() => {
    getMostDiscounted(4);
    // eslint-disable-next-line
  }, []);

  if (error) return <AppError error={error} />;

  return (
    <div id={"sale-products"}>
      <Divider>
        <Subheading size={subheadingSize.SMALL} color={fontColor.RED}>
          SALE!
        </Subheading>
      </Divider>
      {isLoading ? (
        <div className={"sale-products-loader"}>
          <Loader />
        </div>
      ) : (
        <div className={"sale-products-row"}>
          {discountedProducts.map((product) => {
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
export default SaleProducts;
