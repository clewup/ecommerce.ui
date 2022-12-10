import "./store.scss";

import Products from "../../organisms/Products/Products";
import ProductFilter from "../../molecules/ProductFilter/ProductFilter";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../contexts/Product";

const Store = () => {
  const { category } = useParams();
  const { setCategoryQuery } = useContext(ProductContext);

  useEffect(() => {
    if (category) {
      setCategoryQuery(category);
    }
  });

  return (
    <Wrapper id={"store"}>
      <div>
        <ProductFilter />
      </div>
      <Products />
    </Wrapper>
  );
};
export default Store;
