import { useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { Guid } from "guid-typescript";
import Loader from "../../atoms/Loader/Loader";

const Product = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(Guid.parse(id!));

  if (!product || isLoading) return <Loader />;
  if (error) return <p>{error.message}</p>;

  return <div id={"product"}>{product.name}</div>;
};
export default Product;
