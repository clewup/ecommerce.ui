import "./product-filter.scss";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../contexts/Product";
import useProductFilter from "../../../hooks/useProductFilter";
import Input from "../../atoms/Input/Input";
import SelectInput from "../../atoms/SelectInput/SelectInput";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { InputLabel, Slider } from "@mui/material";
import AppError from "../AppError/AppError";
import { queryDefaultValues } from "../../../enums/defaultValues";
import { formatSelectOptions } from "../../../utils/formatSelectOptions";
import { sortByOptions } from "../../../data/sortByData";

interface IProps {
  toggleDrawer: (isOpen: boolean) => void;
}

const ProductFilter: React.FC<IProps> = ({ toggleDrawer }) => {
  const [_searchQuery, _setSearchQuery] = useState("");

  useEffect(() => {
    return () => {
      setSearchQuery(queryDefaultValues.SEARCH_QUERY);
      setCategoryQuery(queryDefaultValues.CATEGORY_QUERY);
      setPriceQuery(queryDefaultValues.PRICE_QUERY);
      setSaleQuery(queryDefaultValues.SALE_QUERY);
      setStockQuery(queryDefaultValues.STOCK_QUERY);
      setSortByQuery(queryDefaultValues.SORT_BY_QUERY);
    };
    // eslint-disable-next-line
  }, []);

  const {
    categories,
    setSearchQuery,
    categoryQuery,
    setCategoryQuery,
    setPriceQuery,
    saleQuery,
    setSaleQuery,
    stockQuery,
    setStockQuery,
    sortByQuery,
    setSortByQuery,
  } = useContext(ProductContext);

  const { error } = useProductFilter();

  const priceQueryMarks = [
    {
      value: queryDefaultValues.PRICE_QUERY[0]!,
      label: `£${queryDefaultValues.PRICE_QUERY[0]!}`,
    },
    {
      value: queryDefaultValues.PRICE_QUERY[1]!,
      label: `£${queryDefaultValues.PRICE_QUERY[1]!}`,
    },
  ];

  const handleSearch = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setSearchQuery(_searchQuery);
    }
  };

  if (error) return <AppError error={error} />;

  return (
    <div
      id={"product-filter"}
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Input
        label={"Search"}
        value={_searchQuery}
        onChange={(e) => _setSearchQuery(e.target.value)}
        onKeyDown={(e) => handleSearch(e)}
      />
      <SelectInput
        label={"Sort By"}
        value={sortByQuery}
        onChange={(e) => setSortByQuery(e.target.value)}
        options={sortByOptions}
      />
      <SelectInput
        label={"Category"}
        value={categoryQuery}
        onChange={(e) => setCategoryQuery(e.target.value)}
        options={formatSelectOptions({ options: categories })}
      />
      <InputLabel>Price</InputLabel>
      <Slider
        getAriaLabel={() => "Price"}
        defaultValue={queryDefaultValues.PRICE_QUERY}
        min={queryDefaultValues.PRICE_QUERY[0]}
        max={queryDefaultValues.PRICE_QUERY[1]}
        step={queryDefaultValues.PRICE_QUERY[1]! / 10}
        marks={priceQueryMarks}
        onChange={(e, value) => setPriceQuery(value as number[])}
        valueLabelDisplay="auto"
        sx={{ width: 180 }}
      />
      <Checkbox
        label={"On Sale"}
        value={saleQuery}
        onChange={() => (saleQuery ? setSaleQuery(false) : setSaleQuery(true))}
      />
      <Checkbox
        label={"In Stock"}
        value={stockQuery}
        onChange={() =>
          stockQuery ? setStockQuery(false) : setStockQuery(true)
        }
      />
    </div>
  );
};
export default ProductFilter;
