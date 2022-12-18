import "./product-filter.scss";
import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";
import useProductFilter from "../../../hooks/useProductFilter";
import Input from "../../atoms/Input/Input";
import SelectInput from "../../atoms/SelectInput/SelectInput";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { InputLabel, MenuItem, Select, Slider } from "@mui/material";
import AppError from "../AppError/AppError";

interface IProps {
  toggleDrawer: (isOpen: boolean) => void;
}

const ProductFilter: React.FC<IProps> = ({ toggleDrawer }) => {
  const {
    categories,
    searchQuery,
    setSearchQuery,
    categoryQuery,
    setCategoryQuery,
    setPriceQuery,
    saleQuery,
    setSaleQuery,
    sortByQuery,
    setSortByQuery,
  } = useContext(ProductContext);
  console.log(sortByQuery);
  const { error } = useProductFilter();

  if (error) return <AppError error={error} />;

  return (
    <div
      id={"product-filter"}
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Input
        label={"Search"}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <InputLabel>Sort By</InputLabel>
      <Select
        value={sortByQuery}
        onChange={(e) => setSortByQuery(e.target.value)}
        sx={{
          marginTop: 1,
          marginBottom: 1,
          backgroundColor: "white",
          textAlign: "center",
          width: "100%",
        }}
      >
        <MenuItem value={"any"}>Any</MenuItem>
        <MenuItem value={"low-to-high"}>£ Low-High</MenuItem>
        <MenuItem value={"high-to-low"}>£ High-Low</MenuItem>
      </Select>
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
        defaultValue={[0, 500]}
        min={0}
        max={500}
        step={50}
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
