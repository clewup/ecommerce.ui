import Subheading from "../../atoms/Subheading/Subheading";
import "./featured-products.scss";

const FeaturedProducts = () => {
  return (
    <div id={"featured-products"}>
      <Subheading>Featured Products</Subheading>
      <div className={"featured-products"}></div>
    </div>
  );
};
export default FeaturedProducts;
