import { useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { Guid } from "guid-typescript";
import Loader from "../../atoms/Loader/Loader";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import AppError from "../../molecules/AppError/AppError";
import React, { useEffect } from "react";

const Product = () => {
  const { id } = useParams();
  const { product, isLoading, error, getProduct } = useProduct();

  useEffect(() => {
    if (id) {
      getProduct(Guid.parse(id));
    }
    // eslint-disable-next-line
  }, [id]);

  if (!product || isLoading) return <Loader />;
  if (error) return <AppError error={error} />;

  return <Wrapper id={"product"}>{product.name}</Wrapper>;
};
export default Product;
