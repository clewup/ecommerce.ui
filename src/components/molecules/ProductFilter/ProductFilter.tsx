import "./product-filter.scss";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";
import useProductFilter from "../../../hooks/useProductFilter";
import Input from "../../atoms/Input/Input";
import SelectInput from "../../atoms/SelectInput/SelectInput";
import Checkbox from "../../atoms/Checkbox/Checkbox";

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

  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <div id={"product-filter"}>
      <div className={"product-filter-group"}>
        <label>Search</label>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={"product-filter-group"}>
        <label>Category</label>
        <SelectInput
          value={categoryQuery}
          onChange={(e) => setCategoryQuery(e.target.value)}
          options={categories}
        />
      </div>
      <div className={"product-filter-group"}>
        <label>Variant</label>
        <SelectInput
          value={variantQuery}
          onChange={(e) => setVariantQuery(e.target.value)}
          options={variants}
        />
      </div>
      <div className={"product-filter-group"}>
        <label>Price</label>
        <SelectInput
          value={priceQuery}
          onChange={(e) => setPriceQuery(e.target.value)}
          options={null}
        />
      </div>
      <div className={"product-filter-group"}>
        <label>In stock</label>
        <Checkbox
          value={stockQuery}
          onChange={() =>
            stockQuery ? setStockQuery(false) : setStockQuery(true)
          }
        />
      </div>
      <div className={"product-filter-group"}>
        <label>On sale</label>
        <Checkbox
          value={saleQuery}
          onChange={() =>
            saleQuery ? setSaleQuery(false) : setSaleQuery(true)
          }
        />
      </div>
    </div>
  );
};
export default ProductFilter;
