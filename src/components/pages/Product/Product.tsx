import { useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { Guid } from "guid-typescript";
import Loader from "../../atoms/Loader/Loader";
import Wrapper from "../../atoms/Wrapper/Wrapper";

const Product = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(Guid.parse(id!));

  if (!product || isLoading) return <Loader />;
  if (error) return <p>{error.message}</p>;

  return <Wrapper id={"product"}>{product.name}</Wrapper>;
};
export default Product;
