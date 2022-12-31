import "./product-tile.scss";
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
import Text from "../../atoms/Text/Text";
import { calculatePriceBeforeDiscount } from "../../../utils/calculatePriceBeforeDiscount";

interface IProps {
  product: IProduct;
}

const ProductTile: React.FC<IProps> = ({ product }) => {
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
            <img src={image} alt={image} key={image} />
          ))}
        </Carousel>
      </div>
      <div className={"product-info"}>
        <Text>{product.color}</Text>
        {product.discount > 0 ? (
          <div className={"discounted-price"}>
            <Text className="discounted-price-striked">
              £{calculatePriceBeforeDiscount(product.price, product.discount)}
            </Text>
            <Text className={"discounted-price-total"}>£{product.price}</Text>
          </div>
        ) : (
          <Text>£{product.price}</Text>
        )}
      </div>
      <div className={"product-actions"}>
        <Tooltip title={"Add to Cart"}>
          <span>
            <LoadingButton
              color="success"
              type={"button"}
              variant={"contained"}
              loading={isLoading}
              disabled={product.stock === 0}
              className={"add-to-cart-btn"}
              onClick={() => {
                !isAuthenticated ? navigate("/login") : addToCart(product);
              }}
            >
              {product.stock !== 0 ? <AddToCartIcon /> : "OUT OF STOCK"}
            </LoadingButton>
          </span>
        </Tooltip>
      </div>
    </div>
  );
};
export default ProductTile;
