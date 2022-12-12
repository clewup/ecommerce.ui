import "./product-filter.scss";
import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";
import useProductFilter from "../../../hooks/useProductFilter";
import Input from "../../atoms/Input/Input";
import SelectInput from "../../atoms/SelectInput/SelectInput";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { InputLabel, Slider } from "@mui/material";
import AppError from "../AppError/AppError";

const ProductFilter = () => {
  const {
    categories,
    searchQuery,
    setSearchQuery,
    categoryQuery,
    setCategoryQuery,
    setPriceQuery,
    saleQuery,
    setSaleQuery,
  } = useContext(ProductContext);

  const { error } = useProductFilter();

  if (error) return <AppError error={error} />;

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
        label={"On Sale"}
        value={saleQuery}
        onChange={() => (saleQuery ? setSaleQuery(false) : setSaleQuery(true))}
      />
    </div>
  );
};
export default ProductFilter;
