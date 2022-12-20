import "./categories-banner.scss";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";
import CategoryTile from "../../molecules/CategoryTile/CategoryTile";

const CategoriesBanner = () => {
  const { categories } = useContext(ProductContext);

  return (
    <div id={"categories-banner"}>
      {categories?.map((category) => {
        return <CategoryTile category={category} />;
      })}
    </div>
  );
};
export default CategoriesBanner;
