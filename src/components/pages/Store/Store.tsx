import "./store.scss";

import Products from "../../organisms/Products/Products";
import ProductFilter from "../../molecules/ProductFilter/ProductFilter";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../contexts/Product";

const Store = () => {
  const { category } = useParams();
  const { categories, setCategoryQuery } = useContext(ProductContext);

  useEffect(() => {
    if (category) {
      const matchingCategory = categories.find(
        (c) => c.replace(/\s/g, "-").toLowerCase() === category.toLowerCase()
      );
      if (matchingCategory) {
        setCategoryQuery(matchingCategory);
      }
    } else {
      setCategoryQuery("all");
    }
    // eslint-disable-next-line
  }, [category]);

  return (
    <Wrapper id={"store"}>
      <div className={"product-filter"}>
        <ProductFilter />
      </div>
      <div className={"products"}>
        <Products />
      </div>
    </Wrapper>
  );
};
export default Store;
