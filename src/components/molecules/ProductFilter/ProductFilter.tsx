import "./product-filter.scss";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";
import useProductFilter from "../../../hooks/useProductFilter";

const ProductFilter = () => {
  const {
    searchQuery,
    setSearchQuery,
    categoryQuery,
    setCategoryQuery,
    variantQuery,
    setVariantQuery,
    priceQuery,
    setPriceQuery,
    stockQuery,
    setStockQuery,
    saleQuery,
    setSaleQuery,
  } = useContext(ProductContext);

  const { categories, variants, loading, error } = useProductFilter();

  if (!categories || !variants || loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;

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
        <label>Category</label>
        <select
          value={categoryQuery}
          onChange={(e) => setCategoryQuery(e.target.value)}
        >
          <option value={"all"}>All</option>
          {categories.map((category: string) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div className={"product-filter-group"}>
        <label>Variant</label>
        <select
          value={variantQuery}
          onChange={(e) => setVariantQuery(e.target.value)}
        >
          <option value={"all"}>All</option>
          {variants.map((variant: string) => {
            return (
              <option key={variant} value={variant}>
                {variant}
              </option>
            );
          })}
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
      <div className={"product-filter-group"}>
        <label>On sale</label>
        <input
          type={"checkbox"}
          onClick={() => (saleQuery ? setSaleQuery(false) : setSaleQuery(true))}
        />
      </div>
    </div>
  );
};
export default ProductFilter;
