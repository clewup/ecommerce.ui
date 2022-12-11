import "./product.scss";
import { IProduct } from "../../../types/IProduct";
import React, { useContext } from "react";
import useCart from "../../../hooks/useCart";
import { ShoppingCart as AddToCartIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/User";
import { AuthContext } from "../../../contexts/Auth";
import { CartContext } from "../../../contexts/Cart";
import { LoadingButton } from "@mui/lab";

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  const { user } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { isLoading } = useContext(CartContext);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div id={"product"}>
      <div className={"product-title"}>{product.name}</div>
      <div
        className={"product-image"}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img src={product.images![0]!.url!} alt={product.name} />
      </div>
      <div className={"product-info"}>
        <p>{product.color}</p>
        <p>£{product.pricePerUnit}</p>
      </div>
      <div className={"product-actions"}>
        <LoadingButton
          color="success"
          type={"button"}
          variant={"contained"}
          loading={isLoading}
          onClick={() => {
            !user && !isAuthenticated ? navigate("/login") : addToCart(product);
          }}
        >
          <AddToCartIcon />
        </LoadingButton>
      </div>
    </div>
  );
};
export default Product;
