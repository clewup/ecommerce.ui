import "./product-filter.scss";
import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";
import useProductFilter from "../../../hooks/useProductFilter";
import Input from "../../atoms/Input/Input";
import SelectInput from "../../atoms/SelectInput/SelectInput";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { InputLabel, Slider } from "@mui/material";

const ProductFilter = () => {
  const {
    searchQuery,
    setSearchQuery,
    categoryQuery,
    setCategoryQuery,
    variantQuery,
    setVariantQuery,
    setPriceQuery,
    stockQuery,
    setStockQuery,
    saleQuery,
    setSaleQuery,
  } = useContext(ProductContext);

  const { categories, variants, error } = useProductFilter();

  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <div id={"product-filter"}>
      <Input
        label={"Search"}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SelectInput
        label={"Category"}
        value={categoryQuery}
        onChange={(e) => setCategoryQuery(e.target.value)}
        options={categories}
        showAll={true}
      />
      <SelectInput
        label={"Variant"}
        value={variantQuery}
        onChange={(e) => setVariantQuery(e.target.value)}
        options={variants}
        showAll={true}
      />
      <InputLabel>Price</InputLabel>
      <Slider
        getAriaLabel={() => "Price"}
        defaultValue={[0, 2000]}
        min={0}
        max={2000}
        step={100}
        onChange={(e, value) => setPriceQuery(value as number[])}
        valueLabelDisplay="auto"
        sx={{ width: 180 }}
      />
      <Checkbox
        label={"In Stock"}
        value={stockQuery}
        onChange={() =>
          stockQuery ? setStockQuery(false) : setStockQuery(true)
        }
      />
      <Checkbox
        label={"On Sale"}
        value={saleQuery}
        onChange={() => (saleQuery ? setSaleQuery(false) : setSaleQuery(true))}
      />
    </div>
  );
};
export default ProductFilter;
