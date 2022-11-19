import "./product-filter.scss";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";

const ProductFilter = () => {
  const {
    searchQuery,
    setSearchQuery,
    variantQuery,
    setVariantQuery,
    priceQuery,
    setPriceQuery,
    stockQuery,
    setStockQuery,
  } = useContext(ProductContext);

  return (
    <div id={"product-filter"}>
      <div className={"product-filter-group"}>
        <label>Search</label>
        <input
          type={"text"}
          className={"product-search"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={"product-filter-group"}>
        <label>Variant</label>
        <select
          value={variantQuery}
          onChange={(e) => setVariantQuery(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className={"product-filter-group"}>
        <label>Price</label>
        <select
          value={priceQuery}
          onChange={(e) => setPriceQuery(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className={"product-filter-group"}>
        <label>In stock</label>
        <input
          type={"checkbox"}
          onClick={() =>
            stockQuery ? setStockQuery(false) : setStockQuery(true)
          }
        />
      </div>
    </div>
  );
};
export default ProductFilter;
