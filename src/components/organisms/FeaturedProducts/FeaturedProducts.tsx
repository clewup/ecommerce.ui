import Subheading from "../../atoms/Subheading/Subheading";
import Product from "../../molecules/Product/Product";
import "./featured-products.scss";

const FeaturedProducts = () => {
  return (
    <div id={"featured-products"}>
      <Subheading>Featured Products</Subheading>
      <div className={"featured-products"}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};
export default FeaturedProducts;