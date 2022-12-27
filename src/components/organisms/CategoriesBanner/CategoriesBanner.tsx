import "./categories-banner.scss";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";
import CategoryTile from "../../molecules/CategoryTile/CategoryTile";
import Loader from "../../atoms/Loader/Loader";

const CategoriesBanner = () => {
  const { categories } = useContext(ProductContext);
  return (
    <div id={"categories-banner"}>
      {!categories.length ? (
        <div className={"categories-banner-loader"}>
          <Loader />
        </div>
      ) : (
        <div className={"categories"}>
          {categories?.map((category) => {
            return (
              <div key={category}>
                <CategoryTile category={category} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default CategoriesBanner;
