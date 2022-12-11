import "./store.scss";

import Products from "../../organisms/Products/Products";
import ProductFilter from "../../molecules/ProductFilter/ProductFilter";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../contexts/Product";
import useProductFilter from "../../../hooks/useProductFilter";

const Store = () => {
  const { category } = useParams();
  const { setCategoryQuery } = useContext(ProductContext);
  const { categories } = useProductFilter();

  useEffect(() => {
    if (category) {
      const matchingCategory = categories.find(
        (c) => c.replace(/\s/g, "-").toLowerCase() === category.toLowerCase()
      );
      if (matchingCategory) {
        setCategoryQuery(matchingCategory);
      }
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
