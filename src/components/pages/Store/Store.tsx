import Products from "../../organisms/Products/Products";
import ProductFilter from "../../molecules/ProductFilter/ProductFilter";

const Store = () => {
  return (
    <div id={"store"}>
      <ProductFilter />
      <Products />
    </div>
  );
};
export default Store;
