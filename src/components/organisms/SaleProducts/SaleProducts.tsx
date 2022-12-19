import "./sale-products.scss";
import { Divider } from "@mui/material";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import Loader from "../../atoms/Loader/Loader";
import Product from "../../molecules/Product/Product";
import useStatistics from "../../../hooks/useStatistics";
import { useEffect } from "react";
import AppError from "../../molecules/AppError/AppError";
import { fontColor } from "../../../enums/fonts";

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
                <Product product={product} />
              </div>
            );
          })}{" "}
        </div>
      )}
    </div>
  );
};
export default SaleProducts;
