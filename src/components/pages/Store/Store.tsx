import "./store.scss";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Products from "../../organisms/Products/Products";
import ProductFilter from "../../molecules/ProductFilter/ProductFilter";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../contexts/Product";
import useProductFilter from "../../../hooks/useProductFilter";
import AppLoader from "../../atoms/AppLoader/AppLoader";
import { Button } from "@mui/material";
import Text from "../../atoms/Text/Text";

const Store = () => {
  const { category } = useParams();
  const { products, filteredProducts, isLoading } = useProductFilter();
  const { categories, setCategoryQuery } = useContext(ProductContext);
  const [isFilterOpen, setFilterOpen] = useState(false);

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
      {isLoading ? (
        <AppLoader />
      ) : (
        <>
          <div className={"product-filter"}>
            <Button onClick={toggleDrawer(true)}>Filters</Button>
            <Text>
              Showing {filteredProducts.length} results of {products.length}
            </Text>

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
            <Products />
          </div>
        </>
      )}
    </Wrapper>
  );
};
export default Store;
