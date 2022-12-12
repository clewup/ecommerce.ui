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
import { Tooltip } from "@mui/material";
import Carousel from "react-material-ui-carousel";

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
        <Carousel animation={"slide"} swipe={false} indicators={false}>
          {product.images.map((image) => (
            <img src={image.url!} alt={image.title} />
          ))}
        </Carousel>
      </div>
      <div className={"product-info"}>
        <p>{product.color}</p>
        <p>£{product.pricePerUnit}</p>
      </div>
      <div className={"product-actions"}>
        <Tooltip title={"Add to Cart"}>
          <LoadingButton
            color="success"
            type={"button"}
            variant={"contained"}
            loading={isLoading}
            onClick={() => {
              !user && !isAuthenticated
                ? navigate("/login")
                : addToCart(product);
            }}
          >
            <AddToCartIcon />
          </LoadingButton>
        </Tooltip>
      </div>
    </div>
  );
};
export default Product;
