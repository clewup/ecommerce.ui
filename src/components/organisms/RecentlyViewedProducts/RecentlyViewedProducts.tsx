import { useEffect, useState } from "react";
import { IProduct } from "../../../types/IProduct";
import ProductTile from "../../molecules/ProductTile/ProductTile";
import Subheading from "../../atoms/Subheading/Subheading";
import Text from "../../atoms/Text/Text";
import "./recently-viewed-products.scss";

const RecentlyViewedProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const recentlyViewed = localStorage.getItem("rvp");

    if (recentlyViewed) setProducts(JSON.parse(recentlyViewed));
  }, []);

  return (
    <div id={"recently-viewed-products"}>
      <Subheading align={"center"}>Recently viewed</Subheading>
      {!products.length && <Text align={"center"}>No products found.</Text>}

      <div className={"recently-viewed-row"}>
        {products.map((product) => {
          return (
            <div key={String(product.id)}>
              <ProductTile product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RecentlyViewedProducts;
