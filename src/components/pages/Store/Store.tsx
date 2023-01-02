import "./store.scss";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Products from "../../organisms/Products/Products";
import ProductFilter from "../../molecules/ProductFilter/ProductFilter";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import React, { useState } from "react";
import useProductFilter from "../../../hooks/useProductFilter";
import { Button } from "@mui/material";
import Text from "../../atoms/Text/Text";
import AppLoader from "../../atoms/AppLoader/AppLoader";

const Store = () => {
  const { products, isLoading, isQuerying, error } = useProductFilter();
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setFilterOpen(isOpen);
    };

  return (
    <Wrapper id={"store"}>
      <div className={"product-filter"}>
        <Button onClick={toggleDrawer(true)}>Filters</Button>
        <Text>Showing {products.length} results.</Text>

        <SwipeableDrawer
          anchor={"left"}
          open={isFilterOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <ProductFilter toggleDrawer={toggleDrawer} />
        </SwipeableDrawer>
      </div>
      <div className={"products"}>
        {isLoading || isQuerying ? (
          <AppLoader />
        ) : (
          <Products products={products} isLoading={isLoading} error={error} />
        )}
      </div>
    </Wrapper>
  );
};
export default Store;
