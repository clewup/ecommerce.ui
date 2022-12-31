import ProductTile from "../../molecules/ProductTile/ProductTile";
import "./products.scss";
import { IProduct } from "../../../types/IProduct";
import AppError from "../../molecules/AppError/AppError";
import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../atoms/Loader/Loader";

interface IProps {
  products: IProduct[];
  isLoading: boolean;
  error: AxiosError | null;
}

const Products: React.FC<IProps> = ({ products, isLoading, error }) => {
  const defaultPagedAmount = 10;
  const [pagedProducts, setPagedProducts] = useState<IProduct[]>([]);
  const [pagedAmount, setPagedAmount] = useState(defaultPagedAmount);

  useEffect(() => {
    setPagedProducts(products.slice(0, pagedAmount));
  }, [products, pagedAmount]);

  const loadMore = () => {
    setPagedAmount(pagedAmount + defaultPagedAmount);
  };

  if (error) return <AppError error={error} />;

  return (
    <div id={"products"}>
      {isLoading ? (
        <Loader />
      ) : (
        <InfiniteScroll
          next={loadMore}
          hasMore={pagedProducts.length < products.length}
          loader={null}
          dataLength={pagedProducts.length}
          className={"products-grid"}
          scrollThreshold={0.6}
        >
          {pagedProducts.map((product: IProduct) => {
            return (
              <div key={`product-${product.id}`}>
                <ProductTile product={product} />
              </div>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};
export default Products;
