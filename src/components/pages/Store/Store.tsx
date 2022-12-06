import "./store.scss";

import Products from "../../organisms/Products/Products";
import ProductFilter from "../../molecules/ProductFilter/ProductFilter";
import Wrapper from "../../atoms/Wrapper/Wrapper";

const Store = () => {
  return (
    <Wrapper id={"store"}>
      <ProductFilter />
      <Products />
    </Wrapper>
  );
};
export default Store;
