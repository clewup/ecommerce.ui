import "./product.scss";
import { IProduct } from "../../../types/IProduct";
import React, { useContext } from "react";
import useCart from "../../../hooks/useCart";
import { ShoppingCart as AddToCartIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";
import { CartContext } from "../../../contexts/Cart";
import { LoadingButton } from "@mui/lab";
import { Tooltip } from "@mui/material";
import Carousel from "react-material-ui-carousel";

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { isLoading } = useContext(CartContext);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div id={"product-tile"}>
      <div className={"product-title"}>{product.name}</div>

      <div
        className={"product-image"}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <Carousel
          animation={"slide"}
          swipe={false}
          indicators={false}
          autoPlay={false}
        >
          {product.images.map((image) => (
            <img src={image.url!} alt={image.title} />
          ))}
        </Carousel>
      </div>
      <div className={"product-info"}>
        <p>{product.color}</p>
        {product.discount > 0 ? (
          <div className={"discounted-price"}>
            <p className="discounted-price-striked">
              £{((product.price / (100 - product.discount)) * 100).toFixed(2)}
            </p>
            <p className={"discounted-price-total"}>£{product.price}</p>
          </div>
        ) : (
          <p>£{product.price}</p>
        )}
      </div>
      <div className={"product-actions"}>
        <Tooltip title={"Add to Cart"}>
          <LoadingButton
            color="success"
            type={"button"}
            variant={"contained"}
            loading={isLoading}
            disabled={product.stock === 0}
            onClick={() => {
              !isAuthenticated ? navigate("/login") : addToCart(product);
            }}
          >
            {product.stock !== 0 ? <AddToCartIcon /> : "OUT OF STOCK"}
          </LoadingButton>
        </Tooltip>
      </div>
    </div>
  );
};
export default Product;
